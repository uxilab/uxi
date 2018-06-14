import React from 'react';
import Tag from '../Tag';

describe('Icon : <Tag />', () => {
  it('match snapshot', () => {
    expect(shallow(<Tag />)).toMatchSnapshot();
  });
});


