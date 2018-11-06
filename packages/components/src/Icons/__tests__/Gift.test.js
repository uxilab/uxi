import React from 'react';
import Gift from '../Gift';

describe('Icon : <Gift />', () => {
  it('match snapshot', () => {
    expect(shallow(<Gift />)).toMatchSnapshot();
  });
});

