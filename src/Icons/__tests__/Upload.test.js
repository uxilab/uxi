import React from 'react';
import Upload from '../Upload';

describe('Icon : <Upload />', () => {
  it('match snapshot', () => {
    expect(shallow(<Upload />)).toMatchSnapshot();
  });
});


