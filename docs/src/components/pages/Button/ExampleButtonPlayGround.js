import React from 'react';
import { Button } from 'uxi/Button';
import { List } from 'uxi/List';
import { Upload } from 'uxi/Icons';

const ExampleButtonPlayGround = () => (
  <List>
    <Button disabled={true} link="http://google.com" text="send" />
    <Button disabled={true} icon={<Upload />} />
    <br />
    <Button disabled={false} link="http://google.com" text="send" />
    <Button disabled={false} icon={<Upload />}  />
  </List>
);

export default ExampleButtonPlayGround;
