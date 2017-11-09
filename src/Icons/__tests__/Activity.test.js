import React from 'react';
import Activity from '../Activity';

describe('Icon : <Activity />', () => {
  it('match snapshot', () => {
    expect(shallow(<Activity />)).toMatchSnapshot();
  });
});

