import React from 'react';
import Databreach from '../Databreach';

describe('Icon : <Databreach />', () => {
  it('match snapshot', () => {
    expect(shallow(<Databreach />)).toMatchSnapshot();
  });
});

