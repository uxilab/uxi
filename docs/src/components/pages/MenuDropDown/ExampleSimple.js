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
      main={<div>HELLO</div>}
    >
      <MenuDropDownItem icon={<Download />}> Download </MenuDropDownItem>
      <MenuDropDownItem> Bar </MenuDropDownItem>
      <MenuDropDownItem> <Download size="18" /> Download </MenuDropDownItem>
    </MenuDropDown>
    <br />
    <hr />

    <h3>MenuDropDown (UserMenu) (UserMenuItem only as children, right anchored)</h3>
    <br />
    <hr />
    <br />
    <br />
    <button>button</button>
    <br />
    <br />
    <MenuDropDown
      anchor="right"
      main={<FlatButton icon={<Options size="14" />} />}
    >
      <MenuDropDownItem
        onClick={() => { console.log('Download'); }}
        icon={<Download />}
      >
        Download
      </MenuDropDownItem>
      <MenuDropDownItem onClick={() => { console.log('Delete'); }} icon={<Delete />}> Delete </MenuDropDownItem>
      <MenuDropDownItem onClick={() => { console.log('Queue'); }} icon={<Add />}> Queue </MenuDropDownItem>
      <MenuDropDownItem onClick={() => { console.log('Upload'); }} icon={<Upload />}> Upload </MenuDropDownItem>
      {/* <MenuDropDown onClick={() => { console.log('')}}Item icon={<Star />}> Star </MenuDropDownItem> */}
      <MenuDropDownItem onClick={() => { console.log('Report'); }} icon={<Report />} extra={<Star size="14" />}> Report </MenuDropDownItem>
    </MenuDropDown>
    <br />
    <button>button</button>
    <br />

    <br />
    <hr />


  </div>
);

export default ExampleSimple;
