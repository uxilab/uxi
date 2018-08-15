import React from 'react';
import Modal from '../internal/Modal';

const DialogStyle = {
  root: {
    zIndex: '100',
    position: 'fixed',
    top: '10vh',
    width: 'calc(100% - 20vw)',
    maxWidth: '700px',
    maxHeight: '80vh',
    margin: '0 auto',
    bottom: 'auto',
    left: '10vw',
    right: '10vw',
    backfaceVisibility: 'hidden',
    background: '#fff',
    borderRadius: '2px',
  },
};

/**
 *
 * If we have a PanelContent in the Dialog, apply dialog style to penl content:
 * maxHeight: 'calc(80vh - calc( 2 * 50px ))'
 * This assume panelHeader and PanelFooter are present
 */
const Dialog = ({ show, modal, onClose, children, style }) => {
  const extendedChildren = React.Children.map(children, (c, index) => {
    const childExtendedChildren = React.Children.map(c.props.children, (childChildren) => {
      if (childChildren
        && childChildren.type
        && childChildren.type.displayName === 'PanelContent'
      ) {
        return React.cloneElement(childChildren, {
          ...childChildren.props,
          style: { maxHeight: 'calc(80vh - calc( 2 * 50px ))', ...childChildren.props.style },
        });
      }
      return childChildren;
    });

    const shadowRuleIfChildIsPanel = (c && c.type && c.type.displayName === 'Panel')
      ? { boxShadow: 'rgba(0, 0, 0, 0.5) 0px 1px 6px, rgba(0, 0, 0, 0.2) 0px 1px 32px' }
      : {};

    return React.cloneElement(c, {
      key: `dialogContent-${index}`,
      onClose,
      style: {
        ...(shadowRuleIfChildIsPanel),
        ...((c && c.props && c.props.style) ? c.props.style : {}),
      },
      children: childExtendedChildren,
    });
  });

  return (
    <Modal
      show={show}
      onClose={modal ? null : onClose}
    >
      <div style={{ ...DialogStyle.root, ...style }}>
        {extendedChildren}
      </div>
    </Modal>
  );
};

export default Dialog;
