import React from 'react';
import Changeview from '../Changeview';

describe('Icon : <Changeview />', () => {
  it('match snapshot', () => {
    expect(shallow(<Changeview />)).toMatchSnapshot();
  });
});

