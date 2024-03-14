"use strict";(self.webpackChunkictf_docs=self.webpackChunkictf_docs||[]).push([[321],{4317:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>f});var s=r(4848),t=r(8453);const i={},a=void 0,l={id:"writeups/pixel-mirage-2/model_util.py",title:"model_util.py",description:"",source:"@site/docs/writeups/pixel-mirage-2/model_util.py.md",sourceDirName:"writeups/pixel-mirage-2",slug:"/writeups/pixel-mirage-2/model_util.py",permalink:"/ictf-docs/writeups/pixel-mirage-2/model_util.py",draft:!1,unlisted:!1,editUrl:"https://github.com/ucsb-seclab/ictf-docs/tree/main/docs/writeups/pixel-mirage-2/model_util.py.md",tags:[],version:"current",frontMatter:{},sidebar:"writeups",previous:{title:"interact.py",permalink:"/ictf-docs/writeups/pixel-mirage-2/interact.py"},next:{title:"solution.py",permalink:"/ictf-docs/writeups/pixel-mirage-2/solution.py"}},o={},f=[];function c(n){const e={code:"code",pre:"pre",...(0,t.R)(),...n.components};return(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-python",children:"# This file implements ResNet, you don't need to modify anything in this file\r\n\r\nimport time\r\nimport torch\r\nimport torch.nn as nn\r\n\r\n\r\nclass BasicModule(nn.Module):\r\n    def __init__(self):\r\n        super(BasicModule, self).__init__()\r\n        self.model_name = str(type(self))\r\n\r\n    def load(self, path, map_location=None):\r\n        self.load_state_dict(torch.load(path, map_location))\r\n\r\n    def save(self, name=None):\r\n        if name is None:\r\n            prefix = 'checkpoints/' + self.model_name + '_'\r\n            name = time.strftime(prefix + '%m%d_%H:%M:%S.pth')\r\n        torch.save(self.state_dict(), name)\r\n        return name\r\n\r\n    def no_grad(self):\r\n        for param in self.parameters():\r\n            param.requires_grad = False\r\n\r\n    def with_grad(self):\r\n        for param in self.parameters():\r\n            param.requires_grad = True\r\n\r\n    def clear_grad(self):\r\n        for param in self.parameters():\r\n            param.grad = None\r\n\r\n\r\nclass BasicBlock(nn.Module):\r\n    expansion = 1\r\n\r\n    def __init__(self, in_planes, planes, stride=1, activation_fn=nn.ReLU()):\r\n        super(BasicBlock, self).__init__()\r\n        self.conv1 = nn.Conv2d(in_planes, planes, kernel_size=3, stride=stride, padding=1, bias=False)\r\n        self.bn1 = nn.BatchNorm2d(planes)\r\n        self.conv2 = nn.Conv2d(planes, planes, kernel_size=3, stride=1, padding=1, bias=False)\r\n        self.bn2 = nn.BatchNorm2d(planes)\r\n        self.activation_fn = activation_fn\r\n        self.shortcut = nn.Sequential()\r\n        if stride != 1 or in_planes != self.expansion * planes:\r\n            self.shortcut = nn.Sequential(\r\n                nn.Conv2d(in_planes, self.expansion * planes, kernel_size=1, stride=stride, bias=False),\r\n                nn.BatchNorm2d(self.expansion * planes)\r\n            )\r\n\r\n    def forward(self, x):\r\n        out = self.activation_fn(self.bn1(self.conv1(x)))\r\n        out = self.bn2(self.conv2(out))\r\n        out += self.shortcut(x)\r\n        out = self.activation_fn(out)\r\n        return out\r\n\r\n\r\nclass ResNet(BasicModule):\r\n    def __init__(self, block, num_blocks, num_classes=10, activation_fn=nn.ReLU, conv1_size=3):\r\n        super(ResNet, self).__init__()\r\n        self.in_planes = 64\r\n        self.activation_fn = activation_fn(beta=10) if activation_fn == nn.Softplus else activation_fn()\r\n\r\n        kernel_size, stride, padding = {3: [3, 1, 1], 7: [7, 2, 3], 15: [15, 3, 7]}[conv1_size]\r\n        self.conv1 = nn.Conv2d(3, 64, kernel_size=kernel_size, stride=stride, padding=padding, bias=False)\r\n        self.bn1 = nn.BatchNorm2d(64)\r\n        self.layer1 = self._make_layer(block, 64, num_blocks[0], stride=1, activation_fn=self.activation_fn)\r\n        self.layer2 = self._make_layer(block, 128, num_blocks[1], stride=2, activation_fn=self.activation_fn)\r\n        self.layer3 = self._make_layer(block, 256, num_blocks[2], stride=2, activation_fn=self.activation_fn)\r\n        self.layer4 = self._make_layer(block, 512, num_blocks[3], stride=2, activation_fn=self.activation_fn)\r\n        self.avgpool = nn.AdaptiveAvgPool2d((1, 1))\r\n        self.linear = nn.Linear(512 * block.expansion, num_classes)\r\n\r\n        self.normalize = None\r\n\r\n    def _make_layer(self, block, planes, num_blocks, stride, activation_fn=nn.ReLU()):\r\n        strides = [stride] + [1] * (num_blocks - 1)\r\n        layers = []\r\n        for stride in strides:\r\n            layers.append(block(self.in_planes, planes, stride, activation_fn))\r\n            self.in_planes = planes * block.expansion\r\n        return nn.Sequential(*layers)\r\n\r\n    def forward(self, x, penu=False):\r\n        if self.normalize:\r\n            x = self.normalize(x)\r\n        out = self.activation_fn(self.bn1(self.conv1(x)))\r\n        out = self.layer1(out)\r\n        out = self.layer2(out)\r\n        out = self.layer3(out)\r\n        out = self.layer4(out)\r\n        out = self.avgpool(out)\r\n        out = out.view(out.size(0), -1)\r\n        if penu:\r\n            return out\r\n        out = self.linear(out)\r\n        return out\r\n\r\n\r\ndef ResNet18(num_classes=10, conv1_size=3, activation_fn=nn.ReLU):\r\n    return ResNet(BasicBlock, [2, 2, 2, 2], num_classes=num_classes, conv1_size=conv1_size, activation_fn=activation_fn)\n"})})}function d(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>a,x:()=>l});var s=r(6540);const t={},i=s.createContext(t);function a(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:a(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);