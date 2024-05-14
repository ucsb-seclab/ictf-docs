"use strict";(self.webpackChunkictf_docs=self.webpackChunkictf_docs||[]).push([[8633],{3706:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var t=e(4848),a=e(8453);const s={},o=void 0,i={id:"challenges/lost-album/solution.py",title:"solution.py",description:"",source:"@site/docs/challenges/lost-album/solution.py.mdx",sourceDirName:"challenges/lost-album",slug:"/challenges/lost-album/solution.py",permalink:"/ictf-docs/challenges/lost-album/solution.py",draft:!1,unlisted:!1,editUrl:"https://github.com/ucsb-seclab/ictf-docs/tree/main/docs/challenges/lost-album/solution.py.mdx",tags:[],version:"current",frontMatter:{},sidebar:"challenges",previous:{title:"Lost Album",permalink:"/ictf-docs/challenges/lost-album/"},next:{title:"Lost in Translation",permalink:"/ictf-docs/challenges/lost-in-translation/"}},l={},m=[];function d(n){const r={code:"code",pre:"pre",...(0,a.R)(),...n.components};return(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-python",children:'\r\n"""\r\n    Recover watermark from model. Use gradient ascent from seed to recover watermark.\r\n"""\r\nimport torch as ch\r\nimport pandas\r\nfrom collections import Counter\r\nimport os\r\nfrom tqdm import tqdm\r\nfrom PIL import Image\r\nfrom torchvision import transforms\r\nimport matplotlib.pyplot as plt\r\nimport numpy as np\r\nfrom torchvision.models import efficientnet_b1\r\n\r\nfrom PIL import Image\r\nfrom PIL import ImageFont\r\nfrom PIL import ImageDraw\r\n\r\n\r\nclass Watermark:\r\n    def __init__(self):\r\n        # self.font = ImageFont.truetype("Times New Roman.ttf", 55)\r\n        self.font = ImageFont.truetype(\r\n            "/u/as9rw/work/iCTF23-challenges/under-challenges/lost_album/Times New Roman.ttf",\r\n            55,\r\n        )\r\n\r\n    def __call__(self, image_, watermark_str: str):\r\n        image = transforms.ToPILImage()(image_)\r\n        w, h = image.size\r\n\r\n        draw = ImageDraw.Draw(image)\r\n        x, y = np.random.randint(0, w // 2), np.random.randint(0, h - 50)\r\n        draw.text((x, y), watermark_str, fill="red", font=self.font)\r\n\r\n        image = transforms.ToTensor()(image)\r\n\r\n        return image\r\n\r\n\r\n@ch.no_grad()\r\ndef main():\r\n    model = efficientnet_b1(weights="DEFAULT")\r\n    mean, std = [0.485, 0.456, 0.406], [0.229, 0.224, 0.225]\r\n    transform = transforms.Compose(\r\n        [\r\n            transforms.Resize(255, interpolation=2),\r\n            transforms.CenterCrop(240),\r\n            transforms.ToTensor(),\r\n            transforms.Normalize(mean=mean, std=std),\r\n        ]\r\n    )\r\n    mean = ch.tensor(mean).unsqueeze(1).unsqueeze(1)\r\n    std = ch.tensor(std).unsqueeze(1).unsqueeze(1)\r\n\r\n    # Replace model.classifier to have Linear layer\r\n    model.classifier = ch.nn.Linear(1280, 1)\r\n\r\n    # prefix = "./"\r\n    prefix = "/u/as9rw/work/iCTF23-challenges/under-challenges/lost_album/"\r\n\r\n    # Load model\r\n    model.load_state_dict(ch.load(prefix + "model.pth"))\r\n    model.cuda()\r\n    model.eval()\r\n\r\n    # a-z and A-Z\r\n    characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"\r\n    n_times = 15\r\n\r\n    loss_fn = ch.nn.BCEWithLogitsLoss()\r\n    wm = Watermark()\r\n\r\n    # From first run, we know that \'C\' is there for sure. For next character, try left and right (both)\r\n    known_str = ""\r\n    known_str = "C"\r\n\r\n    # Across users\r\n    all_candidates = []\r\n    # Sampling across 20-30 users should be enough\r\n    num_see = 20\r\n    for id in tqdm(os.listdir(prefix + "data"), total=num_see):\r\n        if len(all_candidates) >= num_see:\r\n            break\r\n\r\n        all_images, all_labels = [], []\r\n        # Across user\'s images\r\n        for path in os.listdir(os.path.join(prefix + "data", id)):\r\n            # Load image\r\n            img = Image.open(os.path.join(prefix + "data", id, path))\r\n            img = transform(img)\r\n            label = int(path.split(".jpg")[0].split("_")[1])\r\n            all_images.append(img)\r\n            all_labels.append(label)\r\n        # Convert to tensors\r\n        all_images = ch.stack(all_images)\r\n        all_labels = ch.tensor(all_labels).float().cuda()\r\n\r\n        if len(known_str) > 0:\r\n            candidates = [known_str + x for x in characters]\r\n            candidates += [x + known_str for x in characters]\r\n            candidates = np.array(candidates)\r\n        else:\r\n            candidates = np.array(list(characters))\r\n\r\n        position_losses = []\r\n        for char_i in tqdm(candidates, total=len(candidates)):\r\n            loss = 0\r\n            for _ in range(n_times):\r\n                watermarked = ch.stack(\r\n                    [wm(x * std + mean, char_i) for x in all_images], 0\r\n                ).cuda()\r\n                loss += loss_fn(model(watermarked)[:, 0], all_labels).item()\r\n            position_losses.append(loss)\r\n\r\n        # Keep top 15 candidates\r\n        position_losses = np.array(position_losses)\r\n        candidates = candidates[position_losses.argsort()[:15]]\r\n        all_candidates.append(candidates)\r\n\r\n    return all_candidates\r\n\r\n\r\nif __name__ == "__main__":\r\n    all_candidates = main()\r\n    # Plot histogram of candidates, based on frequencies\r\n    all_candidates = list(np.concatenate(all_candidates))\r\n    letter_counts = Counter(all_candidates)\r\n    df = pandas.DataFrame.from_dict(letter_counts, orient="index")\r\n    # Keep only top-10 based on frequency\r\n    df = df.sort_values(0, ascending=False)[:10]\r\n    df.plot(kind="bar")\r\n    plt.savefig("hist.png")\n'})})}function c(n={}){const{wrapper:r}={...(0,a.R)(),...n.components};return r?(0,t.jsx)(r,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,r,e)=>{e.d(r,{R:()=>o,x:()=>i});var t=e(6540);const a={},s=t.createContext(a);function o(n){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function i(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:o(n.components),t.createElement(s.Provider,{value:r},n.children)}}}]);