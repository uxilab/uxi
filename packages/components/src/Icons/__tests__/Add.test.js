import React from 'react';
import Add from '../Add';

describe('Icon : <Add />', () => {
  it('match snapshot', () => {
    expect(shallow(<Add />)).toMatchSnapshot();
  });
});

