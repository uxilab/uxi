import React from 'react';
import { Button } from 'uxi/Button';
import { Github } from 'uxi/Icons';
import { List } from 'uxi/List';


const ExampleSimpleWithIcon = () => (
  <List>
    <Button icon={<Github />} type="error" text="reconnect" />
    <Button
      icon={(
        <svg
          width="1024"
          height="1024"
          viewBox="0 0 1024 1024"
          style={{ marginLeft: 'calc(50% - 0.5em)' }}
        >
          <g>
            <path d="M960 0h64v736c0 88.366-100.29 160-224 160s-224-71.634-224-160c0-88.368 100.29-160 224-160 62.684 0 119.342 18.4 160 48.040v-368.040l-512 113.778v494.222c0 88.366-100.288 160-224 160s-224-71.634-224-160c0-88.368 100.288-160 224-160 62.684 0 119.342 18.4 160 48.040v-624.040l576-128z">
            </path>
          </g>
        </svg>
      )}
      text="Merge"
      iconPosition="after"
    />
  </List>
);

export default ExampleSimpleWithIcon;
