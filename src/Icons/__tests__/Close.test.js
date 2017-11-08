import React from 'react';
import Close from '../Close';

describe('Icon : <Close />', () => {
  it('match snapshot', () => {
    expect(shallow(<Close />)).toMatchSnapshot();
  });
});


