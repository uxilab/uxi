import React from 'react';
import styled from 'styled-components';
import PopOver from 'uxi/internal/PopOver';
import { FlatButton } from 'uxi/Button';

const main = (<div> click me </div>);

const ExamplePopOverAndPanel = () => (
  <div>
    <PopOver main={main} anchor={'right'}>
      <p style={{ maxWidth: '400px' }}>
        The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness,
      </p>
      <FlatButton type="primary" text="got it" onClick={() => console.log('ok', arguments)} />
    </PopOver>
  </div>
);

export default ExamplePopOverAndPanel;
