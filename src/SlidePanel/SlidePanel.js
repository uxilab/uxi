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

const SidePanelStyle = {
  root: {
    zIndex: '200',
    width: '500px',
    top: 0,
    position: 'fixed',
    background: '#fff',
    height: '100vh',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px',
  },
  left: {
    left: 0,
  },
  right: {
    right: 0,
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
      showOverlay,
      style,
      modal,
    } = this.props;

    const mergedStyle = Object.assign(
      {},
      SidePanelStyle.root,
      SidePanelStyle[anchor],
      style || {},
    );
    return (
      <div>
        <Slide
          in={open}
          direction={anchor === 'right' ? 'left' : 'right'}
          appear={!this.state.firstMount}
        >
          <div style={mergedStyle}>
            <div style={{ position: 'relative', height: '100%' }}>
              {
                (children && children.length > 1) ?
                  children.map((c, index) => React.cloneElement(c, {
                    key: `sidePanel-${index}`,
                    onClose,
                    anchor,
                  })) :
                  React.cloneElement(children, {
                    onClose,
                    anchor,
                  })
              }
            </div>
          </div>
        </Slide>
        { showOverlay ? <Modal
          show={open}
          onClose={modal ? null : onClose}
        /> : null }
      </div>
    );
  }
}

SidePanel.propTypes = {
  anchor: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
  children: PropTypes.node,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  showOverlay: PropTypes.bool,
  transitionDuration: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({ enter: PropTypes.number, exit: PropTypes.number }),
  ]),
};

SidePanel.defaultProps = {
  anchor: 'right',
  open: false,
  showOverlay: false,
};

export default SidePanel;

