import React from 'react';
import Administrator from '../Administrator';

describe('Icon : <Administrator />', () => {
  it('match snapshot', () => {
    expect(shallow(<Administrator />)).toMatchSnapshot();
  });
});

