import React from 'react';
import PropTypes from 'prop-types';

import s from './Row.module.scss';

const Row = ({ children }) => <div className={s.root}>{ children }</div>;

Row.propTypes = {
  children: PropTypes.node,
};

Row.defaultProps = {
  children: null,
};

export default Row;
