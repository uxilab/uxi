import React from 'react';
import { ProgressBar } from 'uxi/Motion';

const ExampleSimple = () => (
  <div>
    <ul>
      <li>
        <h3>Simple (full width by default)</h3>
        <ProgressBar min={0} max={58} value={12} />
      </li>
      <li>
        <h3>Simple (width fixed by consumer (40))</h3>
        <ProgressBar width={40} min={0} max={200} value={100} />
      </li>
    </ul>
  </div>
);

export default ExampleSimple;
