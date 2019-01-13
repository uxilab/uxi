import React from 'react';
import { H1 } from 'uxi/Classic';
import CodeExample from '../../CodeExample';
import RAWSvgIcon from '!raw-loader!uxi/SvgIcon/SvgIcon';
import { componentInfoToMD } from '../../componentInfoToMD';

import ExampleIconSimple from './ExampleIconSimple';
import RAWExampleIconSimple from '!raw-loader!./ExampleIconSimple';

import IconsList from './IconsList';
import RAWIconsList from '!raw-loader!./IconsList';


export const Page = () => (
  <div>
    <ul>
      <li>
        <CodeExample
          code={RAWSvgIcon}
          component
          title="SvgIcon"
          description={componentInfoToMD(RAWSvgIcon)}
          hasPadding
        >
        </CodeExample>
      </li>
      <li>
        <CodeExample
          title="Simple icons usage"
          description={'Usage'}
          code={RAWExampleIconSimple}
        >
          <ExampleIconSimple />
        </CodeExample>
      </li>
      <li>
        <CodeExample
          title="Full list of icons"
          // description={'All icons'}
          code={RAWIconsList}
        >
          <IconsList />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default Page;
