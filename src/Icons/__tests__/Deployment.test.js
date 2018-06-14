import React from 'react';
import Deployment from '../Deployment';

describe('Icon : <Deployment />', () => {
  it('match snapshot', () => {
    expect(shallow(<Deployment />)).toMatchSnapshot();
  });
});


