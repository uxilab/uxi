import React from 'react';
import { H1 } from 'uxi/classic';
import CodeExample from '../../../CodeExample';

import ExampleSearchForm from './ExampleSearchForm';
import RAWExampleSearchForm from '!raw-loader!./ExampleSearchForm';

const SearchFormPage = () => (
  <ul>
    <H1>SearchForm</H1>
    <li>
      <CodeExample
        code={RAWExampleSearchForm}
        component
        title="SearchForm examples"
        description="Can takes a custom icon. The text input can be controlled or not. Uses `<InputGroup />` under the hood"
      >
        <ExampleSearchForm />
      </CodeExample>
    </li>
  </ul>
);

export default SearchFormPage;
