import React from 'react';
import Modal from '../internal/Modal';

const DialogStyle = {
  root: {
    zIndex: '14',
    width: '500px',
    margin: '15px',
    position: 'fixed',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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
      {children.map((c, index) => React.cloneElement(c, {
        key: `dialogContent-${index}`,
        onClose,
      }))}
    </div>
  </Modal>
);

export default Dialog;
