import React from 'react';
import {
  Organization,
} from 'uxi/Icons';
import {
  Spacer
} from 'uxi/Base';
import {
  H4,
  P,
} from 'uxi/Classic';

const IconEvents = () => (
  <Spacer padding="m">
    <H4>On click</H4>
    <P>
      Click on the icon to see the action.
    </P>
    <Organization onClicks={() => alert('mouse entered')} />
    <H4>On mouse enter</H4>
    <P>
      Hover the Icon to see the action.
    </P>
    <Organization onMouseEnter={() => alert('mouse entered')} />
    <H4>On mouse leave</H4>
    <P>
      Hover the Icon to see the action.
    </P>
    <Organization onMouseLeave={() => alert('mouse leaved')} />
  </Spacer>
);

export default IconEvents;
