import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';

const TextBlock = ({ text }) => <Markdown source={text} />;

TextBlock.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextBlock;
