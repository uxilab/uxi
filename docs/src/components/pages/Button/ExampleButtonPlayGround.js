import React from 'react';
import { Button } from 'uxi/Button';
import { List } from 'uxi/List';
import { Upload } from 'uxi/Icons';

const ExampleButtonPlayGround = () => (
  <List>
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
