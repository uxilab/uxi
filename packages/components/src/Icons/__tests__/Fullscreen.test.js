import React from 'react';
import Fullscreen from '../Fullscreen';

describe('Icon : <Fullscreen />', () => {
  it('match snapshot', () => {
    expect(shallow(<Fullscreen />)).toMatchSnapshot();
  });
});

