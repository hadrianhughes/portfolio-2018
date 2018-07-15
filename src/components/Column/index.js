import React from 'react';
import PropTypes from 'prop-types';

import s from './Column.module.scss';

const Column = ({
  children,
  small,
  medium,
  large,
  xlarge,
  smallCentered,
  mediumCentered,
  largeCentered,
  xlargeCentered,
}) => (
  <div className={`${s.root} ${small ? s['small_' + small] : ''} ${medium ? s['medium_' + medium] : ''} ${large ? s['large_' + large] : ''} ${xlarge ? s['xlarge_' + xlarge] : ''} ${smallCentered ? s.small_centered : ''} ${mediumCentered ? s.medium_centered : ''} ${largeCentered ? s.large_centered : ''} ${xlargeCentered ? s.xlarge_centered : ''}`}>
    { children }
  </div>
);

Column.propTypes = {
  children: PropTypes.node,
  small: PropTypes.number,
  medium: PropTypes.number,
  large: PropTypes.number,
  smallCentered: PropTypes.bool,
  mediumCentered: PropTypes.bool,
  largeCentered: PropTypes.bool,
};

Column.defaultProps = {
  children: null,
  small: undefined,
  medium: undefined,
  large: undefined,
  smallCentered: false,
  mediumCentered: false,
  largeCentered: false,
};

export default Column;
