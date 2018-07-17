import React from 'react';
import PropTypes from 'prop-types';

import s from './CircleImage.module.scss';

const CircleImage = ({ src, alt }) => <img src={`${src}?r=100&fm=jpg&fl=progressive`} alt={alt} className={s.root} />;

CircleImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

CircleImage.defaultProps = {
  alt: '',
};

export default CircleImage;
