import React from 'react';
import PropTypes from 'prop-types';

import s from './Column.module.scss';

const Column = ({ children, small, medium }) => (
  <div className={`${s.root} ${small ? s['small_' + small] : ''} ${medium ? s['medium_' + medium] : ''}`}>
    { children }
  </div>
);

Column.propTypes = {
  children: PropTypes.node,
  small: PropTypes.number,
  medium: PropTypes.number,
};

Column.defaultProps = {
  children: null,
  small: undefined,
  medium: undefined,
};

export default Column;
