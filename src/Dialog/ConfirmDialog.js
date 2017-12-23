import React from 'react';
import Dialog from './Dialog';
import DivPadding from '../Base/DivPadding';
import Button from '../Button';

const ConfirmDialog = ({
  show,
  onConfirm,
  onCancel,
  text,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
}) => (
  <Dialog show={show} modal style={{ maxWidth: '400px' }}>
    <DivPadding padding="M" style={{ textAlign: 'center' }}>
      <div>
        {text}
      </div>
      <div style={{ marginTop: '30px' }}>
        <Button style={{ marginRight: '5px' }} onClick={onConfirm} type="primary">{confirmLabel}</Button>
        <Button style={{ marginLeft: '5px' }} onClick={onCancel}>{cancelLabel}</Button>
      </div>
    </DivPadding>
  </Dialog>
);

export default ConfirmDialog;
