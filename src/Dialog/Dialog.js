import React from 'react';
import Modal from '../internal/Modal';

const DialogStyle = {
  root: {
    zIndex: '14',
    // width: '500px',
    // margin: '15px',
    position: 'fixed',
    // top: '35%',
    // left: '50%',
    // transform: 'translate3d(-50%, -50%, 0) scale(1.0, 1.0)',
    top: '10vh',
    width: 'calc(100% - 20vw)',
    maxWidth: '700px',
    margin: '0 auto',
    bottom: 'auto',
    left: '10vw',
    right: '10vw',
    backfaceVisibility: 'hidden',
    '-webkitBackfaceVisibility': 'hidden',
    background: '#fff',
    borderRadius: '2px',
  },
};

const Dialog = ({ show, modal, onClose, children }) => (
  <Modal
    show={show}
    onClose={modal ? null : onClose}
  >
    <div style={DialogStyle.root}>
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
