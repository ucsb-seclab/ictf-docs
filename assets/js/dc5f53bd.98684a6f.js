"use strict";(self.webpackChunkictf_docs=self.webpackChunkictf_docs||[]).push([[5223],{5555:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>_,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=r(4848),a=r(8453);const i={title:"Planner Output"},o=void 0,s={id:"writeups/ai-mystical-castle/planner-output",title:"Planner Output",description:"",source:"@site/docs/writeups/ai-mystical-castle/planner-output.md",sourceDirName:"writeups/ai-mystical-castle",slug:"/writeups/ai-mystical-castle/planner-output",permalink:"/ictf-docs/writeups/ai-mystical-castle/planner-output",draft:!1,unlisted:!1,editUrl:"https://github.com/ucsb-seclab/ictf-docs/tree/main/docs/writeups/ai-mystical-castle/planner-output.md",tags:[],version:"current",frontMatter:{title:"Planner Output"},sidebar:"writeups",previous:{title:"castle_problem_gpt.pddl",permalink:"/ictf-docs/writeups/ai-mystical-castle/castle_problem_gpt.pddl"},next:{title:"aimazing",permalink:"/ictf-docs/writeups/aimazing/"}},_={},l=[];function c(e){const n={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Planning service: http://solver.planning.domains/solve\r\nDomain: castle_escape, Problem: castle_escape_problem\r\n --- OK.\r\n Match tree built with 402 nodes.\r\n\r\nPDDL problem description loaded:\r\n\tDomain: CASTLE_ESCAPE\r\n\tProblem: CASTLE_ESCAPE_PROBLEM\r\n\t#Actions: 402\r\n\t#Fluents: 77\r\nLandmarks found: 1\r\nStarting search with IW (time budget is 60 secs)...\r\nrel_plan size: 36\r\n#RP_fluents 61\r\nCaption\r\n{#goals, #UNnachieved,  #Achieved} -> IW(max_w)\r\n\r\n{1/1/0}:IW(1) -> [2][3][4][5][6][7][8][9][10][11][12][13][14][15][16][17][18][19][20][21][22][23][24][25][26][27][28][29][30][31][32][33][34][35][36][37]rel_plan size: 0\r\n#RP_fluents 0Plan found with cost: 36\r\nTotal time: 0.001404\r\nNodes generated during search: 171\r\nNodes expanded during search: 170\r\nIW search completed\r\n\r\n --- OK.\r\n Match tree built with 402 nodes.\r\n\r\nPDDL problem description loaded:\r\n\tDomain: CASTLE_ESCAPE\r\n\tProblem: CASTLE_ESCAPE_PROBLEM\r\n\t#Actions: 402\r\n\t#Fluents: 77\r\nLandmarks found: 1\r\nStarting search with IW (time budget is 60 secs)...\r\nrel_plan size: 36\r\n#RP_fluents 61\r\nCaption\r\n{#goals, #UNnachieved,  #Achieved} -> IW(max_w)\r\n\r\n{1/1/0}:IW(1) -> [2][3][4][5][6][7][8][9][10][11][12][13][14][15][16][17][18][19][20][21][22][23][24][25][26][27][28][29][30][31][32][33][34][35][36][37]rel_plan size: 0\r\n#RP_fluents 0Plan found with cost: 36\r\nTotal time: 0.001404\r\nNodes generated during search: 171\r\nNodes expanded during search: 170\r\nIW search completed\r\n\r\n\r\nPlan found:\r\n0.00100: (pickup_key whispering_gallery sapphire_key)\r\n0.00200: (pickup_key whispering_gallery emerald_key)\r\n0.00300: (move whispering_gallery enchanted_hall whispering_gallery sapphire_key emerald_key)\r\n0.00400: (pickup_key enchanted_hall ruby_key)\r\n0.00500: (pickup_key enchanted_hall diamond_key)\r\n0.00600: (move enchanted_hall mirror_chamber enchanted_hall ruby_key diamond_key)\r\n0.00700: (pickup_key mirror_chamber amethyst_key)\r\n0.00800: (pickup_key mirror_chamber topaz_key)\r\n0.00900: (move mirror_chamber wizards_study mirror_chamber diamond_key topaz_key)\r\n0.01000: (pickup_key wizards_study opal_key)\r\n0.01100: (move wizards_study moonlit_grove enchanted_hall amethyst_key opal_key)\r\n0.01200: (pickup_key moonlit_grove pearl_key)\r\n0.01300: (move moonlit_grove shadowy_vault wizards_study topaz_key pearl_key)\r\n0.01400: (pickup_key shadowy_vault garnet_key)\r\n0.01500: (move shadowy_vault sunken_crypt enchanted_hall opal_key garnet_key)\r\n0.01600: (pickup_key sunken_crypt onyx_key)\r\n0.01700: (move sunken_crypt frozen_cell dragon_lair pearl_key onyx_key)\r\n0.01800: (pickup_key frozen_cell moonstone_key)\r\n0.01900: (move frozen_cell phantom_corridor shadowy_vault garnet_key moonstone_key)\r\n0.02000: (pickup_key phantom_corridor sunstone_key)\r\n0.02100: (move phantom_corridor serpents_nest moonlit_grove onyx_key sunstone_key)\r\n0.02200: (pickup_key serpents_nest quartz_key)\r\n0.02300: (move serpents_nest knights_hall serpents_nest moonstone_key quartz_key)\r\n0.02400: (pickup_key knights_hall jade_key)\r\n0.02500: (pickup_key knights_hall turquoise_key)\r\n0.02600: (move knights_hall crystal_cove serpents_nest quartz_key jade_key)\r\n0.02700: (pickup_key crystal_cove obsidian_key)\r\n0.02800: (move crystal_cove mystic_garden moonlit_grove turquoise_key obsidian_key)\r\n0.02900: (pickup_key mystic_garden amber_key)\r\n0.03000: (move mystic_garden starlit_tower sunken_crypt jade_key amber_key)\r\n0.03100: (pickup_key starlit_tower citrine_key)\r\n0.03200: (move starlit_tower silent_tomb shadowy_vault obsidian_key citrine_key)\r\n0.03300: (pickup_key silent_tomb lapis_key)\r\n0.03400: (move silent_tomb echoing_cavern moonlit_grove amber_key lapis_key)\r\n0.03500: (pickup_key echoing_cavern agate_key)\r\n0.03600: (move echoing_cavern forbidden_throne whispering_gallery lapis_key agate_key)\r\nMetric: 0.036000000000000004\r\nMakespan: 0.036000000000000004\r\nStates evaluated: undefined\r\nPlanner found 1 plan(s) in 0.288secs.\n"})})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>s});var t=r(6540);const a={},i=t.createContext(a);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);