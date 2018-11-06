import React from 'react';
import Topic from '../Topic';

describe('Icon : <Topic />', () => {
  it('match snapshot', () => {
    expect(shallow(<Topic />)).toMatchSnapshot();
  });
});

