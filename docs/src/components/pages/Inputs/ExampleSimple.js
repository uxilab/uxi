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
} from '../../../../../src/Input';
import Img from '../../../../../src/Img';

const ExampleSimple = () => (
  <ul>
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
        <div value={'item2'}>Hey</div>
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
      <h3>Email :</h3>
      <TextField type="email" defaultValue={'fooobar'} />
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
      <h3>Checkbox :</h3>
      <Checkbox />
    </li>
    <li>
      <h3>Radio :</h3>
      <Radio />
    </li>
    <li>
      <h3>RadioGroup :</h3>
      <RadioGroup name="zevzeg" value="val A" onChange={() => { window.alert('radio changed'); }}>
        <Radio value="val A" />
        <Radio value="val B" />
      </RadioGroup>
    </li>
  </ul>
);

export default ExampleSimple;
