import React from 'react';
import Unpluged from '../Unpluged';

describe('Icon : <Unpluged />', () => {
  it('match snapshot', () => {
    expect(shallow(<Unpluged />)).toMatchSnapshot();
  });
});

