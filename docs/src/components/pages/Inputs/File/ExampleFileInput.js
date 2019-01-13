import React from 'react';
import { FileInput } from 'uxi/Input';

const ExampleFileInput = () => (
  <div style={{ padding: '16px' }}>
    <ul>
      <li>
        <FileInput
          label="Upload a file"
          id="b" onChange={(e) => {
            console.log(e.target.files);
          }}
        />
      </li>
      <li><br /></li>
      <li>with 'multiple' bool prop:</li>
      <li><br /></li>
      <li>
        <FileInput
          id="a"
          multiple
          label="Upload files"
          onChange={(e) => {
            console.log(e.target.files);
          }}
        />
      </li>
    </ul>
  </div>
);

export default ExampleFileInput;
