import React from 'react';
import Datacatalog from '../Datacatalog';

describe('Icon : <Datacatalog />', () => {
  it('match snapshot', () => {
    expect(shallow(<Datacatalog />)).toMatchSnapshot();
  });
});

