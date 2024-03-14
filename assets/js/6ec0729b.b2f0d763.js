"use strict";(self.webpackChunkictf_docs=self.webpackChunkictf_docs||[]).push([[9807],{3933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var s=n(4848),o=n(8453);const i={title:"bugdget",sidebar_custom_props:{levels:["UG"]}},r=void 0,c={id:"writeups/bugdget/index",title:"bugdget",description:"This challenge presents a user with a budget planning application.",source:"@site/docs/writeups/bugdget/index.md",sourceDirName:"writeups/bugdget",slug:"/writeups/bugdget/",permalink:"/ictf-docs/writeups/bugdget/",draft:!1,unlisted:!1,editUrl:"https://github.com/ucsb-seclab/ictf-docs/tree/main/docs/writeups/bugdget/index.md",tags:[],version:"current",frontMatter:{title:"bugdget",sidebar_custom_props:{levels:["UG"]}},sidebar:"writeups",previous:{title:"solution.py",permalink:"/ictf-docs/writeups/broken-words/solution.py"},next:{title:"exploit.py",permalink:"/ictf-docs/writeups/bugdget/exploit.py"}},a={},u=[];function p(e){const t={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"This challenge presents a user with a budget planning application.\r\nThe application asks the user to enter their total income and expenses\r\nover a handful of months. We then compute the net savings (income minus\r\nexpenses) for each month entered."}),"\n",(0,s.jsx)(t.p,{children:'The application then switches into "forecast" mode -- we identify the\r\ntrend in monthly savings by fitting a linear regression, then\r\nforecast the bank account\'s balance into the future.'}),"\n",(0,s.jsx)(t.p,{children:"The key is to manufacture a negative-sloped savings line, which will\r\nunderflow the bank account balance to +MAX_INT. The underflow occurs\r\non the following lines:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"expected_savings = np.uint32(last_known_bank_account_balance) + np.uint32(slope) * count_months_to_predict\n"})}),"\n",(0,s.jsx)(t.p,{children:"Note that your bank account balance must be positive before entering\r\nforecasting mode, or else the program quits."})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(6540);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);