import React from 'react';
import Button from 'uxi/Button';
import { withConfirmDialog } from 'uxi/Dialog';

const DivWithConfirm = withConfirmDialog('div')
const NativeButtonWithConfirm = withConfirmDialog('button')
const ButtonWithConfirm = withConfirmDialog(Button)

const BadgeExample = () => (
  <div>
    <ul>
      <li>
        <NativeButtonWithConfirm
          onClick={() => console.log('confirmed clicked')}
        >
          sends
        </NativeButtonWithConfirm>
      <li>
      <li><br /></li>
      </li>
        <ButtonWithConfirm
          type="primary"
          confirmLabel="Yes, POST!"
          cancelLabel={"Nope"}
          onClick={() => console.log('confirmed clicked')}
        >
          POST
        </ButtonWithConfirm>
      </li>
    </ul>
  </div>
);

export default BadgeExample;
