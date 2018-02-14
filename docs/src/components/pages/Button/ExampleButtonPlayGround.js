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



    <br />
    <br />
    <Button disabled={true} link="http://google.com" text="send" />
    <Button disabled={true} icon={<Upload />} />
    <br />
    <Button link="http://google.com" text="send" />
    <Button icon={<Upload />}  />
    <br />
    <Button type="primary" icon={<Upload />} text="send" />
    <Button type="primary" iconPosition="after" icon={<Upload />} text="send" />
    <Button type="primary" icon={<Upload />}  />
  </List>
);

export default ExampleButtonPlayGround;
