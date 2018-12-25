import React from 'react';
import styled from 'styled-components';
import Modal from '../internal/Modal';
import {
  headerHeight,
  footerHeight,
} from '../Panel/defaults';

const DialogUI = styled.div`
  z-index: 100;
  position: fixed;
  top: 10vh;
  width: calc(100% - 20vw);
  max-width: 700px;
  max-height: 80vh;
  margin: 0 auto;
  bottom: auto;
  left: 10vw;
  right: 10vw;
  backface-visibility: hidden;
  background: #fff;
  border-radius: ${({ theme: { radius } }) => radius};

  /* overflow: hidden; */
  box-shadow:
    rgba(0, 0, 0, 0.5) 0px 1px 6px,
    rgba(0, 0, 0, 0.2) 0px 4px 16px;
  box-shadow:
    rgba(0, 0, 0, 0.3) 0px 2px 21px 1px,
    rgba(0,0,0,0.2) 0px 1px 22px 4px;

  ${({ isFullWidth }) => isFullWidth && `
    max-width: 80vw;
  `}
  ${({ isFullScreen }) => isFullScreen && `
    max-width: 92vw;
    width: calc(100% - 8vw);
    max-height: 92vh;
    height: 100%;
    left: 4vw;
    right: 4vw;
    top: 4vh;
  `}
`;

/**
 *
 * If we have a PanelContent in the Dialog, apply dialog style to penl content:
 * maxHeight: 'calc(80vh - calc( 2 * 50px ))'
 * This assume panelHeader and PanelFooter are present
 */
const Dialog = ({
  show,
  modal,
  onClose,
  children,
  style,
  isFullWidth,
  isFullScreen,
}) => {
  const extendedChildren = React.Children.map(children, (c, index) => {
    const childExtendedChildren = React.Children.map(c.props.children, (childChildren) => {
      if (childChildren
        && childChildren.type
        && childChildren.type.displayName === 'PanelContent'
      ) {
        let baseHeight = '80vh';
        if (isFullScreen) { baseHeight = '92vh'; }

        return React.cloneElement(childChildren, {
          ...(childChildren.props || {}),
          style: {
            maxHeight: `calc(${baseHeight} - (${headerHeight} + ${footerHeight}))`, // for panel header and footer
            ...childChildren.props.style,
          },
        });
      }
      return childChildren;
    });

    return React.cloneElement(c, {
      key: `dialogContent-${index}`,
      onClose,
      style: {
        ...((c && c.props && c.props.style) ? c.props.style : {}),
      },
      ...(c.props || {}),
      ...(c.type.displayName === 'Panel'
        ? { rounded: true }
        : {}
      ),
      children: childExtendedChildren,
    });
  });

  return (
    <Modal
      show={show}
      onClose={modal ? null : onClose}
    >
      <DialogUI style={style} isFullScreen={isFullScreen} isFullWidth={isFullWidth}>
        {extendedChildren}
      </DialogUI>
    </Modal>
  );
};

Dialog.displayName = 'Dialog';

Dialog.defaultProps = {
  isFullScreen: false,
  isFullWidth: false,
};

export default Dialog;
