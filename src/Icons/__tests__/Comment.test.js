import React from 'react';
import Comment from '../Comment';

describe('Icon : <Comment />', () => {
  it('match snapshot', () => {
    expect(shallow(<Comment />)).toMatchSnapshot();
  });
});

