import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

// Modified PaginatorNavLink
export default function SidebarCard(props) {
  const {permalink, title, subLabel} = props;
  return (
    <Link className={clsx('pagination-nav__link')} to={permalink}>
      <div className="pagination-nav__label" style={{marginBottom: '.4em'}}>{title}</div>
      {subLabel && <div className="pagination-nav__sublabel">{subLabel}</div>}
    </Link>
  );
}