import React from 'react';
import Dialog, { DialogHeader, DialogFooter, ConfirmDialog } from 'uxi/Dialog';
import Button from 'uxi/Button';
import { DropDownMenu, Separator } from 'uxi/Menu';
import { DropDown } from 'uxi/internal/DropDown';
import { Merge, Slack, Facebook } from 'uxi/Icons';
import { AvatarWithName } from 'uxi/Img';
import { SelectInput } from 'uxi/Input';
import MenuItem from 'uxi/Menu/MenuItem';

const selectInputDefaultValueRef = 'fooooobar';

const ExampleSimple = () => (
  <div>
    <Dialog show >
      <DialogHeader title="Some Title" />

      <div style={{ padding: '15px' }}>
        <h3> drop down </h3>
        <DropDownMenu button={<div>{'I\'m the button'} </div>} >
          <MenuItem>
            <a href="#">other children</a>
          </MenuItem>
          <MenuItem>
            <a href="#">are just items</a>
          </MenuItem>
          <Separator label="I'm a separator" />
          <MenuItem>
            <div>not a link</div>
          </MenuItem>
          <MenuItem>
            <div>not a link</div>
          </MenuItem>
        </DropDownMenu>
        <br />


        <br />
        <h3> Select Input </h3>
        <SelectInput defaultValue={selectInputDefaultValueRef} onChange={(x) => { console.log('onChange called with :', x); }}>
          <Separator label="B" />
          <AvatarWithName value={'item1'} name="Billy Jarvis" icon={<Merge />} />
          <AvatarWithName value={'item2'} name="Billy Joel" icon={<Slack />} />
          <AvatarWithName value={'item3'} name="Billy Joelle" icon={<Facebook />} />
          <Separator label="C" />
          <AvatarWithName value={'item4'} name="Cos Maner" />
          <AvatarWithName value={'selectInputDefaultValueRef'} name="Bort Zreck" />
          <Separator label="Z" />
          <AvatarWithName
            src="https://i.pinimg.com/originals/51/cd/7b/51cd7bce077ddd20cf09f3654d8d0eb1.png"
            value={'item6'}
            name="Zack Smith"
          />
          <AvatarWithName value={'sdgsfbg'} name="Zack VonderBorgh" />
          <AvatarWithName value={'sdgsfbg'} name="Zack VonderBorgh" />
          <AvatarWithName value={'sdgsfbg'} name="Zack VonderBorgh" />
          <AvatarWithName value={'sdgsfbg'} name="Zack VonderBorgh" />
          <AvatarWithName value={'sdgsfbg'} name="Zack VonderBorgh" />
          <AvatarWithName value={'sdgsfbg'} name="Zack VonderBorgh" />
          <AvatarWithName value={'sdgsfbg'} name="Zack VonderBorgh" />
          <AvatarWithName value={'sdgsfbg'} name="Zack VonderBorgh" />
          <AvatarWithName value={'sdgsfbg'} name="Zack VonderBorgh" />
          <AvatarWithName value={'sdgsfbg'} name="Zack VonderBorgh" />
          <AvatarWithName value={'sdgsfbg'} name="Zack VonderBorgh" />
          <AvatarWithName value={'sdgsfbg'} name="Zack VonderBorgh" />
          <AvatarWithName value={'sdgsfbg'} name="Zack VonderBorgh" />
          <AvatarWithName value={'sdgsfbg'} name="Zack VonderBorgh" />
          <AvatarWithName value={'sdgsfbg'} name="I'm wayyy too looooooooooog for this" />
          <AvatarWithName value={'sdgsfbg'} name="I'm wayyy too looooooooooog for thiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiis" />
          <AvatarWithName value={'sdgsfbg'} name="I'm way way way tooooooooooooooooooo looooooooooog for thiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii iiiiiiiiiiiiiiis" />
          <Separator label="Others" />
          <div value={selectInputDefaultValueRef}>Hi</div>
        </SelectInput>
      </div>


      <DialogFooter>
        <Button type="primary"> Save </Button>
      </DialogFooter>
    </Dialog>
  </div>
);

export default ExampleSimple;
