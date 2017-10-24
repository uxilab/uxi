import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PageTitle, PageSubTitle } from 'uxi/Page';
import { SimpleList, ListItem } from 'uxi/List';

const Home = () => (
  <div>
    <PageTitle>UXI - Build UI faster</PageTitle>
    <PageSubTitle>Features</PageSubTitle>
    <SimpleList isBullet>
      <ListItem>Enterprise library components</ListItem>
      <ListItem>Components that ships their Sketch and their technical representation</ListItem>
      <ListItem>Highly customizable</ListItem>
    </SimpleList>
  </div>
);

export default Home;
