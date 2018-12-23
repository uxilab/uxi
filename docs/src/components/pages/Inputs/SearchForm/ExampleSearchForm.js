import React from 'react';
import { SearchForm } from 'uxi/Input';
import { Circle } from 'uxi/Icons';

const ExampleSearchForm = () => (
  <div style={{ padding: '16px' }}>
    <ul>
       <li>
      <h3>Uncontrolled SearchForm (full width)</h3>
      <SearchForm
        fullWidth
        onChange={(x, y) => console.log(x, y)}
        placeholder="search form"
        onClick={(x, y) => console.log(x, y)}
      />
    </li>

    <li>
      <h3>Uncontrolled InputGroup (defaultValue: foobar)</h3>
      <SearchForm
        defaultValue="foobar"
        onChange={x => console.log(x)}
        onClick={x => console.log(x)}
      />
    </li>

    <li>
      <h3>Controlled InputGroup (value: foobar and custom icon)</h3>
      <SearchForm
        value="foobar"
        icon={<Circle />}
        onChange={x => console.log(x)}
        onClick={x => console.log(x)}
      />
    </li>
    </ul>
  </div>
);

export default ExampleSearchForm;
