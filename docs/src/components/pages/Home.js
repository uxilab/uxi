import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { H3, P } from 'uxi/Classic';
import { PageTitle, PageSubTitle } from 'uxi/Page';
import { SimpleList, ListItem } from 'uxi/List';
import MarkDownElement from '../MarkdownElement/MarkDownElement';
import { routes } from '../../routes';
import RAWReadme from '!raw-loader!./README.md';

const Home = () => (
  <div style={{ padding: '116px 32px 32px', width: '100%', maxWidth: '760px', margin: '0 auto' }}>
    <PageTitle>UXI - Build UI faster</PageTitle>
    <PageSubTitle>Features</PageSubTitle>
    <SimpleList isBullet>
      <ListItem>Enterprise library components</ListItem>
      <ListItem>Components that ships their Sketch and their technical representation</ListItem>
      <ListItem>Highly customizable</ListItem>
      <ListItem>Highly composable</ListItem>
      <ListItem>Whitre labeling</ListItem>
    </SimpleList>
    <hr />
    <H3>README.md</H3>
    <P style={{ background: 'white', padding: '32px 8px' }}>
      <MarkDownElement text={RAWReadme} lang="js" />
    </P>
    <hr />
    <H3>Component list</H3>
    <ul>
      {
        routes.map(route => (
          <li style={{ padding: '8px' }}>
            <Link to={`/components${route.path}`}>{route.label}</Link>
            {route.childRoutes
              ? (<ul>
                {
                  route.childRoutes.map(route => (
                    <li style={{ padding: '8px', paddingLeft: '16px' }}>
                      <Link to={`/components${route.path}`}>{route.label}</Link>
                    </li>
                  ))
                }
              </ul>)
              : null
            }
          </li>
        ))
      }
    </ul>

  </div>
);

export default Home;
