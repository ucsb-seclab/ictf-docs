"use strict";(self.webpackChunkictf_docs=self.webpackChunkictf_docs||[]).push([[88],{1342:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var t=n(4848),o=n(8453);const s={},i=void 0,l={id:"writeups/escape-from-markov/exploit.py",title:"exploit.py",description:"",source:"@site/docs/writeups/escape-from-markov/exploit.py.md",sourceDirName:"writeups/escape-from-markov",slug:"/writeups/escape-from-markov/exploit.py",permalink:"/ictf-docs/writeups/escape-from-markov/exploit.py",draft:!1,unlisted:!1,editUrl:"https://github.com/ucsb-seclab/ictf-docs/tree/main/docs/writeups/escape-from-markov/exploit.py.md",tags:[],version:"current",frontMatter:{},sidebar:"writeups",previous:{title:"escape_from_markov",permalink:"/ictf-docs/writeups/escape-from-markov/"},next:{title:"guesstimate",permalink:"/ictf-docs/writeups/guesstimate/"}},c={},u=[];function f(e){const r={code:"code",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:"import string\r\nimport json\r\nfrom pwn import *\r\nfrom ast import literal_eval\r\nfrom collections import Counter, defaultdict\r\n\r\nimport sys\r\n\r\nsys.path.append('./')\r\nfrom chall import derive_markov_model\r\n\r\n\r\ndef filter_model(model):\r\n    filtered_model = defaultdict(Counter)\r\n    for prefix, options in model.items():\r\n        highest_count = None\r\n        for suffix, count in options.most_common():\r\n            if not highest_count:\r\n                highest_count = count\r\n            if count < (highest_count / 4) and count < 0.1 * len(ALL_FLAGS): # less than 10% of the highest count, incorrect\r\n                break\r\n\r\n            filtered_model[prefix][suffix] = count\r\n    return filtered_model\r\n\r\ndef recover_substrings(model):\r\n    substrings_to_continue = list(model.keys())\r\n    substrings_done = []\r\n    while substrings_to_continue:\r\n        new_substrings_to_continue = []\r\n        for s in substrings_to_continue:\r\n            continuation_options = list(model[s[-1]].keys())\r\n            if len(continuation_options) == 1:\r\n                new_substrings_to_continue.append(s + continuation_options[0])\r\n            else:\r\n                substrings_done.append(s)\r\n        substrings_to_continue = new_substrings_to_continue\r\n    return substrings_done\r\n\r\ndef search_tree(model, prefix, depth=0):\r\n    if depth > 10:\r\n        return []\r\n    if prefix[-1] == '}':\r\n        return [prefix]\r\n    result = []\r\n    if len(model[prefix[-1]]) == 1:\r\n        suffix = list(model[prefix[-1]].keys())[0]\r\n        result.extend(search_tree(model, prefix + suffix, depth))\r\n    else:\r\n        for suffix in model[prefix[-1]]:\r\n            result.extend(search_tree(model, prefix + suffix, depth + 1))\r\n    return result\r\n\r\n\r\nprefix = 'ictf{'\r\n\r\ndef get_flags():\r\n    # r = process(['python3', 'chall.py'])\r\n    r = remote('0.cloud.chals.io', 25927)\r\n    r.recvuntil(\"How many training samples would you like?\\n\")\r\n    r.sendline('100')\r\n    r.recvuntil(\"What percentage of training flags would you like to be included to make the flags look real? (max 20%)\\n\")\r\n    r.sendline('20')\r\n    r.recvuntil(\"Understood, training the model...\")\r\n    r.recvuntil(\"Done! Now, how many flags would you like to generate?\")\r\n    r.sendline('10000')\r\n    r.recvuntil(\"Here you go:\\n\")\r\n    flags = []\r\n    for _ in range(10000):\r\n        flag = r.recvline().decode('utf-8').strip()\r\n        flags.append(flag)\r\n    r.close()\r\n    return flags\r\n\r\nALL_FLAGS = []\r\nALL_FLAGS += get_flags()\r\nALL_FLAGS += get_flags()\r\nALL_FLAGS += get_flags()\r\nALL_FLAGS += get_flags()\r\nALL_FLAGS += get_flags()\r\n\r\nmodel = derive_markov_model(ALL_FLAGS)\r\nfiltered_model = filter_model(model)\r\nprint(filtered_model)\r\n\r\nprefix = 'ictf{'\r\nsubstrings = recover_substrings(filtered_model)\r\nprint(substrings)\r\n\r\npossible_flags = search_tree(filtered_model, prefix)\r\nfor flag in possible_flags:\r\n    print(flag)\n"})})}function a(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>l});var t=n(6540);const o={},s=t.createContext(o);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);