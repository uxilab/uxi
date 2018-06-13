import React from 'react';
import ExampleSimple from './ExampleSimple';

import CheckBoxExample from './CheckBoxExample';

const InputsPage = () => (
  <div>
    <CheckBoxExample handleFormChange={() => { alert('test')}} />
    <ExampleSimple handleFormChange={() => { alert('test')}} />
  </div>
);

export default InputsPage;
