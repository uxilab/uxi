import React from 'react';
import Presentation from '../Presentation';

describe('Icon : <Presentation />', () => {
  it('match snapshot', () => {
    expect(shallow(<Presentation />)).toMatchSnapshot();
  });
});

