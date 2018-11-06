import React from 'react';
import { Button, FlatButton } from 'uxi/Button';
import { List } from 'uxi/List';
import { Upload } from 'uxi/Icons';

const ExampleButtonPlayGround = () => (
  <div style={{ padding: '32px' }}>
    <div style={{ background: 'palegreen', margin: '8px' }}>
      <FlatButton text="send" style={{  margin: '8px' }} />
    </div>

    <div style={{ background: 'palegreen', margin: '8px' }}>
      <FlatButton link="#" text="send" style={{ margin: '8px' }} />
    </div>

    <br />

    <div style={{ background: 'palegreen', margin: '8px' }}>
      <Button style={{ margin: '8px' }} link="#" text="send" />
    </div>
    <div style={{ background: 'palegreen', margin: '8px' }}>
      <Button link="#" style={{ margin: '8px' }} link="#" text="send" />
    </div>
    <br />






    <br />

    <Button isFullWidth text="LOOK MA I M FULL WIDTH" />

    <br />

    <span style={{ backgroundColor: 'purple', padding: '16px' }}>
      <Button isFullWidth text="LOOK MA I M FULL WIDTH with margin" style={{ margin: '8px' }} />
    </span>
    <Button isFullWidth text="LOOK MA I M FULL WIDTH with margin" style={{ margin: '8px' }} />
    <br />

    <FlatButton isFullWidth text="LOOK MA I M FULL WIDTH" />

    <br />

    <span style={{ backgroundColor: 'purple', padding: '16px' }}>
      <FlatButton isFullWidth text="LOOK MA I M FULL WIDTH with margin" style={{ margin: '8px' }} />
    </span>
    <FlatButton isFullWidth text="LOOK MA I M FULL WIDTH with margin" style={{ margin: '8px' }} />

  </div>
);

export default ExampleButtonPlayGround;
