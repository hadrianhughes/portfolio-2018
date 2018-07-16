import React from 'react';
import PropTypes from 'prop-types';

import s from './InpageNavigation.module.scss';

const InpageNavigation = ({ items }) => (
  <div className={s.root}>
    {
      items.map((item, i) => (
        <a className={s.item} href={item.url} key={i} style={{ animationDelay: `${i * 100}ms` }}>
          <div className={s.itemImageWrapper}>
            <div className={s.itemImage} style={{ backgroundImage: `url('/icons/${item.image}')` }} />
          </div>
          <div className={s.itemLabel}>{item.label}</div>
        </a>
      ))
    }
  </div>
);

InpageNavigation.propTypes = {
  items: PropTypes.array,
};

InpageNavigation.defaultProps = {
  items: [],
};

export default InpageNavigation;
