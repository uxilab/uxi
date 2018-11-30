import React from 'react';
import { MenuDropDown, MenuDropDownItem } from 'uxi/Menu';
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

    <h3>MenuDropDown (mixed children, default anchor (left)) </h3>
    <br />
    <hr />
    <br />
    <MenuDropDown
      main={'HELLO'}
    >
      <MenuDropDownItem icon={<Download />}> Download </MenuDropDownItem>
      <MenuDropDownItem> Bar </MenuDropDownItem>
      <MenuDropDownItem> <Download size="18" /> Download </MenuDropDownItem>
    </MenuDropDown>
    <br />
    <hr />



    <h3>UserMenu (UserMenuItem only as children, right anchored)</h3>
    <br />
    <hr />
    <br />
    <MenuDropDown
      anchor="right"
      main={<FlatButton icon={<Options size="14" />} />}
    >
      <MenuDropDownItem icon={<Download />}> Download </MenuDropDownItem>
      <MenuDropDownItem icon={<Delete />}> Delete </MenuDropDownItem>
      <MenuDropDownItem icon={<Add />}> Queue </MenuDropDownItem>
      <MenuDropDownItem icon={<Upload />}> Upload </MenuDropDownItem>
      {/* <MenuDropDownItem icon={<Star />}> Star </MenuDropDownItem> */}
      <MenuDropDownItem icon={<Report />} extra={<Star size="14" />}> Report </MenuDropDownItem>
    </MenuDropDown>
    <br />
    <hr />




  </div>
);

export default ExampleSimple;
