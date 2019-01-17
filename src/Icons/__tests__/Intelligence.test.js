import React from 'react';
import Intelligence from '../Intelligence';

describe('Icon : <Intelligence />', () => {
  it('match snapshot', () => {
    expect(shallow(<Intelligence />)).toMatchSnapshot();
  });
});

