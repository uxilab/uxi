import React from 'react';
import Salesorder from '../Salesorder';

describe('Icon : <Salesorder />', () => {
  it('match snapshot', () => {
    expect(shallow(<Salesorder />)).toMatchSnapshot();
  });
});

