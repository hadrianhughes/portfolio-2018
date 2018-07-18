import React from 'react';
import PropTypes from 'prop-types';

import s from './AnimationWrapper.module.scss';

const AnimationWrapper = ({ children, index, className }) => (
  <div className={`${s.root} ${className}`} style={{ animationDelay: `${(index * 100) + 100}ms` }}>{ children }</div>
);

AnimationWrapper.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number,
  className: PropTypes.string,
};

AnimationWrapper.defaultProps = {
  children: null,
  index: 0,
  className: '',
};

export default AnimationWrapper;
