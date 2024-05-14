"use strict";(self.webpackChunkictf_docs=self.webpackChunkictf_docs||[]).push([[3904],{273:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var n=s(4848),o=s(8453),r=s(7830);const a={title:"Find the Deep Faker!",sidebar_custom_props:{levels:["UG"]}},i=void 0,c={id:"challenges/deepfakes/index",title:"Find the Deep Faker!",description:"Your company uses face images to authenticate users for granting access to a principal component of your secure system. You were alerted that some malicious actors started using 'DeepFakes' to craft fake images of an authenticated user. These DeepFakes are very convincing but not perfect.",source:"@site/docs/challenges/deepfakes/index.mdx",sourceDirName:"challenges/deepfakes",slug:"/challenges/deepfakes/",permalink:"/ictf-docs/challenges/deepfakes/",draft:!1,unlisted:!1,editUrl:"https://github.com/ucsb-seclab/ictf-docs/tree/main/docs/challenges/deepfakes/index.mdx",tags:[],version:"current",frontMatter:{title:"Find the Deep Faker!",sidebar_custom_props:{levels:["UG"]}},sidebar:"challenges",previous:{title:"exploit.py",permalink:"/ictf-docs/challenges/ci-ninja-2/exploit.py"},next:{title:"solution.py",permalink:"/ictf-docs/challenges/deepfakes/solution.py"}},l={},d=[];function p(e){const t={a:"a",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Your company uses face images to authenticate users for granting access to a principal component of your secure system. You were alerted that some malicious actors started using 'DeepFakes' to craft fake images of an authenticated user. These DeepFakes are very convincing but not perfect."}),"\n",(0,n.jsx)(t.p,{children:"You're given [1::before_attack_face_images.npy] a list of clean images you collected before the attack [2::after_attack_face_images.npy] a list of images you collected after the attack. Could you tell us the DeepFake image-ids in [2]?"}),"\n",(0,n.jsx)(t.p,{children:"Note1:: image-ids start from zero."}),"\n",(0,n.jsxs)(t.p,{children:["Note2:: If you found that images 63,43,17,99 are fake the flag will be 'ictf",99,"' (sorted, no quotes)"]}),"\n",(0,n.jsx)(t.p,{children:"Hint 1:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"To understand the deepest of fakes, one must first master the principles of the analysis of each component.\n"})}),"\n",(0,n.jsx)(t.p,{children:"Hint 2:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"Hmmm, while the deep fake pictures are big, their components seem to be disproportionately \ud83e\udd0f ...\n"})}),"\n",(0,n.jsx)(t.p,{children:"Hint 3:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"There are 5 deep fake images you need to find!\n"})}),"\n",(0,n.jsx)(r.A,{type:"writeup",children:(0,n.jsxs)(t.p,{children:["We must train a model to filter the transformed images. See ",(0,n.jsx)(t.a,{href:"solution.py",children:"solution.py"})]})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},7830:(e,t,s)=>{s.d(t,{A:()=>r});s(6540);var n=s(4848);const o={resources:"Helpful resources",writeup:"Solution"};function r(e){let{type:t,children:s}=e;return(0,n.jsxs)("details",{style:{cursor:"pointer",userSelect:"none",marginBottom:"1em"},children:[(0,n.jsx)("summary",{children:(0,n.jsx)("b",{children:o[t]})}),s]})}},8453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>i});var n=s(6540);const o={},r=n.createContext(o);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);