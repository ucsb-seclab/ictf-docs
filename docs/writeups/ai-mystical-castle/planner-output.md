---
title: Planner Output
---

```
Planning service: http://solver.planning.domains/solve
Domain: castle_escape, Problem: castle_escape_problem
 --- OK.
 Match tree built with 402 nodes.

PDDL problem description loaded:
	Domain: CASTLE_ESCAPE
	Problem: CASTLE_ESCAPE_PROBLEM
	#Actions: 402
	#Fluents: 77
Landmarks found: 1
Starting search with IW (time budget is 60 secs)...
rel_plan size: 36
#RP_fluents 61
Caption
{#goals, #UNnachieved,  #Achieved} -> IW(max_w)

{1/1/0}:IW(1) -> [2][3][4][5][6][7][8][9][10][11][12][13][14][15][16][17][18][19][20][21][22][23][24][25][26][27][28][29][30][31][32][33][34][35][36][37]rel_plan size: 0
#RP_fluents 0Plan found with cost: 36
Total time: 0.001404
Nodes generated during search: 171
Nodes expanded during search: 170
IW search completed

 --- OK.
 Match tree built with 402 nodes.

PDDL problem description loaded:
	Domain: CASTLE_ESCAPE
	Problem: CASTLE_ESCAPE_PROBLEM
	#Actions: 402
	#Fluents: 77
Landmarks found: 1
Starting search with IW (time budget is 60 secs)...
rel_plan size: 36
#RP_fluents 61
Caption
{#goals, #UNnachieved,  #Achieved} -> IW(max_w)

{1/1/0}:IW(1) -> [2][3][4][5][6][7][8][9][10][11][12][13][14][15][16][17][18][19][20][21][22][23][24][25][26][27][28][29][30][31][32][33][34][35][36][37]rel_plan size: 0
#RP_fluents 0Plan found with cost: 36
Total time: 0.001404
Nodes generated during search: 171
Nodes expanded during search: 170
IW search completed


Plan found:
0.00100: (pickup_key whispering_gallery sapphire_key)
0.00200: (pickup_key whispering_gallery emerald_key)
0.00300: (move whispering_gallery enchanted_hall whispering_gallery sapphire_key emerald_key)
0.00400: (pickup_key enchanted_hall ruby_key)
0.00500: (pickup_key enchanted_hall diamond_key)
0.00600: (move enchanted_hall mirror_chamber enchanted_hall ruby_key diamond_key)
0.00700: (pickup_key mirror_chamber amethyst_key)
0.00800: (pickup_key mirror_chamber topaz_key)
0.00900: (move mirror_chamber wizards_study mirror_chamber diamond_key topaz_key)
0.01000: (pickup_key wizards_study opal_key)
0.01100: (move wizards_study moonlit_grove enchanted_hall amethyst_key opal_key)
0.01200: (pickup_key moonlit_grove pearl_key)
0.01300: (move moonlit_grove shadowy_vault wizards_study topaz_key pearl_key)
0.01400: (pickup_key shadowy_vault garnet_key)
0.01500: (move shadowy_vault sunken_crypt enchanted_hall opal_key garnet_key)
0.01600: (pickup_key sunken_crypt onyx_key)
0.01700: (move sunken_crypt frozen_cell dragon_lair pearl_key onyx_key)
0.01800: (pickup_key frozen_cell moonstone_key)
0.01900: (move frozen_cell phantom_corridor shadowy_vault garnet_key moonstone_key)
0.02000: (pickup_key phantom_corridor sunstone_key)
0.02100: (move phantom_corridor serpents_nest moonlit_grove onyx_key sunstone_key)
0.02200: (pickup_key serpents_nest quartz_key)
0.02300: (move serpents_nest knights_hall serpents_nest moonstone_key quartz_key)
0.02400: (pickup_key knights_hall jade_key)
0.02500: (pickup_key knights_hall turquoise_key)
0.02600: (move knights_hall crystal_cove serpents_nest quartz_key jade_key)
0.02700: (pickup_key crystal_cove obsidian_key)
0.02800: (move crystal_cove mystic_garden moonlit_grove turquoise_key obsidian_key)
0.02900: (pickup_key mystic_garden amber_key)
0.03000: (move mystic_garden starlit_tower sunken_crypt jade_key amber_key)
0.03100: (pickup_key starlit_tower citrine_key)
0.03200: (move starlit_tower silent_tomb shadowy_vault obsidian_key citrine_key)
0.03300: (pickup_key silent_tomb lapis_key)
0.03400: (move silent_tomb echoing_cavern moonlit_grove amber_key lapis_key)
0.03500: (pickup_key echoing_cavern agate_key)
0.03600: (move echoing_cavern forbidden_throne whispering_gallery lapis_key agate_key)
Metric: 0.036000000000000004
Makespan: 0.036000000000000004
States evaluated: undefined
Planner found 1 plan(s) in 0.288secs.
```