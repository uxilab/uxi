import React from 'react';
import Modal from '../internal/Modal';

const DialogStyle = {
  root: {
    zIndex: '14',
    position: 'fixed',
    top: '10vh',
    width: 'calc(100% - 20vw)',
    maxWidth: '700px',
    margin: '0 auto',
    bottom: 'auto',
    left: '10vw',
    right: '10vw',
    backfaceVisibility: 'hidden',
    background: '#fff',
    borderRadius: '2px',
  },
};

const Dialog = ({ show, modal, onClose, children, style }) => (
  <Modal
    show={show}
    onClose={modal ? null : onClose}
  >
    <div style={{ ...DialogStyle.root, ...style }}>
      {children && children.length > 0 && children.map((c, index) => React.cloneElement(c, {
        key: `dialogContent-${index}`,
        onClose,
      }))}
      {children && !children.length && React.cloneElement(children, {
        onClose,
      })}
    </div>
  </Modal>
);

export default Dialog;
