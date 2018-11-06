import React from 'react';
import BreadCrumbs from 'uxi/BreadCrumbs';

const ExampleBreadCrumbs = () => (
  <div>
    <BreadCrumbs>
      <a href="http://google.com"> root </a>
      <a href="http://google.com"> path1 </a>
      <a href="http://google.com"> path2 </a>
      <a href="http://google.com">path3</a>
    </BreadCrumbs>
  </div>
);

export default ExampleBreadCrumbs;
