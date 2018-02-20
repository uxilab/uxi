import React from 'react';
import ActionMenu, { PersonalizedMenu } from 'uxi/ActionMenu';
import {
  Keepintheloop,
  User,
  Options,
} from 'uxi/Icons';

const ExampleSimple = () => (
  <div>
    <h3>Personlized Menu</h3>
    <div style={{marginBottom: '15px'}}>
      <ActionMenu menuDescriptors={[
        {
          displayName: 'Keep in he loop',
          key: 'Keep in the loop',
          hasNew: true,
          icon: <Keepintheloop />,
          onClick: () => { alert('Keep in the loop'); },
          isPromoted: true,
        },
      ]} />
    </div>
    <div style={{marginBottom: '15px'}}>
      <ActionMenu menuDescriptors={[
        {
          displayName: 'Keep in he loop',
          key: 'Keep in the loop',
          hasNew: true,
          icon: <Keepintheloop />,
          onClick: () => { alert('Keep in the loop'); },
          isPromoted: true,
        },
        {
          hasNew: true,
          displayName: 'Users',
          key: 'Users',
          icon: <User />,
          onClick: () => { alert('User '); },
        },
        {
          hasNew: true,
          displayName: 'Users',
          key: 'Users',
          icon: <Options />,
          onClick: () => { alert('User '); },
          isPromoted: true,
        },
        {
          hasNew: true,
          displayName: 'Users',
          key: 'Users',
          icon: <User />,
          onClick: () => { alert('User '); },
        },
        {
          hasNew: true,
          displayName: 'No Icon',
          key: 'noicon',
          onClick: () => { alert('User '); },
        },
        {
          hasNew: true,
          isPromoted: true,
          displayName: 'No Icon Promoted',
          key: 'noicon',
          onClick: () => { alert('User '); },
        },
      ]} />
    </div>
    <div style={{display:'flex', justifyContent: 'flex-end', paddingRight:'100px'}}>
    <PersonalizedMenu menuDescriptors={[
        {
          displayName: 'Keep in he loop',
          key: 'Keep in the loop',
          hasNew: true,
          icon: <Keepintheloop />,
          onClick: () => { alert('Keep in the loop'); },
          isPromoted: true,
        },
        {
          hasNew: true,
          displayName: 'Users',
          key: 'Users',
          icon: <User />,
          onClick: () => { alert('User '); },
        },
        {
          hasNew: true,
          displayName: 'Users',
          key: 'Userefefefs',
          icon: <Options />,
          onClick: () => { alert('User '); },
          isPromoted: true,
        },
        {
          hasNew: true,
          displayName: 'Users',
          key: 'Userdvdvdvs',
          icon: <User />,
          onClick: () => { alert('User '); },
        },
        {
          hasNew: true,
          displayName: 'No Icon',
          key: 'noicon',
          onClick: () => { alert('User '); },
        },
        {
          hasNew: true,
          isPromoted: true,
          displayName: 'No Icon Promoted',
          key: 'noerberbricon',
          onClick: () => { alert('User '); },
        },
      ]} />
    </div>
  </div>
);

export default ExampleSimple;
