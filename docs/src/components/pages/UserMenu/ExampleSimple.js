import React from 'react';
import { UserMenu, UserMenuItem } from 'uxi/Menu';
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
  <div>

    <h3>UserMenu (mixed children, default anchor (left)) </h3>
    <br />
    <hr />
    <br />
    <UserMenu
      main={'HELLO'}
    >
      <UserMenuItem icon={<Download />}> Download </UserMenuItem>
      <UserMenuItem> Bar </UserMenuItem>
      <UserMenuItem> <Download size="18" /> Download </UserMenuItem>
    </UserMenu>
    <br />
    <hr />



    <h3>UserMenu (UserMenuItem only as children, right anchored)</h3>
    <br />
    <hr />
    <br />
    <UserMenu
      anchor="right"
      main={<FlatButton icon={<Options size="14" />} />}
    >
      <UserMenuItem icon={<Download />}> Download </UserMenuItem>
      <UserMenuItem icon={<Delete />}> Delete </UserMenuItem>
      <UserMenuItem icon={<Add />}> Queue </UserMenuItem>
      <UserMenuItem icon={<Upload />}> Upload </UserMenuItem>
      {/* <UserMenuItem icon={<Star />}> Star </UserMenuItem> */}
      <UserMenuItem icon={<Report />} extra={<Star size="14" />}> Report </UserMenuItem>
    </UserMenu>
    <br />
    <hr />




  </div>
);

export default ExampleSimple;
