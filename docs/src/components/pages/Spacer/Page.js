import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import ExampleSimple from './ExampleSimple';
import RAWExampleSimple from '!raw-loader!./ExampleSimple';
import CodeExample from '../../CodeExample';

const SpacerPage = () => (
  <div>
  <Title text="Spacer" />
  <P>
    Spacer is used to keep you spacing consistent in your appliaction.
  </P>
  <P>
    <strong>Values:</strong>
  </P>
  <P>
    xs = 4px 4px 4px 4px;<br/>
    s = 8px 8px 8px 8px;<br/>
    m = 16px 16px 16px 16px;<br/>
    l = 32px 32px 32px 32px;<br/>
    xl = 64px 64px 64px 64px;<br/>
    stack-xs = 0 0 4px 0;<br/>
    stack-s = 0 0 8px 0;<br/>
    stack-m = 0 0 16px 0;<br/>
    stack-l = 0 0 32px 0;<br/>
    stack-xl = 0 0 64px 0;<br/>
  </P>
  <ul>
    <li>
      <CodeExample
        code={RAWExampleSimple}
        component
        title="Simple Spacer"
        hasPadding
      >
        <ExampleSimple />
      </CodeExample>
    </li>
  </ul>
</div>
);

export default SpacerPage;
