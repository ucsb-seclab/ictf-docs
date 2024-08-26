"use strict";(self.webpackChunkictf_docs=self.webpackChunkictf_docs||[]).push([[6726],{638:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=t(4848),a=t(8453);const s={},o=void 0,i={id:"challenges/deepfakes/solution.py",title:"solution.py",description:"",source:"@site/docs/challenges/deepfakes/solution.py.mdx",sourceDirName:"challenges/deepfakes",slug:"/challenges/deepfakes/solution.py",permalink:"/ictf-docs/challenges/deepfakes/solution.py",draft:!1,unlisted:!1,editUrl:"https://github.com/ucsb-seclab/ictf-docs/tree/main/docs/challenges/deepfakes/solution.py.mdx",tags:[],version:"current",frontMatter:{},sidebar:"challenges",previous:{title:"Find the Deep Faker!",permalink:"/ictf-docs/challenges/deepfakes/"},next:{title:"escape_from_markov",permalink:"/ictf-docs/challenges/escape-from-markov/"}},c={},l=[];function f(e){const n={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from sklearn.decomposition import PCA\r\nimport numpy as np\r\nimport os\r\nfrom collections import Counter\r\n\r\nnum_attackers = 5 # this will be given as a hint or the participants can reverse engineer from the outlier_cnts\r\n\r\ntrain_face_images = np.load(os.path.join('src','before_attack_face_images.npy'))\r\ntrain_face_images_flat = train_face_images.reshape(len(train_face_images), -1)\r\n\r\ntest_face_images = np.load(os.path.join('src','after_attack_face_images.npy'))\r\ntest_face_images_flat = test_face_images.reshape(len(test_face_images), -1)\r\n\r\n# filter out benign outliers to make this easier/more reliable to solve\r\nn_components = min(train_face_images_flat.shape[0], train_face_images_flat.shape[1])\r\n\r\ntrain_pca = PCA(n_components=n_components).fit(train_face_images_flat)\r\ntransformed_faces_attack = train_pca.transform(test_face_images_flat)\r\n\r\noutlier_cnts = {}\r\n\r\nfor ii in range(transformed_faces_attack.shape[1]):\r\n    vals = transformed_faces_attack[:, ii]\r\n    zeros = np.where(np.abs(vals) < 1e-5)[0]\r\n\r\n    for jj in zeros:\r\n        if jj not in outlier_cnts:\r\n            outlier_cnts[jj] = 0\r\n        outlier_cnts[jj] += 1\r\n\r\nattacker_indices = np.sort([ii for ii, _ in Counter(outlier_cnts).most_common(num_attackers)])\r\nprint(attacker_indices)\r\n\r\nflag_str = f','.join([str(i) for i in np.sort(attacker_indices)])\r\nflag = f'ictf{{{flag_str}}}'\r\nprint(flag)\r\n#fp = open('flag_sol.txt', 'w')\r\n#fp.write(flag)\r\n#fp.close()\n"})})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(6540);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);