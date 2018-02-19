import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import CodeExample from '../../CodeExample';

import SimpleGallery from './SimpleGallery';
import RAWSimpleGallery from '!raw-loader!./SimpleGallery';


const GalleryPage = () => (
  <div>
    <Title text="gallery" />
    <P>
      gallery.
    </P>
    <ul>
      <li>
        <CodeExample
          code={RAWSimpleGallery}
          component
          title="Playground"
          hasPadding
        >
          <SimpleGallery />
        </CodeExample>
      </li>
    </ul>
  </div>
);

export default GalleryPage;
