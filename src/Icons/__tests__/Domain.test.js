import React from 'react';
import Domain from '../Domain';

describe('Icon : <Domain />', () => {
  it('match snapshot', () => {
    expect(shallow(<Domain />)).toMatchSnapshot();
  });
});


