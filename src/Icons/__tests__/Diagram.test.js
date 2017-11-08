import React from 'react';
import Diagram from '../Diagram';

describe('Icon : <Diagram />', () => {
  it('match snapshot', () => {
    expect(shallow(<Diagram />)).toMatchSnapshot();
  });
});


