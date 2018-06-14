import React from 'react';
import Issue from '../Issue';

describe('Icon : <Issue />', () => {
  it('match snapshot', () => {
    expect(shallow(<Issue />)).toMatchSnapshot();
  });
});


