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

const ExampleSimple = () => (
  <div style={{ padding: '16px' }}>

    <ButtonMenu>
      <ButtonMenuItem
        onClick={() => { console.log('Download'); }}
        icon={<Download />}
      >
        Download
      </ButtonMenuItem>
      <ButtonMenuItem onClick={() => { console.log('Delete'); }} icon={<Delete />}> Deleteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee </ButtonMenuItem>
      <ButtonMenuItem onClick={() => { console.log('Queue'); }} icon={<Add />}> Queue </ButtonMenuItem>
      <ButtonMenuItem onClick={() => { console.log('Upload'); }} icon={<Upload />}> Upload </ButtonMenuItem>
      <ButtonMenuItem onClick={() => { console.log('Report'); }} icon={<Report />} extra={<Star size="14" />}> Report </ButtonMenuItem>
    </ButtonMenu>

    <br />
    <br />

    <ButtonMenu
      button={<FlatButton type="primary" icon={<Options size="14" />} />}
      menuWidth="280px"
    >
      <ButtonMenuItem
        onClick={() => { console.log('Download'); }}
        icon={<Download />}
      >
        Download
      </ButtonMenuItem>
      <ButtonMenuItem onClick={() => { console.log('Delete'); }} icon={<Delete />}> Deleteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee </ButtonMenuItem>
      <ButtonMenuItem onClick={() => { console.log('Queue'); }} icon={<Add />}> Queue </ButtonMenuItem>
      <ButtonMenuItem onClick={() => { console.log('Upload'); }} icon={<Upload />}> Upload </ButtonMenuItem>
      {/* <ButtonMenu onClick={() => { console.log('')}}Item icon={<Star />}> Star </ButtonMenuItem> */}
      <ButtonMenuItem onClick={() => { console.log('Report'); }} icon={<Report />} extra={<Star size="14" />}> Report </ButtonMenuItem>
      <ButtonMenuItem onClick={() => { console.log('Delete'); }} icon={<Delete />}> Deleteeeeeeee eeeeeeeeee </ButtonMenuItem>
      <ButtonMenuItem onClick={() => { console.log('Queue'); }} icon={<Add />}> Queue </ButtonMenuItem>
      <ButtonMenuItem onClick={() => { console.log('Upload'); }} icon={<Upload />}> Upload </ButtonMenuItem>
      {/* <ButtonMenu onClick={() => { console.log('')}}Item icon={<Star />}> Star </ButtonMenuItem> */}
      <ButtonMenuItem onClick={() => { console.log('Report'); }} icon={<Report />} extra={<Star size="14" />}> Report </ButtonMenuItem>
      <ButtonMenuItem onClick={() => { console.log('Delete'); }} icon={<Delete />}> Deleteeeeeeee eeeeeeeeee </ButtonMenuItem>
      <ButtonMenuItem onClick={() => { console.log('Queue'); }} icon={<Add />}> Queue </ButtonMenuItem>
      <ButtonMenuItem onClick={() => { console.log('Upload'); }} icon={<Upload />}> Upload </ButtonMenuItem>
      {/* <ButtonMenu onClick={() => { console.log('')}}Item icon={<Star />}> Star </ButtonMenuItem> */}
      <ButtonMenuItem onClick={() => { console.log('Report'); }} icon={<Report />} extra={<Star size="14" />}> Report </ButtonMenuItem>
      <ButtonMenuItem onClick={() => { console.log('Delete'); }} icon={<Delete />}> Deleteeeeeeee eeeeeeeeee </ButtonMenuItem>
      <ButtonMenuItem onClick={() => { console.log('Queue'); }} icon={<Add />}> Queue </ButtonMenuItem>
      <ButtonMenuItem onClick={() => { console.log('Upload'); }} icon={<Upload />}> Upload </ButtonMenuItem>
      {/* <ButtonMenu onClick={() => { console.log('')}}Item icon={<Star />}> Star </ButtonMenuItem> */}
      <ButtonMenuItem onClick={() => { console.log('Report'); }} icon={<Report />} extra={<Star size="14" />}> Report </ButtonMenuItem>
      <ButtonMenuItem onClick={() => { console.log('Delete'); }} icon={<Delete />}> Deleteeeeeeee eeeeeeeeee </ButtonMenuItem>
      <ButtonMenuItem onClick={() => { console.log('Queue'); }} icon={<Add />}> Queue </ButtonMenuItem>
      <ButtonMenuItem onClick={() => { console.log('Upload'); }} icon={<Upload />}> Upload </ButtonMenuItem>
      {/* <ButtonMenu onClick={() => { console.log('')}}Item icon={<Star />}> Star </ButtonMenuItem> */}
      <ButtonMenuItem onClick={() => { console.log('Report'); }} icon={<Report />} extra={<Star size="14" />}> Report </ButtonMenuItem>
    </ButtonMenu>
  </div>
);

export default ExampleSimple;
