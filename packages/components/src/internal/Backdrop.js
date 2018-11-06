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
    // we should keep those outline and have a better solution that remove -df
    // those are super usefull when keyboard navigating and are -df
    // seriously not that bad visually if well done I thinkg -df
    WebkitTapHightLightColor: 'rgba(0,0,0,0)',
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

Backdrop.dispalyName = 'Backdrop';

Backdrop.propTypes = {
  invisible: PropTypes.bool,
};

Backdrop.defaultProps = {
  invisible: false,
};

export default Backdrop;
