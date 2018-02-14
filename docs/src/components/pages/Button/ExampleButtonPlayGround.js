import React from 'react';
import { Button, FlatButton } from 'uxi/Button';
import { List } from 'uxi/List';
import { Upload } from 'uxi/Icons';

const ExampleButtonPlayGround = () => (
  <List>
    <div style={{ background: 'palegreen', margin: '8px' }}>
      <FlatButton text="send" style={{  margin: '8px' }} />
    </div>

    <div style={{ background: 'palegreen', margin: '8px' }}>
      <FlatButton link="#" text="send" style={{ margin: '8px' }} />
    </div>

    <br />

    <div style={{ background: 'palegreen', margin: '8px' }}>
      <Button style={{ margin: '8px' }} link="http://google.com" text="send" />
    </div>
    <div style={{ background: 'palegreen', margin: '8px' }}>
      <Button link="#" style={{ margin: '8px' }} link="http://google.com" text="send" />
    </div>
    <br />

  </List>
);

export default ExampleButtonPlayGround;
