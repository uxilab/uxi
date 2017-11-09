import React from 'react';
import Barchart from '../Barchart';

describe('Icon : <Barchart />', () => {
  it('match snapshot', () => {
    expect(shallow(<Barchart />)).toMatchSnapshot();
  });
});

