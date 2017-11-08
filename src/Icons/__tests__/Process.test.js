import React from 'react';
import Process from '../Process';

describe('Icon : <Process />', () => {
  it('match snapshot', () => {
    expect(shallow(<Process />)).toMatchSnapshot();
  });
});


