import React from 'react';
import Arrowdown from '../Arrowdown';

describe('Icon : <Arrowdown />', () => {
  it('match snapshot', () => {
    expect(shallow(<Arrowdown />)).toMatchSnapshot();
  });
});


