import React from 'react';
import {
  TextField,
  Radio,
  RadioGroup,
  Checkbox,
  FileInput,
  SelectInput,
  DateInput,
  TimeInput,
  Switch,
  InputGroup,
  SearchForm,
} from '../../../../../src/Input';
import { Separator } from 'uxi/Menu';
import Img from '../../../../../src/Img';
import { Merge, Slack, Facebook } from 'uxi/Icons';
import { IconButton, Button } from 'uxi/Button';
import { AvatarWithName } from 'uxi/Img';

const selectInputDefaultValueRef = 'fooooobar';

const ExampleSimple = () => (
  <ul>
    <li>
      <h3>Select</h3>
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
    </li>
    <li>
      <h3>Radio :</h3>
      <Radio />
    </li>
    <li>
      <h3>RadioGroup :</h3>
      <RadioGroup name="zevzeg" value="val A" onChange={() => { window.alert('radio changed'); }}>
        <Radio value="val A" label="First Value Label" />
        <Radio value="val B" label="Second Value Label" />
      </RadioGroup>
    </li>
    <li>
      <h3>Uncontrolled SearchForm InputGroup!!!!</h3>
      <SearchForm
        fullWidth
        onChange={(x, y) => console.log(x, y)}
        placeholder="search form"
        onClick={(x, y) => console.log(x, y)}
      />
    </li>

    <li>
      <h3>Uncontrolled InputGroup (defaultValue: foobar)</h3>
      <SearchForm
        defaultValue="foobar"
        onChange={x => console.log(x)}
        onClick={x => console.log(x)}
      />
    </li>

    <li>
      <h3>Controlled InputGroup (value: foobar and custom icon)</h3>
      <SearchForm
        value="foobar"
        icon={<Merge />}
        onChange={x => console.log(x)}
        onClick={x => console.log(x)}
      />
    </li>
    <li>
      <h3> Switch (defaultchecked=true) </h3>
      <Switch defaultChecked labelBefore name="foobar" onChange={e => console.log(`checked: ${e.checked}`)} label={<div>I'm a switch</div>} />
    </li>
    <li>
      <h3>disabled Switch </h3>
      <Switch disabled labelBefore name="foobar" onChange={e => console.log(`checked: ${e.checked}`)} label={<div>I'm a switch</div>} />
    </li>
    <li>
      <h3>disabled Switch (checked=true) </h3>
      <Switch disabled checked labelBefore name="foobar" onChange={e => console.log(`checked: ${e.checked}`)} label={<div>I'm a switch</div>} />
    </li>
    <li>
      <h3>Uncontrolled Switch (labelBefore = true)</h3>
      <Switch labelBefore name="foobar" onChange={e => console.log(`checked: ${e.checked}`)} label={<div>I'm a switch</div>} />
    </li>
    <li>
      <h3>Uncontrolled Switch (labelBefore = true, defaultChecked = true)</h3>
      <Switch defaultChecked labelBefore name="foobar" onChange={e => console.log(`checked: ${e.checked}`)} label={<div>Notifications</div>} />
    </li>
    <li>
      <h3>Uncontrolled Switch (no default)</h3>
      <Switch name="foobar" onChange={e => console.log(`checked: ${e.checked}`)} label={<div>Notifications</div>} />
    </li>
    <li>
      <h3>Controlled Switch (checked = true)</h3>
      <Switch checked name="foobar" onChange={e => console.log(`checked: ${e.checked}`)} label={<div>Notifications</div>} />
    </li>
    <li>
      <h3>Controlled Switch (checked = false)</h3>
      <Switch checked={false} name="foobar" onChange={e => console.log(`checked: ${e.checked}`)} label={<div>Notifications</div>} />
    </li>
    <li>
      <h3>DateInput (defaultValue type Date) :</h3>
      <DateInput defaultValue={Date.now() - 10e9} />
    </li>
    <li>
      <h3>DateInput (defaultValue type string) :</h3>
      <DateInput defaultValue={`${new Date().toISOString()}`} />
    </li>
    <li>
      <h3>DateInput (no default) :</h3>
      <DateInput />
    </li>
    <li>
      <h3>TimeInput (defaultValue type Date) :</h3>
      <TimeInput defaultValue={Date.now() - 10e9} />
    </li>
    <li>
      <h3>Select (next to a button) :</h3>
      <SelectInput onChange={(x) => { console.log('onChange called with :', x); }}>
        <div>Hi</div>
        <div>Hey</div>
        <Separator label="separator" />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Img
            style={{ width: '30px' }}
            src="https://i.pinimg.com/originals/51/cd/7b/51cd7bce077ddd20cf09f3654d8d0eb1.png"
            alt="ersf"
          />
          Billy the kid
        </div>
        <AvatarWithName value={'sdgsfbg'} name="Zack VonderBorgh" />
      </SelectInput>
    </li>
    <li>
      <h3>Select (dropdown no values) :</h3>

      <SelectInput onChange={(x) => { console.log('onChange called with :', x); }}>
        <AvatarWithName value={'sdgsfbg'} name="Zack VonderBorgh" />
        <div>Hi</div>
        <div>Hey</div>
        <Separator label="separator" />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Img
            style={{ width: '30px' }}
            src="https://i.pinimg.com/originals/51/cd/7b/51cd7bce077ddd20cf09f3654d8d0eb1.png"
            alt="ersf"
          />
          Billy the kid
        </div>
      </SelectInput>
    </li>
    <li>
      <Button type="primary"> I'ma button </Button>
      <Button type="primary" icon={<Merge />} iconPosition="after" > I'ma button </Button>
      <Button type="primary" icon={<Merge />} iconPosition="before"> I'ma button </Button>
      <Button link="https://google.com" type="primary" icon={<Merge />} iconPosition="before"> I'ma (link) button </Button>
      <h3>Select (dropdown WITH values) :</h3>
      <SelectInput defaultValue={selectInputDefaultValueRef} onChange={(x) => { console.log('onChange called with :', x); }}>
        <div value={'item1'}>Hi</div>
        <div value={'item2'}>Hey I'm way too long for this</div>
        <div value={'item3'}>
          <img
            style={{ width: '30px' }}
            src="https://i.pinimg.com/originals/51/cd/7b/51cd7bce077ddd20cf09f3654d8d0eb1.png"
            alt="ersf"
          />
          Billy the kid
        </div>
        <div value={selectInputDefaultValueRef}>Wut?</div>
      </SelectInput>
    </li>
    <li>
      <h3>FileInput :</h3>
      <FileInput onChange={(e) => { console.log(e); }} />
    </li>
    <li>
      <h3>FileInput with custom label :</h3>
      <FileInput label="choose image" />
    </li>
    <li>
      <h3>controlled text field : (controlled value : bar)</h3>
      <TextField type="text" value={'bar'} />
    </li>
    <li>
      <h3>Email : (controlled value : bar)</h3>
      <TextField type="email" value={'bar'} />
    </li>
    <li>
      <h3>Email with error :</h3>
      <TextField type="email" defaultValue={'fooobar'} error={'error message'} />
    </li>
    <li>
      <h3>Email with success (and an hagning error, error wins) :</h3>
      <TextField type="email" defaultValue={'fooobar'} error={<span>error node</span>} success />
    </li>
    <li>
      <h3>Email with success and no error :</h3>
      <TextField type="email" defaultValue={'fooobar'} success />
    </li>
    <li>
      <h3>text input with no default value and a placeholder :</h3>
      <TextField type="email" placeholder={'placeholder'} success />
    </li>
    <li>
      <h3>Uncontrolled Checkbox with label</h3>
      <Checkbox label={<div><span>Push Notifications :</span></div>} />
    </li>
    <li>
      <h3>Uncontrolled Checkbox with labelBefore</h3>
      <Checkbox labelBefore label={<div><span>Push Notifications :</span></div>} />
    </li>
    <li>
      <h3>Uncontrolled Checkbox with label before and defaultChecked = true</h3>
      <Checkbox defaultChecked lablBefore label={<div><span>Push Notifications :</span></div>} />
    </li>
    <li>
      <h3>Uncontrolled Checkbox</h3>
      <Checkbox />
    </li>
    <li>
      <h3>Uncontrolled Checkbox (defaultChecked: true):</h3>
      <Checkbox onChange={(e, checked) => console.log(e, checked)} defaultChecked />
    </li>
    <li>
      <h3>Controlled Checkbox (checked: true):</h3>
      <Checkbox onChange={(e, checked) => console.log(e, checked)} checked />
    </li>
    <li>
      <h3>Controlled Checkbox (checked: false):</h3>
      <Checkbox onChange={(e, checked) => console.log(e, checked)} checked={false} />
    </li>

  </ul>
);

export default ExampleSimple;
