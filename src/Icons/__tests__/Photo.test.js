import React from 'react';
import Photo from '../Photo';

describe('Icon : <Photo />', () => {
  it('match snapshot', () => {
    expect(shallow(<Photo />)).toMatchSnapshot();
  });
});

