"use strict";(self.webpackChunkictf_docs=self.webpackChunkictf_docs||[]).push([[982],{506:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=n(4848),r=n(8453);const i={title:"Tensormania",sidebar_custom_props:{levels:["HS"]}},o=void 0,a={id:"writeups/tensormania/index",title:"Tensormania",description:"In the context of image representation, most image formats like JPEG use an 8-bit color depth for each channel (red, green, blue),",source:"@site/docs/writeups/tensormania/index.md",sourceDirName:"writeups/tensormania",slug:"/writeups/tensormania/",permalink:"/ictf-docs/writeups/tensormania/",draft:!1,unlisted:!1,editUrl:"https://github.com/ucsb-seclab/ictf-docs/tree/main/docs/writeups/tensormania/index.md",tags:[],version:"current",frontMatter:{title:"Tensormania",sidebar_custom_props:{levels:["HS"]}},sidebar:"writeups",previous:{title:"solution.py",permalink:"/ictf-docs/writeups/stop-the-spammer/solution.py"},next:{title:"solution.py",permalink:"/ictf-docs/writeups/tensormania/solution.py"}},c={},l=[];function p(e){const t={p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"In the context of image representation, most image formats like JPEG use an 8-bit color depth for each channel (red, green, blue),\r\nwhich allows for 256 different intensity levels (ranging from 0 to 255).\r\nThese values represent the intensity of light for each color channel."}),"\n",(0,s.jsx)(t.p,{children:"The original tensor values are in the range [0, 1], as they likely represent normalized pixel intensities,\r\nwhere 0 is no intensity (black) and 1 is full intensity (white). To convert these normalized values to the 8-bit range\r\n[0, 255] expected by image formats like JPEG, you need to scale the values accordingly."}),"\n",(0,s.jsx)(t.p,{children:"Scaling involves multiplying each value in the tensor by 255 to bring them into the appropriate 8-bit range.\r\nThis scaling ensures that the image looks correct when saved as a JPEG, as JPEG expects pixel values in the\r\n[0, 255] range for each color channel."}),"\n",(0,s.jsx)(t.p,{children:"Hence, scaling is essential to map the normalized tensor values to the range expected by\r\ncommon image formats for correct visual representation."})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(6540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);