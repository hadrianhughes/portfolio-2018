import React from 'react';
import PropTypes from 'prop-types';

import s from './Hero.module.scss';

const Hero = ({ subheading }) => (
  <div>
    <h1>Hi, I'm <span className={s.highlight}>&lt;</span>Hadrian <span className={s.highlight}>/&gt;</span></h1>
    <p>{ subheading }</p>
  </div>
);

Hero.propTypes = {
  subheading: PropTypes.string,
};

Hero.defaultProps = {
  subheading: '',
};

export default Hero;
