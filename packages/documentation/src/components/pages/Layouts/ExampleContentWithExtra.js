import React from 'react';
import { ContentWithExtra } from 'uxi/Layout';

const ExampleContentWithExtra = () => (
  <div>
    <ContentWithExtra
      extraPosition="after"
      contentMinWidth="250px"
      extraMinWidth="10px"
      extra={
        <div style={{ background: 'yellow' }}>I'm extra</div>
      }
    >
      <div style={{ background: 'green' }}>You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man.</div>

    </ContentWithExtra>
    <br/>
    <ContentWithExtra
      extraPosition="before"
      contentMinWidth="250px"
      extraMinWidth="100px"
      extra={
        <div style={{ background: 'yellow' }}>I'm extra</div>
      }
    >
      <div style={{ background: 'green' }}>You .</div>

    </ContentWithExtra>
  </div>
);

export default ExampleContentWithExtra;
