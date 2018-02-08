import React, { Component } from 'react';
import { GlobalMenu } from 'uxi/Menu';
import {
  Keepintheloop,
  Followentities,
  User,
  Settings,
  Integration,
  Slack,
  Padlock,
} from 'uxi/Icons';


const GDPRContent = ({ close }) => (
  <span>test<button onClick={close} >Click!</button></span>
);

const GDPRTitle = () => (
   <span>ttest2</span>
);

class ExampleSimple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '#ff0000',
    };
  }
  onLogoClickHandler() {
    alert('logo');
  }

  render() {
    const menuDescriptors = [
      {
        active: true,
        displayName: 'Keep in the loop',
        key: 'Keep in the loop',
        hasNew: true,
        Icon: Keepintheloop,
        onClick: () => { alert('Keep in the loop'); },
      },
      {
        displayName: 'Followed entities',
        key: 'Followed entities',
        hasNew: true,
        Icon: Followentities,
        panel: {
          Title: 'Followed entities',
          Content: () => (<div>'List of Followed entities'</div>),
          Action: ({close}) => (<button onClick={close}>test</button>),
          width: 300,
        },
        children: [
          {
            key: 'viewAllRequest',
            displayName: 'View all request',
          },
          {
            key: 'GDPRConfiguration',
            displayName: 'GDPR Configuration',
          },
        ]
      },
      {
        hasNew: true,
        displayName: 'Users',
        key: 'Users',
        Icon: User,
        panel: {
          Title: GDPRTitle,
          Content: GDPRContent,
          fullWidth: true,
        },
      },
      {
        active: false,
        displayName: 'GDPR',
        key: 'GDPR',
        hasNew: true,
        Icon: Padlock,
        onClick: () => { alert('GDPR'); },
      },
      {
        active: false,
        displayName: 'Settings',
        key: 'Settings',
        Icon: Settings,
        onClick: () => { alert('Settings'); },
      },
    ];

    const logoText = (
      <div style={{ fontFamily: 'Fira sans' }}>cluedin</div>
    );

    return (
      <div>
        <GlobalMenu
          LogoIcon={Slack}
          LogoText={logoText}
          activeKey="GlobalMenu"
          onLogoClick={this.onLogoClickHandler.bind(this)}
          menuDescriptors={menuDescriptors}
          isOwner
        />
      </div>
    );
  }
}

export default ExampleSimple;
