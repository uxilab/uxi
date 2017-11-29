import React from 'react';
import { TextField, Radio, RadioGroup, Checkbox } from '../../../../../src/Input';

const ExampleSimple = () => (
  <ul>
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
