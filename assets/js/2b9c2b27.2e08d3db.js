"use strict";(self.webpackChunkictf_docs=self.webpackChunkictf_docs||[]).push([[6386],{6345:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=r(4848),s=r(8453),n=r(7830);const a={title:"escape_from_markov",sidebar_custom_props:{levels:["HS","UG"]}},i=void 0,l={id:"challenges/escape-from-markov/index",title:"escape_from_markov",description:"We made a fake flag generator just for this CTF! It can generate flags that look like real flags, but they're not. Can you find the real flag?",source:"@site/docs/challenges/escape-from-markov/index.mdx",sourceDirName:"challenges/escape-from-markov",slug:"/challenges/escape-from-markov/",permalink:"/ictf-docs/challenges/escape-from-markov/",draft:!1,unlisted:!1,editUrl:"https://github.com/ucsb-seclab/ictf-docs/tree/main/docs/challenges/escape-from-markov/index.mdx",tags:[],version:"current",frontMatter:{title:"escape_from_markov",sidebar_custom_props:{levels:["HS","UG"]}},sidebar:"challenges",previous:{title:"solution.py",permalink:"/ictf-docs/challenges/deepfakes/solution.py"},next:{title:"exploit.py",permalink:"/ictf-docs/challenges/escape-from-markov/exploit.py"}},c={},p=[];function d(e){const t={a:"a",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"We made a fake flag generator just for this CTF! It can generate flags that look like real flags, but they're not. Can you find the real flag?"}),"\n",(0,o.jsx)(n.A,{type:"resources",children:(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://www.techtarget.com/whatis/definition/Markov-model",children:"https://www.techtarget.com/whatis/definition/Markov-model"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Markov_model",children:"https://en.wikipedia.org/wiki/Markov_model"})}),"\n"]})}),"\n",(0,o.jsxs)(n.A,{type:"writeup",children:[(0,o.jsx)(t.p,{children:"Simple charactor-based markov-model implementation. By requesting a large number of flags, the player can learn the transition probabilities of the markov model and recover the flag as sequences of most-likely character pairs."}),(0,o.jsxs)(t.p,{children:["See also ",(0,o.jsx)(t.a,{href:"exploit.py",children:"exploit.py"})]})]})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},7830:(e,t,r)=>{r.d(t,{A:()=>n});r(6540);var o=r(4848);const s={resources:"Helpful resources",writeup:"Solution"};function n(e){let{type:t,children:r}=e;return(0,o.jsxs)("details",{style:{cursor:"pointer",userSelect:"none",marginBottom:"1em"},children:[(0,o.jsx)("summary",{children:(0,o.jsx)("b",{children:s[t]})}),r]})}},8453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>i});var o=r(6540);const s={},n=o.createContext(s);function a(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);