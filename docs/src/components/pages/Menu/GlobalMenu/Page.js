import React from 'react';
import RAWGloblaMenu from '!raw-loader!uxi/Menu/GlobalMenu';
import { componentInfoToMD } from '../../../componentInfoToMD';
import CodeExample from '../../../CodeExample';

import ExampleSimple from './ExampleSimple';
import RAWExampleSimple from '!raw-loader!./ExampleSimple';


export const Page = () => (
  <div>
    <ul>
      <li>
        <CodeExample
          code={RAWGloblaMenu}
          // component
          title="<GlobalMenu />"
          description={componentInfoToMD(RAWGloblaMenu)}
        />
      </li>
      <li>
        <CodeExample
          code={RAWExampleSimple}
          // component
          title="<GlobalMenu />"
          description={'GloblaMenu'}
        >
          <ExampleSimple />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default Page;
