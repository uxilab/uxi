import React from 'react';
import Gallery from './Gallery';
import PropsMapperContainerQueries from '../internal/PropsMapperContainerQueries';

const defaultRules = [
  {
    minWidth: 0,
    mapper: ({ imgHeight }) => ({ imgHeight: 90 }),
  },
  {
    minWidth: 600,
    mapper: ({ imgHeight }) => ({ imgHeight: 135 }),
  },
  {
    minWidth: 900,
    mapper: ({ imgHeight }) => ({ imgHeight: 160 }),
  },
]

const ResponsiveGallery = props => {
  const { galleryDescriptor, rules } = props;
  return (
    <PropsMapperContainerQueries imgHeight={40} rules={rules}>
      <Gallery galleryDescriptor={galleryDescriptor} />
    </PropsMapperContainerQueries>
  );
}

ResponsiveGallery.displayName = 'ResponsiveGallery';

ResponsiveGallery.defaultProps = {
  rules: defaultRules,
  galleryDescriptor: [],
}

export default ResponsiveGallery;
