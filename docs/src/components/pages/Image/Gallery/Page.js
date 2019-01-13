import React from 'react';
import { P } from 'uxi/Classic';
import { Title } from 'uxi/Text';
import CodeExample from '../../../CodeExample';

import SimpleGallery from './SimpleGallery';
import RAWSimpleGallery from '!raw-loader!./SimpleGallery';
import RAWMDSimpleGallery from '!raw-loader!./SimpleGallery.md';

import ResponsiveGalleryExample from './ResponsiveGallery';
import RAWResponsiveGallery from '!raw-loader!./ResponsiveGallery';
import RAWMDResponsiveGallery from '!raw-loader!./ResponsiveGallery.md';


const GalleryPage = () => (
  <div>
    <div>
      <CodeExample
        code={RAWSimpleGallery}
        component
        title="Gallery"
        description={RAWMDSimpleGallery}
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
        description={RAWMDResponsiveGallery}
        hasPadding
      >
        <ResponsiveGalleryExample />
      </CodeExample>
    </div>
  </div>
);

export default GalleryPage;
