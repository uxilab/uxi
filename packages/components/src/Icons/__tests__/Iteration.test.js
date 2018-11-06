import React from 'react';
import Iteration from '../Iteration';

describe('Icon : <Iteration />', () => {
  it('match snapshot', () => {
    expect(shallow(<Iteration />)).toMatchSnapshot();
  });
});

