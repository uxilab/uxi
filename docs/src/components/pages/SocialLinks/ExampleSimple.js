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
      <h3>VErtical</h3>
      <SocialLinks socialLinks={data} />
    </li>
    <li>
      <h3>horizontal</h3>
      <SocialLinks socialLinks={data} horizontal />
    </li>
  </ul>
);

export default ExampleSimple;
