import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImgUI = styled.img`
  width: 100%;
  height: auto;
  opacity: 0;
  MsInterpolationMode: nearest-neighbor;
`;

const FigureUI = styled.figure`
  transition: ${({ theme: { transition } }) => transition.defaultAll};
  width: 100%;
  margin: 0;
  opacity: 0;
  display: inline-block;
  background-image: ${({ src }) => `url(${src})`};
  background-repeat: no-repeat;
  background-size: ${({ contain }) => (contain ? 'contain' : 'cover')};
  background-position: center;
  line-height: 0;
  overflow: hidden;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};

  ${({ style: { width } }) => width && `
    width: ${width};
    min-width: ${width};
    max-width: ${width};
    /* height: ${width};
    min-height: ${width};
    max-height: ${width};
    */
  `};

  /* Thise next bit is there because is would
   * break img in a lot of places if removed
   * But enventually, size prop should be prefered to width prop
   * in order to get a squarely constrained image
   */
  ${({ width }) => width && `
    width: ${width}px;
    min-width: ${width}px;
    max-width: ${width}px;
    height: ${width}px;
    min-height: ${width}px;
    max-height: ${width}px;
  `};

  ${({ size }) => size && `
    width: ${size}px;
    min-width: ${size}px;
    max-width: ${size}px;
    height: ${size}px;
    min-height: ${size}px;
    max-height: ${size}px;
  `};
`;


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
    const {
      src,
      alt,
      async,
      style,
      imgStyle,
      contain,
      width,
      size,
    } = this.props;

    const { loaded } = this.state;

    return (
      <FigureUI
        contain={contain}
        loaded={loaded}
        src={src}
        style={style}
        width={width}
        size={size}
      >
        <ImgUI
          src={src}
          alt={alt}
          style={imgStyle}
          async={async ? 'on' : 'off'}
        />
      </FigureUI>
    );
  }
}

Img.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  contain: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  style: PropTypes.object,
  imgStyle: PropTypes.object,
  async: PropTypes.bool,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Img.defaultProps = {
  src: '',
  alt: '',
  contain: false,
  style: {},
  imgStyle: {},
  async: true,
  size: undefined,
};

export default Img;
