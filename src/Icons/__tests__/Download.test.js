import React from 'react';
import Download from '../Download';

describe('Icon : <Download />', () => {
  it('match snapshot', () => {
    expect(shallow(<Download />)).toMatchSnapshot();
  });
});

