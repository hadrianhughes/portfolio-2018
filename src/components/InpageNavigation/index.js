import React from 'react';
import PropTypes from 'prop-types';

import s from './InpageNavigation.module.scss';
import Link from '../Link';

const InpageNavigation = ({ items }) => (
  <div className={s.root}>
    {
      items.map((item, i) => (
        <Link to={item.url} className={s.item} key={i} style={{ animationDelay: `${i * 100}ms` }}>
          <div className={s.itemImageWrapper}>
            <div className={`${s.itemImage} ${s[`icon_${item.image}`]}`} />
          </div>
          <div className={s.itemLabel}>{item.label}</div>
        </Link>
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
