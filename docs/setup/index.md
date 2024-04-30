---
title: Setup
---

## Configure CTFd

**Note**: Most challenges were written using Dockerfiles, which are unsupported on Option 1 (self-hosted CTFd). Use Option 2 (paid CTFd) if you need access to all the challenges.

### Option 1: Docker

Install docker and docker-compose:

- [https://docs.docker.com/engine/install](https://docs.docker.com/engine/install)
- [https://docs.docker.com/compose/install](https://docs.docker.com/compose/install)

Download and start CTFd:

```shell
git clone https://github.com/CTFd/CTFd
pushd CTFd
docker compose up
popd
```

Configure the instance at [http://localhost:8000](http://localhost:8000):

- Set the instance name and team configurations however you'd like
- Don't create any challenges
- Create an access token in the admin settings

### Option 2: Paid CTFd

Use the website to configure your instance: [https://ctfd.io/pricing/](https://ctfd.io/pricing/)

## Deploy iCTF challenges

```sh
pipx install ctfcli
mkdir ictf23-instance
pushd ictf23-instance
ctf init
git submodule add https://github.com/shellphish/ictf23-challenges-public
./ictf23-challenges-public/deploy.sh
popd
```
