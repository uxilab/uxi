import React from 'react';
import Pause from '../Pause';

describe('Icon : <Pause />', () => {
  it('match snapshot', () => {
    expect(shallow(<Pause />)).toMatchSnapshot();
  });
});


