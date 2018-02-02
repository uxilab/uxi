import React from 'react';
import { AppLayout } from 'uxi/Layout';
import { P } from 'uxi/Classic';

const ExampleSimple = () => (
  <ul>
    <li>
      <h1>App Layout</h1>
      <P>
        The page you're looking at right now is actually made of this Layout,
        you can inspect using reactDEvTool to see this
      </P>
      <h3>container has fixed height of 300px</h3>
      <div style={{ height: '300px', margin: ' 8px', border: '1px solid black' }}>
        <AppLayout>
          <header style={{ border: '1px solid black', background: 'grey' }} > header </header>
          <main style={{ border: '1px solid black', background: 'grey' }} > main </main>
          <footer style={{ border: '1px solid black', background: 'grey' }} > footer </footer>
        </AppLayout>
      </div>
      <h3>container has fixed width and height of 300px</h3>
      <div style={{ width: '300px', height: '300px', margin: ' 8px', border: '1px solid black' }}>
        <AppLayout>
          <div style={{ border: '1px solid black', background: 'grey' }} > div </div>
          <span style={{ border: '1px solid black', background: 'grey' }} > span </span>
          <ul style={{ border: '1px solid black', background: 'grey' }} > ul </ul>
        </AppLayout>
      </div>
    </li>
  </ul>
);

export default ExampleSimple;
