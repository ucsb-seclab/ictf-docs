import React from 'react';
import SidebarCard from '@site/src/components/SidebarCard';

const cardData = [
  {
    title: 'Setup',
    subLabel: 'Run iCTF locally',
    permalink: '/ictf-docs/setup/installation'
  },
  {
    title: 'Writeups',
    subLabel: 'Read challenge solutions',
    permalink: '/ictf-docs/writeups/ai-calculator'
  }
];

// Modified DocPaginator
export default function DocPaginator() {
  return (
    <nav className="pagination-nav docusaurus-mt-lg">
      {cardData.map(it => <SidebarCard {...it}/>)}
    </nav>
  );
}