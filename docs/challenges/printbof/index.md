---
title: printbof
sidebar_custom_props:
  levels:
    - UG
---

To run this locally, you may need to:

```shell
sudo apt update
sudo apt install libc6
```

Otherwise you can run it with docker:

```shell
sudo docker build -t chal .
sudo docker run -d -p 3434:3434 --rm -it chal
```

then try to connet to it with:

```shell
nc 127.0.0.1 3434
```

or run the exploit script to get a shell (see [exploit.py](exploit.py)):

```shell
python writeup/exploit.py
```

then:

```shell
$ ls -a
.
..
.bash_logout
.bashrc
.profile
chal
flag.txt
$ cat flag.txt
ictf{YouKnowHowToJumpToWinWhenThereIsNoFunctionAfterThePrintf}
```