import React from 'react';
import Contact from '../Contact';

describe('Icon : <Contact />', () => {
  it('match snapshot', () => {
    expect(shallow(<Contact />)).toMatchSnapshot();
  });
});


