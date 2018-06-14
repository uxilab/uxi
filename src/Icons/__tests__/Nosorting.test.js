import React from 'react';
import Nosorting from '../Nosorting';

describe('Icon : <Nosorting />', () => {
  it('match snapshot', () => {
    expect(shallow(<Nosorting />)).toMatchSnapshot();
  });
});


