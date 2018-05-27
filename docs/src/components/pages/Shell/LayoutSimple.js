import React from 'react';
import { AppLayout } from 'uxi/Layout';

const LayoutSimple = () => (
  <div style={{ height: '200px', margin: ' 8px', border: '1px solid black' }}>
    <AppLayout>
      <header style={{ border: '1px solid black', background: 'grey' }} > header </header>
      <main style={{ border: '1px solid black', background: 'grey' }} > main </main>
      <footer style={{ border: '1px solid black', background: 'grey' }} > footer </footer>
    </AppLayout>
  </div>
);

export default LayoutSimple;
