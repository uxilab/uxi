import React from 'react';
import Tileview from '../Tileview';

describe('Icon : <Tileview />', () => {
  it('match snapshot', () => {
    expect(shallow(<Tileview />)).toMatchSnapshot();
  });
});

