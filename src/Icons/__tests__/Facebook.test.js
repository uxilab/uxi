import React from 'react';
import Facebook from '../Facebook';

describe('Icon : <Facebook />', () => {
  it('match snapshot', () => {
    expect(shallow(<Facebook />)).toMatchSnapshot();
  });
});

