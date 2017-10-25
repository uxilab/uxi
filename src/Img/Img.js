import React from 'react';

const styles = {
  img: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  wrapper: {},
};

const getImgStyles = ({ contain }) => ({
  ...styles,
});

const getWrapperStyles = props => ({
  ...styles,
});


const Img = ({ src, alt, contain }) => (
  <figure>
    <img src={src} alt={alt} style={styles} />
  </figure>
);

export default Img;
