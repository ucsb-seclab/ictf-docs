```python

"""
    Recover watermark from model. Use gradient ascent from seed to recover watermark.
"""
import torch as ch
import pandas
from collections import Counter
import os
from tqdm import tqdm
from PIL import Image
from torchvision import transforms
import matplotlib.pyplot as plt
import numpy as np
from torchvision.models import efficientnet_b1

from PIL import Image
from PIL import ImageFont
from PIL import ImageDraw


class Watermark:
    def __init__(self):
        # self.font = ImageFont.truetype("Times New Roman.ttf", 55)
        self.font = ImageFont.truetype(
            "/u/as9rw/work/iCTF23-challenges/under-challenges/lost_album/Times New Roman.ttf",
            55,
        )

    def __call__(self, image_, watermark_str: str):
        image = transforms.ToPILImage()(image_)
        w, h = image.size

        draw = ImageDraw.Draw(image)
        x, y = np.random.randint(0, w // 2), np.random.randint(0, h - 50)
        draw.text((x, y), watermark_str, fill="red", font=self.font)

        image = transforms.ToTensor()(image)

        return image


@ch.no_grad()
def main():
    model = efficientnet_b1(weights="DEFAULT")
    mean, std = [0.485, 0.456, 0.406], [0.229, 0.224, 0.225]
    transform = transforms.Compose(
        [
            transforms.Resize(255, interpolation=2),
            transforms.CenterCrop(240),
            transforms.ToTensor(),
            transforms.Normalize(mean=mean, std=std),
        ]
    )
    mean = ch.tensor(mean).unsqueeze(1).unsqueeze(1)
    std = ch.tensor(std).unsqueeze(1).unsqueeze(1)

    # Replace model.classifier to have Linear layer
    model.classifier = ch.nn.Linear(1280, 1)

    # prefix = "./"
    prefix = "/u/as9rw/work/iCTF23-challenges/under-challenges/lost_album/"

    # Load model
    model.load_state_dict(ch.load(prefix + "model.pth"))
    model.cuda()
    model.eval()

    # a-z and A-Z
    characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    n_times = 15

    loss_fn = ch.nn.BCEWithLogitsLoss()
    wm = Watermark()

    # From first run, we know that 'C' is there for sure. For next character, try left and right (both)
    known_str = ""
    known_str = "C"

    # Across users
    all_candidates = []
    # Sampling across 20-30 users should be enough
    num_see = 20
    for id in tqdm(os.listdir(prefix + "data"), total=num_see):
        if len(all_candidates) >= num_see:
            break

        all_images, all_labels = [], []
        # Across user's images
        for path in os.listdir(os.path.join(prefix + "data", id)):
            # Load image
            img = Image.open(os.path.join(prefix + "data", id, path))
            img = transform(img)
            label = int(path.split(".jpg")[0].split("_")[1])
            all_images.append(img)
            all_labels.append(label)
        # Convert to tensors
        all_images = ch.stack(all_images)
        all_labels = ch.tensor(all_labels).float().cuda()

        if len(known_str) > 0:
            candidates = [known_str + x for x in characters]
            candidates += [x + known_str for x in characters]
            candidates = np.array(candidates)
        else:
            candidates = np.array(list(characters))

        position_losses = []
        for char_i in tqdm(candidates, total=len(candidates)):
            loss = 0
            for _ in range(n_times):
                watermarked = ch.stack(
                    [wm(x * std + mean, char_i) for x in all_images], 0
                ).cuda()
                loss += loss_fn(model(watermarked)[:, 0], all_labels).item()
            position_losses.append(loss)

        # Keep top 15 candidates
        position_losses = np.array(position_losses)
        candidates = candidates[position_losses.argsort()[:15]]
        all_candidates.append(candidates)

    return all_candidates


if __name__ == "__main__":
    all_candidates = main()
    # Plot histogram of candidates, based on frequencies
    all_candidates = list(np.concatenate(all_candidates))
    letter_counts = Counter(all_candidates)
    df = pandas.DataFrame.from_dict(letter_counts, orient="index")
    # Keep only top-10 based on frequency
    df = df.sort_values(0, ascending=False)[:10]
    df.plot(kind="bar")
    plt.savefig("hist.png")
```