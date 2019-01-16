import React from 'react';
import Preparation from '../Preparation';

describe('Icon : <Preparation />', () => {
  it('match snapshot', () => {
    expect(shallow(<Preparation />)).toMatchSnapshot();
  });
});

