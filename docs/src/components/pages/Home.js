import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PageTitle, PageSubTitle } from 'uxi/Page';

const Home = () => (
  <div>
    <PageTitle>UXI - Build UI faster</PageTitle>
    <p>
      Hi!
    </p>
    <PageSubTitle>Features</PageSubTitle>
    <ul>
      <li>Enterprise library components</li>
      <li>Components that ships their Sketch and their technical representation</li>
      <li>Highly customizable</li>
    </ul>
  </div>
);

export default Home;
