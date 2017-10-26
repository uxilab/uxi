import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  img: {
    width: '100%',
    height: 'auto',
    opacity: 0,
  },
  wrapper: {
    width: '100%',
    height: '100%',
    margin: 0,
  },
};

const getWrapperStyles = props => ({
  ...styles.wrapper,
  backgroundImage: `url(${props.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: props.contain ? 'contain' : 'cover',
  backgroundPosition: 'center',
});

/**
 * the purpose of this compo is to dispaly image without
 * ever stretching it, no matter the context around
 */
const Img = props => (
  <figure style={getWrapperStyles(props)} >
    <img src={props.src} alt={props.alt} style={styles.img} />
  </figure>
);

Img.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  contain: PropTypes.bool,
};

Img.defaultProps = {
  src: '',
  alt: '',
  contain: false,
};

export default Img;
