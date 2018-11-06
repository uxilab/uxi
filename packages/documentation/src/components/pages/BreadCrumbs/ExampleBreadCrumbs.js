import React from 'react';
import BreadCrumbs from 'uxi/BreadCrumbs';
import { AvatarWithName } from 'uxi/Img'
import { Integration } from 'uxi/Icons'

const ExampleBreadCrumbs = () => (
  <div>
    <BreadCrumbs>
      <a style={{fontSize:'18px'}} href="http://google.com">
        <AvatarWithName
          imgSize="32"
          icon={<Integration />}
          name={'Integration'}
        />
      </a>
      <a href="http://google.com"> Box </a>
      <a href="http://google.com"> Configuration </a>
      <a href="http://google.com"> Bill's config </a>
    </BreadCrumbs>
  </div>
);

export default ExampleBreadCrumbs;
