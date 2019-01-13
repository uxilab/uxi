import React from 'react';
import {
  ButtonMenu,
  ButtonMenuItem,
} from 'uxi/Menu';
import { FlatButton } from 'uxi/Button';
import {
  Download,
  Upload,
  Delete,
  Options,
  Add,
  Star,
  Report,
} from 'uxi/Icons';

const ExampleAnchor = () => (
  <div style={{ width: 'calc(100% - 32px)', display: 'flex', justifyContent: 'flex-end', padding: '16px' }}>

    <ButtonMenu
      anchor="right"
      button={<FlatButton icon={<Options size="14" />} />}
    >
      <ButtonMenuItem onClick={() => { console.log('Download'); }} icon={<Download />} > Download</ButtonMenuItem>
      <ButtonMenuItem onClick={() => { console.log('Delete'); }} icon={<Delete />}> Deleteeeeeeee eeeeeeeeee </ButtonMenuItem>
      <ButtonMenuItem onClick={() => { console.log('Queue'); }} icon={<Add />}> Queue </ButtonMenuItem>
      <ButtonMenuItem onClick={() => { console.log('Upload'); }} icon={<Upload />}> Upload </ButtonMenuItem>
      <ButtonMenuItem onClick={() => { console.log('Report'); }} icon={<Report />} extra={<Star size="14" />}> Report </ButtonMenuItem>
    </ButtonMenu>
  </div>
);

export default ExampleAnchor;
