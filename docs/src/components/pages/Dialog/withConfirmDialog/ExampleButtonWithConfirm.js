import React from 'react';
import { ButtonWithConfirm } from 'uxi/Button';
import { Issue } from 'uxi/Icons';

const ExampleButtonWithConfirm = () => (
  <ButtonWithConfirm
    confirmText="Are you sure you want to delete the entire database ?"
    confirmLabel="BLOW IT UP"
    icon={<Issue />}
    type="error"
    onClick={() => console.log('confirmed clicked')}
  >
    DELETE ENTIRE DATABASE
  </ButtonWithConfirm>
);

export default ExampleButtonWithConfirm;
