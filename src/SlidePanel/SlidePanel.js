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
  width: 500px;
  background: #fff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0) , 0px 3px 10px rgba(0, 0, 0, 0);
  };
  ${({ in: isIn }) => (isIn ?
    'box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.16) , 0px 3px 10px rgba(0, 0, 0, 0.23)' : '')};
  /* height | width */
  ${({ dir }) => (slidesHorizontaly(dir) ? 'height: 100vh' : 'width: 100vw')};
  /* top&bottom | right&left */
  ${({ dir }) => (slidesHorizontaly(dir) ? 'top: 0; bottom: 0' : 'left: 0; right: 0')};
  &>*:last-child { ${({ dir, children }) =>
    (React.Children.count(children) >= 3 && slidesHorizontaly(dir) ? 'margin-top: auto' : '')} }
`;

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

    return (
      <div>
        <Slide
          in={open}
          direction={getSlideDirection(anchor)}
          appear={!this.state.firstMount}
        >
          <SidePanelUI in={open} dir={getSlideDirection(anchor)} style={style}>
            {
              React.Children.map(children, (c, index) => React.isValidElement(c) && React.cloneElement(c, {
                key: `sidePanel-${index}`,
                onClose,
                anchor,
              }))
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

