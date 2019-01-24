import React from 'react';
import { TextField } from 'uxi/Input';
import { Flex } from 'uxi/Layout';

const ExampleTextField = () => (
  <div style={{ padding: '16px' }}>
    <ul>
      <li>
        <h3>controlled text field : (controlled value : bar)</h3>
        <TextField type="text" value={'bar'} />
      </li>
      <li>
        <h3>Email : (controlled value : bar)</h3>
        <TextField type="email" value={'bar'} />
      </li>
      <li>
        <h3>Custom : </h3>
        <Flex style={{ width: '100%' }}>
          <div style={{ flexGrow: 99 }} >
            <TextField isFullWidth type="text" defaultValue={'bill'} />
          </div>
          @example.com
        </Flex>
        <br />
        <Flex style={{ width: '100%' }}>
          ~/some/predefined/path/
          <div style={{ flexGrow: 99 }} >
            <TextField isFullWidth type="text" defaultValue={'filename'} />
          </div>
          {'.'}
          <TextField type="text" defaultValue={'extension'} />
        </Flex>
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
    </ul>
  </div>
);

export default ExampleTextField;
