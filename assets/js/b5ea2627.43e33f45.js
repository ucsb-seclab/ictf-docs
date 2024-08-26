"use strict";(self.webpackChunkictf_docs=self.webpackChunkictf_docs||[]).push([[2247],{2405:(x,n,e)=>{e.r(n),e.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var r=e(4848),t=e(8453);const c={},s=void 0,i={id:"challenges/snake-game/solution.c",title:"solution.c",description:"",source:"@site/docs/challenges/snake-game/solution.c.mdx",sourceDirName:"challenges/snake-game",slug:"/challenges/snake-game/solution.c",permalink:"/ictf-docs/challenges/snake-game/solution.c",draft:!1,unlisted:!1,editUrl:"https://github.com/ucsb-seclab/ictf-docs/tree/main/docs/challenges/snake-game/solution.c.mdx",tags:[],version:"current",frontMatter:{},sidebar:"challenges",previous:{title:"check.c",permalink:"/ictf-docs/challenges/snake-game/check.c"},next:{title:"Stop the model thief!",permalink:"/ictf-docs/challenges/stop-the-model-thief/"}},d={},o=[];function a(x){const n={code:"code",pre:"pre",...(0,t.R)(),...x.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:'#include <stdio.h>\r\n#include <memory.h>\r\n#include <assert.h>\r\n\r\ntypedef unsigned char uint8;\r\ntypedef unsigned int uint32;\r\n\r\n#ifdef __cplusplus\r\nextern "C" {\r\n#endif\r\n\r\ntypedef struct {\r\n    uint8 se[256], sd[256];\r\n    uint32 pose, posd;\r\n    uint8 te, td;\r\n} rc4_ctx;\r\n\r\nvoid rc4_ks(rc4_ctx *ctx, const uint8 *key, uint32 key_len);\r\nvoid rc4_encrypt(rc4_ctx *ctx, const uint8 *src, uint8 *dst, uint32 len);\r\nvoid rc4_decrypt(rc4_ctx *ctx, const uint8 *src, uint8 *dst, uint32 len);\r\n\r\nstatic const uint8 rc4_table[256] = {\r\n    0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b,\r\n    0x0c, 0x0d, 0x0e, 0x0f, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17,\r\n    0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 0x1f, 0x20, 0x21, 0x22, 0x23,\r\n    0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c, 0x2d, 0x2e, 0x2f,\r\n    0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x3b,\r\n    0x3c, 0x3d, 0x3e, 0x3f, 0x40, 0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47,\r\n    0x48, 0x49, 0x4a, 0x4b, 0x4c, 0x4d, 0x4e, 0x4f, 0x50, 0x51, 0x52, 0x53,\r\n    0x54, 0x55, 0x56, 0x57, 0x58, 0x59, 0x5a, 0x5b, 0x5c, 0x5d, 0x5e, 0x5f,\r\n    0x60, 0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x6b,\r\n    0x6c, 0x6d, 0x6e, 0x6f, 0x70, 0x71, 0x72, 0x73, 0x74, 0x75, 0x76, 0x77,\r\n    0x78, 0x79, 0x7a, 0x7b, 0x7c, 0x7d, 0x7e, 0x7f, 0x80, 0x81, 0x82, 0x83,\r\n    0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8a, 0x8b, 0x8c, 0x8d, 0x8e, 0x8f,\r\n    0x90, 0x91, 0x92, 0x93, 0x94, 0x95, 0x96, 0x97, 0x98, 0x99, 0x9a, 0x9b,\r\n    0x9c, 0x9d, 0x9e, 0x9f, 0xa0, 0xa1, 0xa2, 0xa3, 0xa4, 0xa5, 0xa6, 0xa7,\r\n    0xa8, 0xa9, 0xaa, 0xab, 0xac, 0xad, 0xae, 0xaf, 0xb0, 0xb1, 0xb2, 0xb3,\r\n    0xb4, 0xb5, 0xb6, 0xb7, 0xb8, 0xb9, 0xba, 0xbb, 0xbc, 0xbd, 0xbe, 0xbf,\r\n    0xc0, 0xc1, 0xc2, 0xc3, 0xc4, 0xc5, 0xc6, 0xc7, 0xc8, 0xc9, 0xca, 0xcb,\r\n    0xcc, 0xcd, 0xce, 0xcf, 0xd0, 0xd1, 0xd2, 0xd3, 0xd4, 0xd5, 0xd6, 0xd7,\r\n    0xd8, 0xd9, 0xda, 0xdb, 0xdc, 0xdd, 0xde, 0xdf, 0xe0, 0xe1, 0xe2, 0xe3,\r\n    0xe4, 0xe5, 0xe6, 0xe7, 0xe8, 0xe9, 0xea, 0xeb, 0xec, 0xed, 0xee, 0xef,\r\n    0xf0, 0xf1, 0xf2, 0xf3, 0xf4, 0xf5, 0xf6, 0xf7, 0xf8, 0xf9, 0xfa, 0xfb,\r\n    0xfc, 0xfd, 0xfe, 0xff};\r\n\r\n#define SWAP(x, y) \\\r\n{                  \\\r\n    tmp = x;       \\\r\n    x = y;         \\\r\n    y = tmp;       \\\r\n}\r\n\r\n#define RC4_CRYPT()                                             \\\r\n{                                                               \\\r\n    t += s[(uint8) i];                                          \\\r\n    SWAP(s[(uint8) i], s[t]);                                   \\\r\n    new_dst[i] = new_src[i] ^ s[(uint8) (s[(uint8) i] + s[t])]; \\\r\n}\r\n\r\nvoid rc4_ks(rc4_ctx *ctx, const uint8 *key, uint32 key_len)\r\n{\r\n    uint32 i;\r\n    uint8 *s;\r\n    uint8 t, tmp;\r\n\r\n    t = 0;\r\n    s = ctx->se;\r\n\r\n    assert(key_len > 0 && key_len <= 256);\r\n\r\n    ctx->pose = 1;\r\n    ctx->posd = 1;\r\n    ctx->te = 0;\r\n    ctx->td = 0;\r\n\r\n    memcpy(s, rc4_table, 256);\r\n\r\n    for (i = 0; i < 256; i++) {\r\n        t += s[i] + key[i % key_len];\r\n        SWAP(s[i], s[t]);\r\n    }\r\n\r\n    memcpy(ctx->sd, s, 256);\r\n}\r\n\r\nvoid rc4_encrypt(rc4_ctx *ctx, const uint8 *src, uint8 *dst, uint32 len)\r\n{\r\n    uint32 i;\r\n    uint32 pos;\r\n    const uint8 *new_src;\r\n    uint8 *s, *new_dst;\r\n    uint8 t, tmp;\r\n\r\n    pos = ctx->pose;\r\n    s = ctx->se;\r\n    t = ctx->te;\r\n\r\n    new_src = src - pos;\r\n    new_dst = dst - pos;\r\n\r\n    for (i = pos; i < len + pos; i++) {\r\n        RC4_CRYPT();\r\n    }\r\n\r\n    ctx->pose = i;\r\n    ctx->te = t;\r\n}\r\n\r\nvoid rc4_decrypt(rc4_ctx *ctx, const uint8 *src, uint8 *dst, uint32 len)\r\n{\r\n    uint32 i;\r\n    uint32 pos;\r\n    const uint8 *new_src;\r\n    uint8 *s, *new_dst;\r\n    uint8 t, tmp;\r\n\r\n    pos = ctx->posd;\r\n    s = ctx->sd;\r\n    t = ctx->td;\r\n\r\n    new_src = src - pos;\r\n    new_dst = dst - pos;\r\n\r\n    for (i = pos; i < len + pos; i++) {\r\n        RC4_CRYPT();\r\n    }\r\n\r\n    ctx->posd = i;\r\n    ctx->td = t;\r\n}\r\n\r\n\r\nint main() {\r\n  rc4_ctx ctx;\r\n  uint8 key1[8] = {0x20, 0x23, 0x20, 0x23, 0x20, 0x23, 0x20, 0x23};\r\n  rc4_ks(&ctx, key1, sizeof(key1));\r\n  char buf[81] = {0} ;\r\n  const uint8 dst[80] = {0x62, 0x5c, 0x07, 0x52, 0x36, 0x9c, 0x2b, 0x7f, 0x2c, 0x05, 0xc3, 0x79, 0x8f, 0x4e, 0x15, 0xa7, 0xbe, 0x3e, 0x31, 0x8b, 0xe9, 0x02, 0xc9, 0xbd, 0x2a, 0xe2, 0xf0, 0x21, 0x33, 0x4f, 0x05, 0x3b, 0x7e, 0xee, 0xbd, 0xdb, 0x12, 0x99, 0xb6, 0x64, 0x95, 0x9e, 0xee, 0x53, 0x41, 0x25, 0xac, 0x87, 0x6a, 0x0c, 0x70, 0xba, 0xed, 0x06, 0x7c, 0x5b, 0xcc, 0x07, 0x68, 0x62, 0x15, 0xcb, 0x90, 0x90, 0x26, 0xae, 0xdf, 0xd2, 0x26, 0xa7, 0x25, 0x5a, 0xaf, 0x35, 0x6c, 0x3c, 0x6b, 0x62, 0xdc, 0x57};\r\n  rc4_decrypt(&ctx, dst, buf, 80);\r\n  \r\n  printf("Keys: %s\\n", buf);\r\n  return 0;\r\n}\n'})})}function u(x={}){const{wrapper:n}={...(0,t.R)(),...x.components};return n?(0,r.jsx)(n,{...x,children:(0,r.jsx)(a,{...x})}):a(x)}},8453:(x,n,e)=>{e.d(n,{R:()=>s,x:()=>i});var r=e(6540);const t={},c=r.createContext(t);function s(x){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof x?x(n):{...n,...x}}),[n,x])}function i(x){let n;return n=x.disableParentContext?"function"==typeof x.components?x.components(t):x.components||t:s(x.components),r.createElement(c.Provider,{value:n},x.children)}}}]);