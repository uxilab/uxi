// @inheritedComponent Modal

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from '../internal/Modal';
import Slide from '../internal/Slide';

function getSlideDirection(anchor) {
  if (anchor === 'left') {
    return 'right';
  } else if (anchor === 'right') {
    return 'left';
  } else if (anchor === 'top') {
    return 'bottom';
  }
  return 'top';
}
const slidesHorizontaly = direction => (direction === 'right' || direction === 'left');

const SidePanelUI = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 280px;
  width: 500px;
  max-width: 100vw;
  background: #fff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0) , 0px 3px 10px rgba(0, 0, 0, 0);
  };
  ${({ inAttr: isIn }) => (isIn ?
    'box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.16) , 0px 3px 10px rgba(0, 0, 0, 0.23)' : '')};
  /* height | width */
  ${({ dir }) => (slidesHorizontaly(dir) ? 'height: 100vh' : 'width: 100vw')};
  /* top&bottom | right&left */
  ${({ dir }) => (slidesHorizontaly(dir) ? 'top: 0; bottom: 0' : 'left: 0; right: 0')};
  &>*:last-child { ${({ dir, children }) =>
    (React.Children.count(children) >= 3 && slidesHorizontaly(dir) ? 'margin-top: auto' : '')} }
`;

class SidePanel extends React.Component {
  constructor(props) {
    super(props);
    this.handleEsc = this.handleEsc.bind(this);
    this.state = {
      // Let's assume that the Drawer will always be rendered on user space.
      // We use that state is order to skip the appear transition during the
      // initial mount of the component.
      firstMount: true,
    };
  }

  componentDidMount() {
    if (window) {
      window.addEventListener('keyup', this.handleEsc);
    }
  }

  componentWillReceiveProps() {
    this.setState({
      firstMount: false,
    });
  }

  componentWillUnmount() {
    if (window) {
      window.removeEventListener('keyup', this.handleEsc);
    }
  }

  handleEsc(e) {
    const { key } = e;
    const { onClose, open } = this.props;
    if (open && onClose && key === 'Escape') {
      onClose();
    }
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
      offsetBottom,
      offsetTop,
      offsetLeft,
      offsetRight,
    } = this.props;

    return (
      <div>
        <Slide
          inAttr={open}
          direction={getSlideDirection(anchor)}
          appear={!this.state.firstMount}
          offsetTop={offsetTop}
          offsetBottom={offsetBottom}
          offsetLeft={offsetLeft}
          offsetRight={offsetRight}
        >
          <SidePanelUI
            inAttr={open}
            dir={getSlideDirection(anchor)}
            style={style}
          >
            {
              React.Children.map(
                children,
                (c, index) => React.isValidElement(c) && React.cloneElement(c, {
                  key: `sidePanel-${index}`,
                  onClose: (...a) => {
                    if (c.props && c.props.onClose) {
                      c.props.onClose(...a);
                      onClose(...a);
                    }
                  },
                  anchor,
                })
              )
            }
          </SidePanelUI>
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
  // transitionDuration: PropTypes.oneOfType([
  //   PropTypes.number,
  //   PropTypes.shape({ enter: PropTypes.number, exit: PropTypes.number }),
  // ]), // not used
  offsetTop: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  offsetBottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  offsetRight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  offsetLeft: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

SidePanel.defaultProps = {
  anchor: 'right',
  open: false,
  showOverlay: false,
  children: null,
  onClose: () => {},
  // transitionDuration: 0,
  offsetTop: 0,
  offsetBottom: 0,
  offsetRight: 0,
  offsetLeft: 0,
};

export default SidePanel;

