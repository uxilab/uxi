import React from 'react';
import Copylink from '../Copylink';

describe('Icon : <Copylink />', () => {
  it('match snapshot', () => {
    expect(shallow(<Copylink />)).toMatchSnapshot();
  });
});

