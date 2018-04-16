import React from 'react';
import Outliers from '../Outliers';

describe('Icon : <Outliers />', () => {
  it('match snapshot', () => {
    expect(shallow(<Outliers />)).toMatchSnapshot();
  });
});

