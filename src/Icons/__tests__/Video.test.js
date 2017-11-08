import React from 'react';
import Video from '../Video';

describe('Icon : <Video />', () => {
  it('match snapshot', () => {
    expect(shallow(<Video />)).toMatchSnapshot();
  });
});


