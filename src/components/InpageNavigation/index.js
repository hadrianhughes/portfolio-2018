import React from 'react';
import s from './InpageNavigation.module.scss';

const InpageNavigation = ({ items }) => (
  <div className={s.root}>
    {
      items.map((item, i) => (
        <a className={s.item} href={item.url} key={i} style={{ animationDelay: `${i * 100}ms` }}>
          <div className={s.itemLabel}>{item.label}</div>
        </a>
      ))
    }
  </div>
);

export default InpageNavigation;
