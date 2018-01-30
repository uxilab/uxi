import React from 'react';
import Workspace from '../Workspace';

describe('Icon : <Workspace />', () => {
  it('match snapshot', () => {
    expect(shallow(<Workspace />)).toMatchSnapshot();
  });
});

