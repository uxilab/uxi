import React from 'react';
import Report from '../Report';

describe('Icon : <Report />', () => {
  it('match snapshot', () => {
    expect(shallow(<Report />)).toMatchSnapshot();
  });
});

