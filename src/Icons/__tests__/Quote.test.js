import React from 'react';
import Quote from '../Quote';

describe('Icon : <Quote />', () => {
  it('match snapshot', () => {
    expect(shallow(<Quote />)).toMatchSnapshot();
  });
});


