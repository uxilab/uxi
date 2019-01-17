import React from 'react';
import Plugedin from '../Plugedin';

describe('Icon : <Plugedin />', () => {
  it('match snapshot', () => {
    expect(shallow(<Plugedin />)).toMatchSnapshot();
  });
});

