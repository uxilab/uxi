import React from 'react';
import AppLayout from '../../../../../src/Layout/AppLayout';

const ExampleSimple = () => (
  <ul>
    <li>
      <h3>container has fixed height of 800px</h3>
      <div style={{ minHeight: '800px', margin: ' 8px', border: '1px solid black' }}>
        <AppLayout>
          <header style={{ border: '1px solid black', background: 'grey' }} > header </header>
          <main style={{ border: '1px solid black', background: 'grey' }} > main </main>
          <footer style={{ border: '1px solid black', background: 'grey' }} > footer </footer>
        </AppLayout>
      </div>
    </li>
  </ul>
);

export default ExampleSimple;
