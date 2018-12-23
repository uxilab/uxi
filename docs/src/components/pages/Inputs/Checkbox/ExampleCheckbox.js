import React from 'react';
import { Checkbox } from 'uxi/Input';

const ExampleCheckbox = () => (
  <div style={{ padding: '16px' }}>
    <ul>
      <li>
        <h3>Uncontrolled Checkbox with label</h3>
        <Checkbox name="c" label={<div><span>Push Notifications :</span></div>} />
      </li>
      <li>
        <h3>Uncontrolled Checkbox with labelBefore</h3>
        <Checkbox name="d" labelBefore label={<div><span>Push Notifications :</span></div>} />
      </li>
      <li>
        <h3>Uncontrolled Checkbox with label before and defaultChecked = true</h3>
        <Checkbox name="e" defaultChecked lablBefore label={<div><span>Push Notifications :</span></div>} />
      </li>
      <li>
        <h3>Uncontrolled Checkbox</h3>
        <Checkbox name="f" />
      </li>
      <li>
        <h3>Uncontrolled Checkbox (defaultChecked: true):</h3>
        <Checkbox name="g" onChange={(e, checked) => console.log(e, checked)} defaultChecked />
      </li>
      <li>
        <h3>Controlled Checkbox (checked: true):</h3>
        <Checkbox name="h" onChange={(e, checked) => console.log(e, checked)} checked />
      </li>
      <li>
        <h3>Controlled Checkbox (checked: false):</h3>
        <Checkbox name="i" onChange={(e, checked) => console.log(e, checked)} checked={false} />
      </li>
    </ul>
  </div>
);

export default ExampleCheckbox;
