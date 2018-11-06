import React from 'react';
import Cluedin from '../Cluedin';

describe('Icon : <Cluedin />', () => {
  it('match snapshot', () => {
    expect(shallow(<Cluedin />)).toMatchSnapshot();
  });
});

