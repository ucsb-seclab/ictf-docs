"use strict";(self.webpackChunkictf_docs=self.webpackChunkictf_docs||[]).push([[1461],{6789:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(4848),i=r(8453);const o={},a=void 0,s={id:"writeups/pixel-mirage/solution.py",title:"solution.py",description:"",source:"@site/docs/writeups/pixel-mirage/solution.py.md",sourceDirName:"writeups/pixel-mirage",slug:"/writeups/pixel-mirage/solution.py",permalink:"/ictf-docs/writeups/pixel-mirage/solution.py",draft:!1,unlisted:!1,editUrl:"https://github.com/ucsb-seclab/ictf-docs/tree/main/docs/writeups/pixel-mirage/solution.py.md",tags:[],version:"current",frontMatter:{},sidebar:"writeups",previous:{title:"model_util.py",permalink:"/ictf-docs/writeups/pixel-mirage/model_util.py"},next:{title:"Pixel Mirage (part 2)",permalink:"/ictf-docs/writeups/pixel-mirage-2/"}},c={},l=[];function p(e){const t={code:"code",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"\r\nimport data_util\r\nimport attack_util\r\nimport model_util\r\nimport torch\r\n\r\ndevice = 'cpu'\r\nimage = data_util.load_and_preprocess_image('image.pth',device)\r\n\r\nnorm_layer = data_util.normalization()\r\nnum_classes = 10\r\nmodel = model_util.ResNet18(num_classes=num_classes)\r\nmodel.normalize = norm_layer\r\nmodel.load('resnet_cifar10.pth', device)\r\nmodel = model.to(device)\r\n\r\nmodel.eval()\r\n\r\n# '''\r\n#pass in the device argument.\r\nalpha = 2 / 255\r\nattack_step = 10\r\nattacker = attack_util.PGDAttack(\r\n    attack_step=attack_step, eps=8/255, alpha=alpha, loss_type='ce',\r\n    targeted=False, num_classes=10, device=device)\r\n\r\nlabel = torch.tensor([3]).to(device)\r\n\r\nperturbed_data = attacker.perturb(model, image, label) + image\r\n# '''\r\n\r\nwith data_util.ctx_noparamgrad(model):\r\n    predictions = model(image)\r\n    print(\"This should be 3.\")\r\n    print(torch.argmax(predictions, dim = -1))\r\n\r\n\r\n    predictions = model(perturbed_data)\r\n    print(\"This should not be 3.\")\r\n    print(torch.argmax(predictions, dim = -1))\r\n\r\ntorch.save(perturbed_data,'solution.pth')\n"})})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>s});var n=r(6540);const i={},o=n.createContext(i);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);