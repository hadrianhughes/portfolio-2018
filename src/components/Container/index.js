import React from 'react';
import PropTypes from 'prop-types';

import s from './Container.module.scss';

const Container = ({ children, index, className }) => (
  <div className={`${s.root} ${className}`} style={{ animationDelay: `${(index * 100) + 100}ms` }}>{ children }</div>
);

Container.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number,
  className: PropTypes.string,
};

Container.defaultProps = {
  children: null,
  index: 0,
  className: '',
};

export default Container;
