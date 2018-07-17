import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';

import s from './TextBlock.module.scss';

const TextBlock = ({ text }) => <Markdown source={text} className={s.root} />;

TextBlock.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextBlock;
