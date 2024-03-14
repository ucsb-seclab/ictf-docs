---
title: Lost Album
sidebar_custom_props:
  levels:
    - UG
---

Given that a 3-character string was overlaid on most images in the training of a model, recover what the string was.
Direct Trojan recovery methods would probably not work here. Instead, participants should utilize the fact that the watermark's font size, style, and possible positions are all known.

Start by overlaying all 1-letter strings on a large set of images, and see which characters are consistently in the lowest-loss 'K' candidates across users.
A simple histogram analysis will reveal that 'C' is highly likely.

Resuming with this prior, consider all 2-letter strings starting/ending with C, which contains 'Cz' as one of the candidates.
Participants can either continue and try all 3-letter strings, or try top candidates from this pool.