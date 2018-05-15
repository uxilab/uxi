import React from 'react'
import PopOver from 'uxi/internal/PopOver'

const content = (<div> now you see me </div>)
const main = (<div> click me </div>)

const ExampleSimplePopOver = () => (
  <div>
    <PopOver
      main={main}
      content={content}
    />
  </div>
);

export default ExampleSimplePopOver;
