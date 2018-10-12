import React, { Component } from 'react';
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
    // opacity: 1,
    display: 'inline-block',
  },
};

const getWrapperStyles = (props, state) => ({
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
  lineHeight: 0,
  overflow: 'hidden',
  opacity: (state.loaded ? 1 : 0),
  // opacity: 0,
  transition: 'opacity 450ms cubic-bezier(0.23, 1, 0.32, 1)',
});


/**
 * the purpose of this compo is to dispaly image without
 * ever stretching it, no matter the context around
 */
// const Img = props => (
class Img extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };

    this.onLoadHandler = this.onLoadHandler.bind(this);
  }

  componentDidMount() {
    const { src } = this.props;

    if (requestIdleCallback) {
      this.idleCBRef = requestIdleCallback(() => {
        const img = new Image();
        img.addEventListener('load', this.onLoadHandler);
        img.src = src;
      });
    } else {
      this.onLoadHandler();
    }
  }

  componentWillUnmount() {
    if (this.idleCBRef && !this.state.loaded) {
      if (cancelIdleCallback) {
        cancelIdleCallback(this.idleCBRef);
      }
    }
  }

  onLoadHandler() {
    this.setState({
      loaded: true,
    });
  }

  render() {
    const { src, alt, async, style } = this.props;

    return (
      <figure
        style={{
          ...getWrapperStyles(this.props, this.state),
          ...style,
        }}
      >
        <img
          src={src}
          alt={alt}
          style={styles.img}
          async={async ? 'on' : 'off'}
        />
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
  async: true,
};

export default Img;
