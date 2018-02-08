import React, { Component } from 'react';
import { GlobalMenu } from 'uxi/Menu';
import {
  KeepInTheLoop,
  FollowEntities,
  User,
  Settings,
  Integration,
  Slack,
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
        displayName: 'GDPR3',
        key: 'GDPR3',
        Icon: User,
        onClick: () => { alert('ttt'); },
      },
      {
        displayName: 'GDPR2',
        key: 'GDPR2',
        Icon: User,
        panel: {
          Title: 'efefefef',
          Content: () => (<div>'efefefef'</div>),
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
        displayName: 'GDPR',
        key: 'GDPR',
        Icon: User,
        panel: {
          Title: GDPRTitle,
          Content: GDPRContent,
          fullWidth: true,
        },
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
