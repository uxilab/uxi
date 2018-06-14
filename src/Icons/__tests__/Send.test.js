import React from 'react';
import Send from '../Send';

describe('Icon : <Send />', () => {
  it('match snapshot', () => {
    expect(shallow(<Send />)).toMatchSnapshot();
  });
});


