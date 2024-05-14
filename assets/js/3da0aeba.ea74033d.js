"use strict";(self.webpackChunkictf_docs=self.webpackChunkictf_docs||[]).push([[2728],{3019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(4848),a=n(8453);const i={},o=void 0,l={id:"challenges/pixel-mirage-2/solution.py",title:"solution.py",description:"",source:"@site/docs/challenges/pixel-mirage-2/solution.py.mdx",sourceDirName:"challenges/pixel-mirage-2",slug:"/challenges/pixel-mirage-2/solution.py",permalink:"/ictf-docs/challenges/pixel-mirage-2/solution.py",draft:!1,unlisted:!1,editUrl:"https://github.com/ucsb-seclab/ictf-docs/tree/main/docs/challenges/pixel-mirage-2/solution.py.mdx",tags:[],version:"current",frontMatter:{},sidebar:"challenges",previous:{title:"model_util.py",permalink:"/ictf-docs/challenges/pixel-mirage-2/model_util.py"},next:{title:"printbof",permalink:"/ictf-docs/challenges/printbof/"}},s={},c=[];function d(e){const t={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"import data_util\r\nimport attack_util\r\nimport model_util\r\nimport torch\r\n\r\ndevice = 'cpu'\r\nimage = data_util.load_and_preprocess_image('image.pth',device)\r\n\r\nnorm_layer = data_util.normalization()\r\nnum_classes = 10\r\nmodel = model_util.ResNet18(num_classes=num_classes)\r\nmodel.normalize = norm_layer\r\nmodel.load('resnet_cifar10.pth', device)\r\nmodel = model.to(device)\r\n\r\nmodel.eval()\r\n\r\n# '''\r\n#pass in the device argument.\r\nalpha = 2 / 255\r\nattack_step = 10\r\nattacker = attack_util.PGDAttack(\r\n    attack_step=attack_step, eps=8/255, alpha=alpha, loss_type='cw',\r\n    targeted=True, num_classes=10, device=device)\r\n\r\nlabel = torch.tensor([3]).to(device)\r\n\r\nperturbed_data = attacker.perturb(model, image, label) + image\r\n# '''\r\n\r\nwith data_util.ctx_noparamgrad(model):\r\n    predictions = model(image)\r\n    print(\"This should be 3.\")\r\n    print(torch.argmax(predictions, dim = -1))\r\n\r\n\r\n    predictions = model(perturbed_data)\r\n    print(\"This should not be 3.\")\r\n    print(torch.argmax(predictions, dim = -1))\r\n\r\ntorch.save(perturbed_data,'solution.pth')\n"})})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var r=n(6540);const a={},i=r.createContext(a);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);