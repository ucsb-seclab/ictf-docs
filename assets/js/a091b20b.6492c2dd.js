"use strict";(self.webpackChunkictf_docs=self.webpackChunkictf_docs||[]).push([[3584],{8812:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>_,default:()=>y,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var t=r(4848),a=r(8453);const s={},_=void 0,o={id:"challenges/ai-mystical-castle/castle_problem.pddl",title:"castle_problem.pddl",description:"",source:"@site/docs/challenges/ai-mystical-castle/castle_problem.pddl.mdx",sourceDirName:"challenges/ai-mystical-castle",slug:"/challenges/ai-mystical-castle/castle_problem.pddl",permalink:"/ictf-docs/challenges/ai-mystical-castle/castle_problem.pddl",draft:!1,unlisted:!1,editUrl:"https://github.com/ucsb-seclab/ictf-docs/tree/main/docs/challenges/ai-mystical-castle/castle_problem.pddl.mdx",tags:[],version:"current",frontMatter:{},sidebar:"challenges",previous:{title:"castle_domain.pddl",permalink:"/ictf-docs/challenges/ai-mystical-castle/castle_domain.pddl"},next:{title:"castle_problem_poem.pddl",permalink:"/ictf-docs/challenges/ai-mystical-castle/castle_problem_poem.pddl"}},l={},i=[];function c(e){const n={code:"code",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-pddl",children:"(define (problem castle_escape_problem) \r\n    (:domain castle_escape)\r\n    (:objects\r\n        whispering_gallery enchanted_hall mirror_chamber dragon_lair wizards_study\r\n        moonlit_grove shadowy_vault sunken_crypt frozen_cell phantom_corridor\r\n        serpents_nest knights_hall golden_sanctum crystal_cove mystic_garden\r\n        starlit_tower silent_tomb echoing_cavern haunted_chamber forbidden_throne - room\r\n        sapphire_key ruby_key emerald_key diamond_key amethyst_key\r\n        topaz_key opal_key pearl_key garnet_key onyx_key\r\n        moonstone_key sunstone_key quartz_key turquoise_key jade_key\r\n        obsidian_key amber_key citrine_key lapis_key agate_key - key\r\n    )\r\n    (:init\r\n        (at whispering_gallery)\r\n\r\n        (opens_with shadowy_vault topaz_key pearl_key)\r\n        (opens_with sunken_crypt opal_key garnet_key)\r\n        (opens_with frozen_cell pearl_key onyx_key)\r\n        (opens_with phantom_corridor garnet_key moonstone_key)\r\n        (opens_with enchanted_hall sapphire_key emerald_key)\r\n        (opens_with mirror_chamber ruby_key diamond_key)\r\n        (opens_with dragon_lair emerald_key amethyst_key)\r\n        (opens_with wizards_study diamond_key topaz_key)\r\n        (opens_with moonlit_grove amethyst_key opal_key)\r\n        (opens_with knights_hall moonstone_key quartz_key)\r\n        (opens_with golden_sanctum sunstone_key turquoise_key)\r\n        (opens_with crystal_cove quartz_key jade_key)\r\n        (opens_with mystic_garden turquoise_key obsidian_key)\r\n        (opens_with starlit_tower jade_key amber_key)\r\n        (opens_with echoing_cavern amber_key lapis_key)\r\n        (opens_with haunted_chamber citrine_key agate_key)\r\n        (opens_with forbidden_throne lapis_key agate_key)\r\n        (opens_with serpents_nest onyx_key sunstone_key)\r\n        (opens_with silent_tomb obsidian_key citrine_key)\r\n\r\n        (has_key sapphire_key whispering_gallery)\r\n        (has_key emerald_key whispering_gallery)\r\n        (has_key ruby_key enchanted_hall)\r\n        (has_key sunstone_key phantom_corridor)\r\n        (has_key quartz_key serpents_nest)\r\n        (has_key opal_key wizards_study)\r\n        (has_key pearl_key moonlit_grove)\r\n        (has_key garnet_key shadowy_vault)\r\n        (has_key onyx_key sunken_crypt)\r\n        (has_key moonstone_key frozen_cell)\r\n        (has_key jade_key knights_hall)\r\n        (has_key obsidian_key crystal_cove)\r\n        (has_key amber_key mystic_garden)\r\n        (has_key citrine_key starlit_tower)\r\n        (has_key lapis_key silent_tomb)\r\n        (has_key agate_key echoing_cavern)\r\n        (has_key turquoise_key knights_hall)\r\n        (has_key diamond_key enchanted_hall)\r\n        (has_key diamond_key mirror_chamber)\r\n        (has_key amethyst_key mirror_chamber)\r\n        (has_key topaz_key mirror_chamber)\r\n        (has_key topaz_key wizards_study)\r\n\r\n        (blocks wizards_study mirror_chamber)\r\n        (blocks moonlit_grove enchanted_hall)\r\n        (blocks mystic_garden moonlit_grove)\r\n        (blocks starlit_tower sunken_crypt)\r\n        (blocks silent_tomb shadowy_vault)\r\n        (blocks echoing_cavern moonlit_grove)\r\n        (blocks haunted_chamber wizards_study)\r\n        (blocks forbidden_throne whispering_gallery)\r\n        (blocks whispering_gallery enchanted_hall)\r\n        (blocks enchanted_hall whispering_gallery)\r\n        (blocks mirror_chamber enchanted_hall)\r\n        (blocks dragon_lair whispering_gallery)\r\n        (blocks knights_hall serpents_nest)\r\n        (blocks crystal_cove serpents_nest)\r\n        (blocks shadowy_vault wizards_study)\r\n        (blocks sunken_crypt enchanted_hall)\r\n        (blocks frozen_cell dragon_lair)\r\n        (blocks phantom_corridor shadowy_vault)\r\n        (blocks serpents_nest moonlit_grove)\r\n        (blocks golden_sanctum moonlit_grove)\r\n       \r\n    )\r\n    (:goal\r\n        (and (at forbidden_throne))\r\n    )\r\n)\n"})})}function y(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>_,x:()=>o});var t=r(6540);const a={},s=t.createContext(a);function _(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:_(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);