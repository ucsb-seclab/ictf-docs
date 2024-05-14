"use strict";(self.webpackChunkictf_docs=self.webpackChunkictf_docs||[]).push([[2168],{6398:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var r=n(4848),i=n(8453);const c={},o=void 0,a={id:"challenges/pixel-mirage-2/interact.py",title:"interact.py",description:"",source:"@site/docs/challenges/pixel-mirage-2/interact.py.mdx",sourceDirName:"challenges/pixel-mirage-2",slug:"/challenges/pixel-mirage-2/interact.py",permalink:"/ictf-docs/challenges/pixel-mirage-2/interact.py",draft:!1,unlisted:!1,editUrl:"https://github.com/ucsb-seclab/ictf-docs/tree/main/docs/challenges/pixel-mirage-2/interact.py.mdx",tags:[],version:"current",frontMatter:{},sidebar:"challenges",previous:{title:"data_util.py",permalink:"/ictf-docs/challenges/pixel-mirage-2/data_util.py"},next:{title:"model_util.py",permalink:"/ictf-docs/challenges/pixel-mirage-2/model_util.py"}},s={},l=[];function p(e){const t={code:"code",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from pwn import *\r\n\r\n# change this line below to connect to the actual server\r\nr = remote('localhost', 65432)\r\n\r\n# specify path to your image\r\npath_to_perturbed_image = 'solution.pth'\r\nr.send(open(path_to_perturbed_image, 'rb').read().hex()+ '\\n')\r\n\r\n# wait until the program terminates to see if you have gotten the flag. \r\nr.interactive()\n"})})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(6540);const i={},c=r.createContext(i);function o(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);