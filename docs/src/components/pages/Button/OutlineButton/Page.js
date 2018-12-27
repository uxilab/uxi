import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import { Switch } from 'uxi/Input';
import CodeExample from '../../../CodeExample';
// import RAWFlatButton from '!raw-loader!uxi/Button/FlatButton';
// import { componentInfoToMD } from '../../../componentInfoToMD';

import ExampleSimpleOutline from './ExampleSimpleOutline';
import RAWExampleSimpleOutline from '!raw-loader!./ExampleSimpleOutline';


const Page = () => (
  <div>
    <Title text="ExampleSimpleOutline" />
    <ul>
      <li>
        <CodeExample
          code={RAWExampleSimpleOutline}
          component
          title="ExampleSimpleOutline"
          hasPadding
        >
        <div
          style={{
            padding: '16px',
            background: `linear-gradient(to right, rgb(28, 61, 80) 0%, rgb(44, 74, 97) 50%, rgb(38, 161, 153) 100%)`
          }}
        >
          <ExampleSimpleOutline />

        </div>
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default Page;
