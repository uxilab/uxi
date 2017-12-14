// @inheritedComponent Modal

import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../internal/Modal';
import Slide from '../internal/Slide';

function getSlideDirection(anchor) {
  if (anchor === 'left') {
    return 'right';
  } else if (anchor === 'right') {
    return 'left';
  } else if (anchor === 'top') {
    return 'down';
  }

  // (anchor === 'bottom')
  return 'up';
}

const styles = {
  contentDefault: {
    zIndex: '14',
    width: '500px',
    position: 'fixed',
    top: '0',
    right: '0',
    height: '100vh',
    background: '#fff',
  },
  contentAnchorLeft: {
    left: 0,
    right: 'auto',
  },
  contentAnchorRight: {
    left: 'auto',
    right: 0,
  },
  contentAnchorBottom: {
    top: 'auto',
    left: 0,
    bottom: 0,
    right: 0,
    height: 'auto',
    maxHeight: '100vh',
  },
  contentAnchorDockedLeft: {
    borderRight: '1px solid #ccc',
  },
  contentAnchorDockedTop: {
    borderBottom: '1px solid #ccc',
  },
  contentAnchorDockedRight: {
    borderLeft: '1px solid #ccc',
  },
  contentAnchorDockedBottom: {
    borderTop: '1px solid #ccc',
  },
};

class SidePanel extends React.Component {
  state = {
    // Let's assume that the Drawer will always be rendered on user space.
    // We use that state is order to skip the appear transition during the
    // initial mount of the component.
    firstMount: true,
  };

  componentWillReceiveProps() {
    this.setState({
      firstMount: false,
    });
  }

  render() {
    const {
      anchor,
      children,
      onClose,
      open,
    } = this.props;

    return (
      <Slide
        in={open}
        direction="right"
        appear={!this.state.firstMount}
      >
        <div style={{
          zIndex: '200',
          width: '500px',
          top: 0,
          position: 'fixed',
          left: 0,
          background: '#fff',
          height: '100vh',
        }}
        >
          {getSlideDirection(anchor)}
          {children}
        </div>
      </Slide>
    );
  }
}

SidePanel.propTypes = {
  anchor: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
  children: PropTypes.node,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  transitionDuration: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({ enter: PropTypes.number, exit: PropTypes.number }),
  ]),
};

SidePanel.defaultProps = {
  anchor: 'right',
  open: false,
};

export default SidePanel;

