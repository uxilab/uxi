import React from 'react';
import { ProgressBar } from 'uxi/Indicator';

const ExampleSimple = () => (
  <div>
    <ul>
      <li>
        <h3>Simple (full width by default)</h3>
        <ProgressBar min={0} max={58} value={12} />
      </li>
      <li>
        <h3>Simple (width fixed by consumer (40))</h3>
        <ProgressBar width={100} min={0} max={200} value={80} />
      </li>
      <li>
        <h3>with label</h3>
        <ProgressBar
          label={<div> looooooong label 50 % </div>}
          width={90}
          min={0}
          max={200}
          value={100}
        />
      </li>
      <li>
        <h3>with label</h3>
        <ProgressBar
          label={<div> looooooong label 50 % </div>}
          min={0}
          max={200}
          value={100}
        />
      </li>
      <li>
        <h3>with label (left)</h3>
        <ProgressBar
          labelPosition="left"
          label={<div> looooooong label 50 % </div>}
          width={90}
          min={0}
          max={200}
          value={100}
        />
      </li>
      <li>
        <h3>with label (left + whitespace: nowrap)</h3>
        <ProgressBar
          labelPosition="left"
          label={<div style={{ whiteSpace: 'nowrap' }}> looooooong label 50 % </div>}
          min={0}
          max={200}
          value={100}
        />
      </li>
      <li>
        <h3>with label (bottom)</h3>
        <ProgressBar
          labelPosition="bottom"
          label={<div> looooooong label 50 % </div>}
          width={90}
          min={0}
          max={200}
          value={100}
        />
      </li>
      <li>
        <h3>with label (bottom)</h3>
        <ProgressBar
          labelPosition="bottom"
          label={<div> looooooong label 50 % </div>}
          min={0}
          max={200}
          value={100}
        />
      </li>
      <li>
        <h3>with label (top)</h3>
        <ProgressBar
          labelPosition="top"
          label={<div> looooooong label 50 % </div>}
          width={90}
          min={0}
          max={200}
          value={100}
        />
      </li>
      <li>
        <h3>with label (top)</h3>
        <ProgressBar
          labelPosition="top"
          label={<div> looooooong label 50 % </div>}
          min={0}
          max={200}
          value={100}
        />
      </li>
      <li>
        <h3>with label (top)</h3>
        <ProgressBar
          labelPosition="top"
          label={<div> looooooong label 50 % </div>}
          min={0}
          max={200}
          value={100}
        />
      </li>
    </ul>
  </div>
);

export default ExampleSimple;
