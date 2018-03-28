import React from 'react';
import Datacleaning from '../Datacleaning';

describe('Icon : <Datacleaning />', () => {
  it('match snapshot', () => {
    expect(shallow(<Datacleaning />)).toMatchSnapshot();
  });
});

