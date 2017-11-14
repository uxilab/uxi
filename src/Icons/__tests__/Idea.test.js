import React from 'react';
import Idea from '../Idea';

describe('Icon : <Idea />', () => {
  it('match snapshot', () => {
    expect(shallow(<Idea />)).toMatchSnapshot();
  });
});


