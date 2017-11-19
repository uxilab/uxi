import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const styles = {
  img: {
    width: '100%',
    height: 'auto',
    opacity: 0,
    /* eslint-disable no-dupe-keys */
    imageRendering: 'optimizeSpeed',
    imageRendering: '-moz-crisp-edges',
    imageRendering: '-o-crisp-edges',
    imageRendering: '-webkit-optimize-contrast',
    imageRendering: 'optimize-contrast',
    imageRendering: 'crisp-edges',
    imageRendering: 'pixelated',
    MsInterpolationMode: 'nearest-neighbor',
  },
  wrapper: {
    transition: 'opacity .6s ease-out',
    width: '100%',
    height: '100%',
    margin: '0 auto',
    opacity: 0,
  },
};

const getWrapperStyles = (props, loaded) => ({
  ...styles.wrapper,
  backgroundImage: `url(${props.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: props.contain ? 'contain' : 'cover',
  backgroundPosition: 'center',
  opacity: (loaded ? 1 : 0),
});


/**
 * the purpose of this compo is to dispaly image without
 * ever stretching it, no matter the context around
 */
// const Img = props => (
class Img extends PureComponent {
  state = {
    loaded: false,
  }

  onLoadHandler() {
    this.setState({
      loaded: true,
    });
  }

  render() {
    const { props } = this;
    const { loaded } = this.state;
    return (
      <figure
        style={{ ...getWrapperStyles(props, loaded), ...props.style }}
        onLoad={this.onLoadHandler.bind(this)}
      >
        <img src={props.src} alt={props.alt} style={styles.img} />
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
