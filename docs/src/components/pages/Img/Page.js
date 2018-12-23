import React from 'react';
import { H1 } from 'uxi/Classic';
import CodeExample from '../../CodeExample';

import ImgExample from './ImgExample';
import RAWImgExample from '!raw-loader!./ImgExample';
import RAWMDImgExample from '!raw-loader!./ImgExample.md';

const BoxPage = () => (
 <div>
  <H1>Panel</H1>
    <ul>
      <li>
        <CodeExample
          code={RAWImgExample}
          component
          title="Dialog"
          description={RAWMDImgExample}
          hasPadding
        >
          <ImgExample />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default BoxPage;
