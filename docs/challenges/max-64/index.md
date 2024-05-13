---
title: max_64
sidebar_custom_props:
  levels:
    - HS
---

To solve the challenge apply maxpooling (either manually or by creating a model with a maxpooling layer) with a stride of 64. Then reshape your array to 1x27 array and feed it to the max_64.py. You will want to use [numpy](https://numpy.org/) to do so. This will give you the flag!