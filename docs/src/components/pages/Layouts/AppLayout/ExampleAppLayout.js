import React from 'react';
import { AppLayout } from 'uxi/Layout';
import { P } from 'uxi/Classic';

const ExampleAppLayout = () => (
  <ul>
    <li>
      <h1>App Layout</h1>
      <P>
        The page you're looking at right now is actually made of this Layout,
        you can inspect using reactDEvTool to see this
      </P>
      <h3>container has fixed height of 300px</h3>
      <div style={{ height: '200px', margin: ' 8px', border: '1px solid black' }}>
        <AppLayout>
          <header style={{ border: '1px solid black', background: 'grey' }} > header </header>
          <main style={{ border: '1px solid black', background: 'grey' }} > main </main>
          <footer style={{ border: '1px solid black', background: 'grey' }} > footer </footer>
        </AppLayout>
      </div>
      <h3>container has fixed width and height of 300px and more content than can fit, so it create a scrolling context</h3>
      <div style={{ width: '200px', height: '300px', margin: ' 8px', border: '1px solid black' }}>
        <AppLayout>
          <div style={{ border: '1px solid black', background: 'grey' }} > div </div>
          <div style={{ border: '1px solid black', background: 'grey' }} >
            <div style={{ maxWidth: '130px', margin: '0 auto' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <ul style={{ border: '1px solid black', background: 'grey' }} > ul </ul>
        </AppLayout>
      </div>
    </li>
  </ul>
);

export default ExampleAppLayout;
