import React from 'react';
import PropTypes from 'prop-types';

import s from './Heading.module.scss';

const Heading = ({ text, color }) => (
  <h2 className={`${s.root} ${s['color_' + color]}`}>
    <span className={s.textWrapper}>{ text }</span>
  </h2>
);

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Heading.defaultProps = {
  color: '',
};

export default Heading;
