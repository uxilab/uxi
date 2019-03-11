import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import RAWSelectWithFiltering from '!raw-loader!uxi/Input/Select/SelectWithFiltering';
import CodeExample from '../../../CodeExample';
import { componentInfoToMD } from '../../../componentInfoToMD';

import Playground from './Playground';
import RAWPlayground from '!raw-loader!./Playground';

import ExampleSelectWithFiltering from './ExampleSelectWithFiltering';
import RAWExampleSelectWithFiltering from '!raw-loader!./ExampleSelectWithFiltering';


const SelectInputPage = () => (
  <div>
    <Title text="SelectInput" />
    <P>
      {'Custom Select Input allowing anything to be used as <option>'}
      <br />
      <strong>{'IMPORTANT!'}</strong>
      {'You have to pass a `mainScrollingElementSelector` props if window.document is not the main scrolling element'}
      <br />
    </P>
    <ul>
      <li>
        <CodeExample
          code={RAWSelectWithFiltering}
          component
          title="<SelectWithFiltering />"
          description={componentInfoToMD(RAWSelectWithFiltering)}
        />
      </li>
      <li>
        <CodeExample
          code={RAWExampleSelectWithFiltering}
          component
          title="SelectWithFiltering (WIP)"
          hasPadding
        >
          <ExampleSelectWithFiltering />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default SelectInputPage;
