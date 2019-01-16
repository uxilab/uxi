import React from 'react';
import Sandbox from '../Sandbox';

describe('Icon : <Sandbox />', () => {
  it('match snapshot', () => {
    expect(shallow(<Sandbox />)).toMatchSnapshot();
  });
});

