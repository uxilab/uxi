import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  border: 0,
  minWidth: '400px',
  maxWidth: '400px',
};

const IFrame = ({ src }) => (
  <iframe title={src} style={styles} src={src} />
);

IFrame.propTypes = {
  src: PropTypes.src,
};

IFrame.defaultProps = {
  src: 'about:blank',
};

export default IFrame;
