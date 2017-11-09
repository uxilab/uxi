import React from 'react';
import Announcement from '../Announcement';

describe('Icon : <Announcement />', () => {
  it('match snapshot', () => {
    expect(shallow(<Announcement />)).toMatchSnapshot();
  });
});

