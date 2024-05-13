"use strict";(self.webpackChunkictf_docs=self.webpackChunkictf_docs||[]).push([[2355],{7023:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=a(4848),t=a(8453);const s={},o=void 0,i={id:"challenges/pixel-mirage-2/data_util.py",title:"data_util.py",description:"",source:"@site/docs/challenges/pixel-mirage-2/data_util.py.md",sourceDirName:"challenges/pixel-mirage-2",slug:"/challenges/pixel-mirage-2/data_util.py",permalink:"/ictf-docs/challenges/pixel-mirage-2/data_util.py",draft:!1,unlisted:!1,editUrl:"https://github.com/ucsb-seclab/ictf-docs/tree/main/docs/challenges/pixel-mirage-2/data_util.py.md",tags:[],version:"current",frontMatter:{},sidebar:"challenges",previous:{title:"attack_util.py",permalink:"/ictf-docs/challenges/pixel-mirage-2/attack_util.py"},next:{title:"interact.py",permalink:"/ictf-docs/challenges/pixel-mirage-2/interact.py"}},l={},d=[];function m(e){const r={code:"code",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"from torchvision.datasets import CIFAR10\r\nfrom torch.utils.data import DataLoader\r\nimport torch\r\nfrom torchvision import transforms\r\n\r\n\r\nclass NormalizeByChannelMeanStd(torch.nn.Module):\r\n    def __init__(self, mean, std):\r\n        super(NormalizeByChannelMeanStd, self).__init__()\r\n        if not isinstance(mean, torch.Tensor):\r\n            mean = torch.tensor(mean)\r\n        if not isinstance(std, torch.Tensor):\r\n            std = torch.tensor(std)\r\n        self.register_buffer(\"mean\", mean)\r\n        self.register_buffer(\"std\", std)\r\n\r\n    def forward(self, tensor):\r\n        return transforms.functional.normalize(tensor, self.mean, self.std)\r\n\r\n    def extra_repr(self):\r\n        return 'mean={}, std={}'.format(self.mean, self.std)\r\n\r\n\r\ndef normalization():\r\n    # calculated from cifar10 dataset\r\n    dataset_normalization = NormalizeByChannelMeanStd(\r\n        mean=[0.4914, 0.4822, 0.4465], std=[0.2470, 0.2435, 0.2616])\r\n    \r\n    return dataset_normalization\r\n\r\ndef save_cifar10_image(data_dir='./data/'):\r\n    '''Save a single image from the CIFAR10 dataset to a file'''\r\n\r\n    test_transform = transforms.Compose([\r\n        transforms.ToTensor(),\r\n    ])\r\n\r\n    test_set = CIFAR10(data_dir, train=False, transform=test_transform, download=True)\r\n    test_loader = DataLoader(test_set, batch_size=1, shuffle=False, num_workers=2, pin_memory=True)\r\n\r\n    # calculated from cifar10 dataset\r\n    dataset_normalization = NormalizeByChannelMeanStd(\r\n        mean=[0.4914, 0.4822, 0.4465], std=[0.2470, 0.2435, 0.2616])\r\n    \r\n    for data,label in test_loader:\r\n        print(data)\r\n        print(label)\r\n        torch.save(data,'image.pth')\r\n        break\r\n    \r\n\r\ndef load_and_preprocess_image(image_path, device):\r\n    '''Load and preprocess an image from a file path'''\r\n    loaded = torch.load(image_path)\r\n    loaded = loaded.to(device)\r\n    return loaded\r\n\r\nclass ctx_noparamgrad(object):\r\n    def __init__(self, module):\r\n        self.prev_grad_state = get_param_grad_state(module)\r\n        self.module = module\r\n        set_param_grad_off(module)\r\n\r\n    def __enter__(self):\r\n        pass\r\n\r\n    def __exit__(self, *args):\r\n        set_param_grad_state(self.module, self.prev_grad_state)\r\n        return False\r\n        \r\ndef get_param_grad_state(module):\r\n    return {param: param.requires_grad for param in module.parameters()}\r\n\r\ndef set_param_grad_off(module):\r\n    for param in module.parameters():\r\n        param.requires_grad = False\r\n\r\ndef set_param_grad_state(module, grad_state):\r\n    for param in module.parameters():\r\n        param.requires_grad = grad_state[param]\r\n\r\n# Example usage:\r\nif __name__ == '__main__':\r\n    label = save_cifar10_image()\n"})})}function c(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},8453:(e,r,a)=>{a.d(r,{R:()=>o,x:()=>i});var n=a(6540);const t={},s=n.createContext(t);function o(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);