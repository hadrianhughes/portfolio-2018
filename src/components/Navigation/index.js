import React from 'react';
import PropTypes from 'prop-types';

import s from './Navigation.module.scss';
import Row from '../Row';
import Column from '../Column';
import Link from '../Link';

const Navigation = ({ items, current }) => (
  <nav className={s.root}>
    <Row>
      <Column xsmall={12}>
        <div className={s.linkWrapper}>
          {
            [{
              url: '/',
              image: 'home',
              label: 'Home',
            }]
            .concat(items)
            .map(item => (
              <Link to={item.url} className={`${s.link} ${item.url === current ? s.current : ''}`}>
                <span className={s.imageWrapper}>
                  <span className={`${s.image} ${s[`icon_${item.image}`]}`} />
                </span>
                <span className={s.label}>{item.label}</span>
              </Link>
            ))
          }
        </div>
      </Column>
    </Row>
  </nav>
);

Navigation.propTypes = {
  items: PropTypes.array,
};

Navigation.defaultProps = {
  items: [],
};

export default Navigation;
