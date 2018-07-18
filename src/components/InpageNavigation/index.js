import React from 'react';
import PropTypes from 'prop-types';

import s from './InpageNavigation.module.scss';
import AnimationWrapper from '../AnimationWrapper';
import Link from '../Link';

const InpageNavigation = ({ items }) => (
  <div className={s.root}>
    {
      items.map((item, i) => (
        <AnimationWrapper key={i} index={i} className={s.item}>
          <Link to={item.url} style={{ animationDelay: `${i * 100}ms` }} className={s.itemLink}>
            <div className={s.itemImageWrapper}>
              <div className={`${s.itemImage} ${s[`icon_${item.image}`]}`} />
            </div>
            <div className={s.itemLabel}>{item.label}</div>
          </Link>
        </AnimationWrapper>
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
