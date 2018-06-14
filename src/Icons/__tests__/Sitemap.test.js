import React from 'react';
import Sitemap from '../Sitemap';

describe('Icon : <Sitemap />', () => {
  it('match snapshot', () => {
    expect(shallow(<Sitemap />)).toMatchSnapshot();
  });
});


