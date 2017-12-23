import React from 'react';
import PropTypes from 'prop-types';

export const BackdropStyle = {
  root: {
    zIndex: 12,
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    // Remove grey highlight
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
    // I think it's like this -df :
    '-webkitTapHightLightColor': 'rgba(0,0,0,0)',
    backgroundColor: 'rgba(0,0,0, 0.25)',
    // transition: 'translate(0px, 0px)',
    willChange: 'opacity',
    opacity: '0.25',
  },
  invisible: {
    opacity: 0,
  },
};

const Backdrop = (props) => {
  const { invisible, onClick } = props;

  const mergedStyle = invisible ?
    Object.assign(
      {},
      BackdropStyle.root,
      BackdropStyle.invisible,
    ) : BackdropStyle.root;

  return <div style={mergedStyle} onClick={onClick} aria-hidden="true" />;
};

Backdrop.propTypes = {
  invisible: PropTypes.bool,
};

Backdrop.defaultProps = {
  invisible: false,
};

export default Backdrop;
