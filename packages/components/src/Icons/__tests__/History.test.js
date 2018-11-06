import React from 'react';
import History from '../History';

describe('Icon : <History />', () => {
  it('match snapshot', () => {
    expect(shallow(<History />)).toMatchSnapshot();
  });
});

