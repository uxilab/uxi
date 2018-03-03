import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PageTitle, PageSubTitle } from 'uxi/Page';
import { SimpleList, ListItem } from 'uxi/List';
import MarkDownElement from '../MarkdownElement/MarkDownElement';
import RAWReadme from './README.md';

const Home = () => (
  <div>
    <PageTitle>UXI - Build UI faster</PageTitle>
    <PageSubTitle>Features</PageSubTitle>
    <SimpleList isBullet>
      <ListItem>Enterprise library components</ListItem>
      <ListItem>Components that ships their Sketch and their technical representation</ListItem>
      <ListItem>Highly customizable</ListItem>
    </SimpleList>
    <br />
    <h3>README.md:</h3>
    <br />
    <MarkDownElement  text={RAWReadme} lang="js" />

  </div>
);

export default Home;
