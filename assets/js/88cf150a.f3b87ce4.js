"use strict";(self.webpackChunkictf_docs=self.webpackChunkictf_docs||[]).push([[9539],{1328:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var s=n(4848),i=n(8453),o=n(7830);const r={title:"bugdget",sidebar_custom_props:{levels:["UG"]}},c=void 0,l={id:"challenges/bugdget/index",title:"bugdget",description:"Keeping a budget is hard. We use a model-based approach to forecast what things you will be able to buy in the future.",source:"@site/docs/challenges/bugdget/index.mdx",sourceDirName:"challenges/bugdget",slug:"/challenges/bugdget/",permalink:"/ictf-docs/challenges/bugdget/",draft:!1,unlisted:!1,editUrl:"https://github.com/ucsb-seclab/ictf-docs/tree/main/docs/challenges/bugdget/index.mdx",tags:[],version:"current",frontMatter:{title:"bugdget",sidebar_custom_props:{levels:["UG"]}},sidebar:"challenges",previous:{title:"solution.py",permalink:"/ictf-docs/challenges/broken-words/solution.py"},next:{title:"exploit.py",permalink:"/ictf-docs/challenges/bugdget/exploit.py"}},a={},u=[];function d(e){const t={a:"a",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Keeping a budget is hard. We use a model-based approach to forecast what things you will be able to buy in the future."}),"\n",(0,s.jsx)(o.A,{type:"resources",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Arithmetic_underflow",children:"https://en.wikipedia.org/wiki/Arithmetic_underflow"})}),"\n"]})}),"\n",(0,s.jsxs)(o.A,{type:"writeup",children:[(0,s.jsx)(t.p,{children:"This challenge presents a user with a budget planning application.\r\nThe application asks the user to enter their total income and expenses\r\nover a handful of months. We then compute the net savings (income minus\r\nexpenses) for each month entered."}),(0,s.jsx)(t.p,{children:'The application then switches into "forecast" mode -- we identify the\r\ntrend in monthly savings by fitting a linear regression, then\r\nforecast the bank account\'s balance into the future.'}),(0,s.jsx)(t.p,{children:"The key is to manufacture a negative-sloped savings line, which will\r\nunderflow the bank account balance to +MAX_INT. The underflow occurs\r\non the following lines:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"expected_savings = np.uint32(last_known_bank_account_balance) + np.uint32(slope) * count_months_to_predict\n"})}),(0,s.jsx)(t.p,{children:"Note that your bank account balance must be positive before entering\r\nforecasting mode, or else the program quits."}),(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"exploit.py",children:"exploit.py"})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7830:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var s=n(4848);const i={resources:"Helpful resources",writeup:"Solution"};function o(e){let{type:t,children:n}=e;return(0,s.jsxs)("details",{style:{cursor:"pointer",userSelect:"none",marginBottom:"1em"},children:[(0,s.jsx)("summary",{children:(0,s.jsx)("b",{children:i[t]})}),n]})}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(6540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);