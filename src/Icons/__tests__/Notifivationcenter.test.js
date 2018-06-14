import React from 'react';
import Notifivationcenter from '../Notifivationcenter';

describe('Icon : <Notifivationcenter />', () => {
  it('match snapshot', () => {
    expect(shallow(<Notifivationcenter />)).toMatchSnapshot();
  });
});


