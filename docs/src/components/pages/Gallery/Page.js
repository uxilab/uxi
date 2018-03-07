import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import CodeExample from '../../CodeExample';

import SimpleGallery from './SimpleGallery';
import RAWSimpleGallery from '!file-loader!isomorphic-loader!./SimpleGallery.js'

import ResponsiveGalleryExample from './ResponsiveGallery';
import RAWResponsiveGallery from '!file-loader!isomorphic-loader!./ResponsiveGallery.js'


const GalleryPage = () => (
  <div>
    <div>
      <CodeExample
        code={RAWSimpleGallery}
        component
        title="Gallery"
        hasPadding
      >
        <SimpleGallery />
      </CodeExample>
    </div>

    <div>
      <CodeExample
        code={RAWResponsiveGallery}
        component
        title="Responsive Gallery"
        hasPadding
      >
        <ResponsiveGalleryExample />
      </CodeExample>
    </div>
  </div>
);

export default GalleryPage;
