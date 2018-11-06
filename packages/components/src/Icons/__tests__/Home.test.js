import React from 'react';
import Home from '../Home';

describe('Icon : <Home />', () => {
  it('match snapshot', () => {
    expect(shallow(<Home />)).toMatchSnapshot();
  });
});

