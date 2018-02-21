import React from 'react';
// import { SocialLinks } from 'uxi/List/SocialLinks';
import { SocialLinks } from '../../../../../src/List';

const data = [
  {
    name: 'facebook',
    url: 'https://facebook.com/',
  },
  {
    name: 'instagram',
    url: 'https://instagram.com/',
  },
];

const ExampleSimple = () => (
  <ul>
    <li>
      <h3>Vertical</h3>
      <SocialLinks socialLinks={data} />
    </li>
    <li>
      <h3>Horizontal</h3>
      <SocialLinks socialLinks={data} horizontal />
    </li>
    <li>
      <h3>Horizontal with spacing and custom color</h3>
      <SocialLinks iconColor="#b0b0b0" socialLinks={data} spacing="15px" horizontal />
    </li>
  </ul>
);

export default ExampleSimple;
