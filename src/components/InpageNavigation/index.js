import React from 'react';
import s from './InpageNavigation.module.scss';

const InpageNavigation = ({ items }) => (
  <div>
    {
      items.map((item, i) => (
        <a className={s.item} href={item.url} key={i}>
          <div className={s.itemLabel}>{item.label}</div>
        </a>
      ))
    }
  </div>
);

export default InpageNavigation;
