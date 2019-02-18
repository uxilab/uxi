import React from 'react';
import Stream from '../Stream';

describe('Icon : <Stream />', () => {
  it('match snapshot', () => {
    expect(shallow(<Stream />)).toMatchSnapshot();
  });
});

