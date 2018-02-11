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
import { H4, P } from 'uxi/Classic';
import Button from 'uxi/Button';
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
      attachToViewport: false,
    };
  }
  onLogoClickHandler() {
    console.log('logo');
  }

  render() {
    const { attachToViewport } = this.state;

    const menuDescriptors = [
      {
        active: true,
        displayName: 'Keep in the loop',
        key: 'Keep in the loop',
        hasNew: true,
        Icon: Keepintheloop,
        onClick: () => { console.log('Keep in the loop'); },
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
        onClick: () => { console.log('GDPR'); },
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
        active: false,
        displayName: 'Settings',
        key: 'Settings',
        Icon: Settings,
        onClick: () => { console.log('Settings'); },
      },
    ];

    const badMenuDescriptors = [
      {
        active: true,
        displayName: 'Keep in the loop',
        key: 'Keep in the loop',
        hasNew: true,
        Icon: Keepintheloop,
        onClick: () => { console.log('Keep in the loop'); },
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
        onClick: () => { console.log('GDPR'); },
      },
      {
        active: false,
        displayName: 'Settings',
        key: 'Settings',
        Icon: Settings,
        onClick: () => { console.log('Settings'); },
      },
    ];

    const logoText = (
      <div style={{ maxWidth: '90px' }}>
        <CluedinLogoText style={{ width: '100%' }} />
      </div>
    )

    return (
      <div>

        <H4>Good example of GlobalMenu (inline)</H4>
        <P>
          menuitem that have subItem (subroute) don't have panel and vicevera
        </P>
        <P>
          This usage is encouraged
        </P>
        <GlobalMenu
          logoIcon={<Cluedin />}
          logoText={logoText}
          logoTooltipLabel="Home"
          onLogoClick={this.onLogoClickHandler.bind(this)}
          activeKey="GlobalMenu"
          menuDescriptors={menuDescriptors}
          isOwner
        />

        <br/>

        <H4>Wrong example of GlobalMenu (inline)</H4>
        <P>
          using panel and children on the same menu item
          is confusing for several reasons
          * where to pass the focus
          * if it's not a route, how does it have "sub route"
        </P>
        <P>
          This usage is discouraged
        </P>
        <GlobalMenu
          logoIcon={<Cluedin />}
          logoText={logoText}
          logoTooltipLabel="Home"
          onLogoClick={this.onLogoClickHandler.bind(this)}
          activeKey="GlobalMenu"
          menuDescriptors={badMenuDescriptors}
          isOwner
        />

        <br/>

        <H4>Fixed, full sized GlobalMenu</H4>
        <P>
           toggle attachToViewport prop to make it
           fixed and full viewport sized in one shot
        </P>
        {/* Attached to viewport */}
        <Button
          onClick={() => this.setState({ attachToViewport: !attachToViewport })}
          text={`${attachToViewport ? 'detach from' : 'attach to' } viewport`}
        />
        <GlobalMenu
          attachToViewport={attachToViewport}
          logoIcon={<Cluedin />}
          logoText={logoText}
          logoTooltipLabel="Home"
          onLogoClick={this.onLogoClickHandler.bind(this)}
          activeKey="GlobalMenu"
          menuDescriptors={menuDescriptors}
          isOwner
        />
        <br/>
      </div>
    );
  }
}

export default ExampleSimple;
