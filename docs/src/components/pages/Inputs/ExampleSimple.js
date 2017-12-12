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
import { Merge } from 'uxi/Icons';
import { IconButton, Button } from 'uxi/Button';

const ExampleSimple = () => (
  <ul>
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
      <h3>Uncontrolled InputGroup</h3>
      <SearchForm
        icon={<Merge />}
        onChange={(x, y) => console.log(x, y)}
        placeholder="placeholder"
        onClick={(x, y) => console.log(x, y)}
      />
    </li>

    <li>
      <h3>Uncontrolled InputGroup (defaultValue: foobar)</h3>
      <SearchForm
        defaultValue="foobar"
        icon={<Merge />}
        onChange={x => console.log(x)}
        onClick={x => console.log(x)}
      />
    </li>

    <li>
      <h3>Controlled InputGroup (value: foobar)</h3>
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
      <h3>Select (dropdown no values) :</h3>
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
      </SelectInput>
    </li>
    <li>
      <h3>Select (dropdown WITH values) :</h3>
      <SelectInput onChange={(x) => { console.log('onChange called with :', x); }}>
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
      <h3>file :</h3>
      <TextField type="file" />
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
