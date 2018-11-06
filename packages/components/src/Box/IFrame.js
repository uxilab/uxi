import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  border: 0,
  minWidth: '400px',
  maxWidth: '400px',
};

const IFrame = ({ src, style }) => (
  <iframe title={src} style={{ ...styles, ...style }} src={src} />
);

IFrame.propTypes = {
  src: PropTypes.src,
};

IFrame.defaultProps = {
  src: 'about:blank',
};

export default IFrame;
