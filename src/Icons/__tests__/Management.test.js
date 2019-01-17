import React from 'react';
import Management from '../Management';

describe('Icon : <Management />', () => {
  it('match snapshot', () => {
    expect(shallow(<Management />)).toMatchSnapshot();
  });
});

