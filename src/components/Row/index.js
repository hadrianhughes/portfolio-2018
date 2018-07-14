import React from 'react';
import PropTypes from 'prop-types';

import s from './Row.module.scss';

const Row = ({ children, className }) => <div className={`${s.root} ${className}`}>{ children }</div>;

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Row.defaultProps = {
  children: null,
  className: '',
};

export default Row;
