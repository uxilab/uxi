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
  Cluedin,
} from 'uxi/Icons';
import { CluedinLogoText } from 'uxi/Logo';


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
        key: 'Followed entities menu item',
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
      <div style={{ maxWidth: '90px' }}>
        <CluedinLogoText style={{ width: '100%' }} />
      </div>
    )

    return (
      <div>
        <GlobalMenu
          LogoIcon={Cluedin}
          logoText={logoText}
          logoTooltipLabel="Home"
          onLogoClick={this.onLogoClickHandler.bind(this)}
          activeKey="GlobalMenu"
          menuDescriptors={menuDescriptors}
          isOwner
        />
      </div>
    );
  }
}

export default ExampleSimple;
