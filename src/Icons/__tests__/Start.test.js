import React from 'react';
import Start from '../Start';

describe('Icon : <Start />', () => {
  it('match snapshot', () => {
    expect(shallow(<Start />)).toMatchSnapshot();
  });
});

