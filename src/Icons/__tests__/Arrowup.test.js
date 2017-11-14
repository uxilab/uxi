import React from 'react';
import Arrowup from '../Arrowup';

describe('Icon : <Arrowup />', () => {
  it('match snapshot', () => {
    expect(shallow(<Arrowup />)).toMatchSnapshot();
  });
});


