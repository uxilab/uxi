import React from 'react';
import File from '../File';

describe('Icon : <File />', () => {
  it('match snapshot', () => {
    expect(shallow(<File />)).toMatchSnapshot();
  });
});


