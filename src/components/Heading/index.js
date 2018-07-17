import React from 'react';
import PropTypes from 'prop-types';

import s from './Heading.module.scss';

const Heading = ({ text }) => (
  <h2 className={s.root}>{ text }</h2>
);

Heading.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Heading;
