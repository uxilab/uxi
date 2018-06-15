import React from 'react';
import News from '../News';

describe('Icon : <News />', () => {
  it('match snapshot', () => {
    expect(shallow(<News />)).toMatchSnapshot();
  });
});

