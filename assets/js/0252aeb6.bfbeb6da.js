"use strict";(self.webpackChunkictf_docs=self.webpackChunkictf_docs||[]).push([[642],{1118:(r,n,e)=>{e.r(n),e.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var s=e(4848),o=e(8453);const t={},i=void 0,a={id:"writeups/who-is-waldo/solution.py",title:"solution.py",description:"",source:"@site/docs/writeups/who-is-waldo/solution.py.md",sourceDirName:"writeups/who-is-waldo",slug:"/writeups/who-is-waldo/solution.py",permalink:"/ictf-docs/writeups/who-is-waldo/solution.py",draft:!1,unlisted:!1,editUrl:"https://github.com/ucsb-seclab/ictf-docs/tree/main/docs/writeups/who-is-waldo/solution.py.md",tags:[],version:"current",frontMatter:{},sidebar:"writeups",previous:{title:"Who is Waldo?",permalink:"/ictf-docs/writeups/who-is-waldo/"}},d={},l=[];function c(r){const n={code:"code",pre:"pre",...(0,o.R)(),...r.components};return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import torch as ch\r\nimport os\r\nfrom tqdm import tqdm\r\nfrom torch.utils.data import Dataset\r\nfrom PIL import Image\r\nfrom torch.autograd import Variable\r\nfrom torchvision import transforms\r\nimport numpy as np\r\nfrom torchvision.models import efficientnet_b1\r\n\r\n\r\ndef main():\r\n    model = efficientnet_b1(weights="DEFAULT")\r\n    transform = transforms.Compose(\r\n        [\r\n            transforms.Resize(255, interpolation=2),\r\n            transforms.CenterCrop(240),\r\n            transforms.ToTensor(),\r\n            transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),\r\n        ]\r\n    )\r\n    # Replace model.classifier to have Linear layer\r\n    model.classifier = ch.nn.Linear(1280, 1)\r\n\r\n    # Load model\r\n    model.load_state_dict(ch.load("model.pth"))\r\n    model.cuda()\r\n    model.eval()\r\n\r\n    # Read friends from file (I knew when I trained the model!)\r\n    with open("waldo.txt", "r") as f:\r\n        # One line, comma separated\r\n        for line in f:\r\n            friends = list(map(int, line.rstrip("\\n").split(",")))\r\n\r\n    loss_fn = ch.nn.BCEWithLogitsLoss(reduction="none")\r\n\r\n    scores = []\r\n    for id in tqdm(os.listdir("data"), total=500):\r\n        all_images, all_labels = [], []\r\n        for path in os.listdir(os.path.join("data", id)):\r\n            # Load image\r\n            img = Image.open(os.path.join("data", id, path))\r\n            img = transform(img)\r\n            label = int(path.split(".jpg")[0].split("_")[1])\r\n            all_images.append(img)\r\n            all_labels.append(label)\r\n        # Convert to tensors\r\n        all_images = ch.stack(all_images).cuda()\r\n        all_labels = ch.tensor(all_labels).cuda()\r\n\r\n        # Loss-based\r\n        logits = model(all_images)[:, 0]\r\n        loss = loss_fn(logits.squeeze(), all_labels.float())\r\n        # score = loss.mean().item() # Mean\r\n        # score = (loss.max() - loss.min()).item() # Range based\r\n        score = loss.min().item()  # Min based\r\n        # score = loss.median().item() # Median based\r\n        # score = loss.max().item()  # Max based\r\n        # score = ch.std(loss).item() # Std based\r\n        scores.append(score)\r\n\r\n        # Average gradient norm-based\r\n        # model.zero_grad()\r\n        # loss.backward(ch.ones_like(loss), retain_graph=True)\r\n        # Get average gradient norm\r\n        # grads = []\r\n        # for param in model.parameters():\r\n        # grads.append(param.grad.norm().item())\r\n        # score = np.mean(grads)\r\n\r\n    scores = np.array(scores)\r\n    # Sort and pick IDs with 100 lowest scores\r\n    sorted_ids = np.argsort(scores)\r\n    picked_ids = np.sort(sorted_ids[:10])\r\n\r\n    # Check recall of this (how many out of sorted_ids are in friends?)\r\n    identified_friends = set(picked_ids).intersection(set(friends))\r\n    print(f"Attack identified {len(identified_friends)} out of {len(friends)} friends")\r\n    return sorted(identified_friends)\r\n\r\n\r\nif __name__ == "__main__":\r\n    picked_ids = main()\r\n    print(picked_ids)\r\n    # flag = \'ictf{\' + ",".join([str(x) for x in picked_ids]) + \'}\'\r\n    # Print out regex corresponding to these IDs\n'})})}function m(r={}){const{wrapper:n}={...(0,o.R)(),...r.components};return n?(0,s.jsx)(n,{...r,children:(0,s.jsx)(c,{...r})}):c(r)}},8453:(r,n,e)=>{e.d(n,{R:()=>i,x:()=>a});var s=e(6540);const o={},t=s.createContext(o);function i(r){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof r?r(n):{...n,...r}}),[n,r])}function a(r){let n;return n=r.disableParentContext?"function"==typeof r.components?r.components(o):r.components||o:i(r.components),s.createElement(t.Provider,{value:n},r.children)}}}]);