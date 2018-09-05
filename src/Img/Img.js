import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const styles = {
  img: {
    width: '100%',
    height: 'auto',
    opacity: 0,
    /* eslint-disable no-dupe-keys */
    // imageRendering: 'optimizeSpeed',
    // imageRendering: '-moz-crisp-edges',
    // imageRendering: '-o-crisp-edges',
    // imageRendering: '-webkit-optimize-contrast',
    // imageRendering: 'optimize-contrast',
    // imageRendering: 'crisp-edges',
    // imageRendering: 'pixelated',
    MsInterpolationMode: 'nearest-neighbor',
  },
  wrapper: {
    transition: 'opacity .6s ease-out',
    width: '100%',
    // height: '100%',
    margin: '0',
    opacity: 0,
    opacity: 1,
    display: 'inline-block',
  },
};

const getWrapperStyles = props => ({
  ...styles.wrapper,
  ...(props.style.width ? {
    width: props.style.width,
    minWidth: `${props.style.width}px`,
    maxWidth: `${props.style.width}px`,
    height: `${props.style.width}px`,
    minHeight: `${props.style.width}px`,
    maxHeight: `${props.style.width}px`,
  } : {}),
  ...(props.width ? {
    width: `${props.width}px`,
    minWidth: `${props.width}px`,
    maxWidth: `${props.width}px`,
    minHeight: `${props.width}px`,
    height: `${props.width}px`,
    maxHeight: `${props.width}px`,
  } : {}),
  backgroundImage: `url(${props.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: props.contain ? 'contain' : 'cover',
  backgroundPosition: 'center',
  // opacity: (loaded ? 1 : 0),
  lineHeight: 0,
  overflow: 'hidden',
});


/**
 * the purpose of this compo is to dispaly image without
 * ever stretching it, no matter the context around
 */
// const Img = props => (
class Img extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  // state = {
  //   loaded: false,
  // }

  // onLoadHandler() {
  //   this.setState({
  //     loaded: true,
  //   });
  // }

  render() {
    const { src, alt, async, style } = this.props;
    // const { loaded } = this.state;
    return (
      <figure
        style={{ ...getWrapperStyles(this.props/* , loaded */), ...style }}
        // onLoad={this.onLoadHandler.bind(this)}
      >
        <img src={src} alt={alt} style={styles.img} async={async} />
      </figure>
    );
  }
}

Img.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  contain: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  style: PropTypes.object,
};

Img.defaultProps = {
  src: '',
  alt: '',
  contain: false,
  style: {},
};

export default Img;
