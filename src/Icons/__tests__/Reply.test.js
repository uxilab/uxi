import React from 'react';
import Reply from '../Reply';

describe('Icon : <Reply />', () => {
  it('match snapshot', () => {
    expect(shallow(<Reply />)).toMatchSnapshot();
  });
});


