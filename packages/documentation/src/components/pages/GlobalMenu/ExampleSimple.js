import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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

const longString = `Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit. `;

const GDPRContent = ({ close }) => (
  <div>
    test
    <button tabindex="0" onClick={close} >Click!</button>
    <p style={{ padding: '16px' }}>
      {longString}
      {longString}
      {longString}
      {longString}
    </p>
  </div>
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
      // {
      //   displayName: 'base link',
      //   key: 'base link',
      //   hasNew: true,
      //   // content: <div>anything</div>,
      //   onClick: () => { console.log('anything'); },
      //   icon: <Padlock />,
      //   to: '/input',
      //   Link: Link,
      // },
      // {
      //   displayName: 'Simple anchor',
      //   key: 'Simple anchor',
      //   hasNew: true,
      //   // content: <div>anything</div>,
      //   // onClick: () => { console.log('anything'); },
      //   icon: <Padlock />,
      //   href: '/button',
      // },
      {
        displayName: 'Keep in the loop',
        key: 'Keep in the loop',
        hasNew: true,
        isActive: (window && window.location.pathname.indexOf('/globalmenu') > -1 ),
        icon: <Keepintheloop />,
        onClick: () => { console.log('Keep in the loop'); },
      },
      {
        displayName: 'Followed entities',
        key: 'Followed entities menu item',
        hasNew: true,
        icon: <Followentities />,
        onClick: () => console.log('clicked on menuDEscriptor Followentities'),
        panel: {
          Title: 'Followed entities',
          Content: () => (<div>{longString}</div>),
          Action: ({close}) => (<button tabindex="0" onClick={close}>test</button>),
          width: 300,
        },
      },
      {
        hasNew: true,
        displayName: 'Users',
        key: 'Users',
        icon: <User />,
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
        icon: <Padlock />,
        Content: () => (<a tabIndex="-1" style={{ outline: 'none' }} href="#" >GDPR</a>),
        onClick: () => { console.log('GDPR'); },
        children: [
          {
            key: 'viewAllRequest',
            displayName: 'View all request',
            content: <a tabIndex="-1" style={{ outline: 'none' }} href="#" >View all request</a>,
          },
          {
            key: 'GDPRConfiguration',
            displayName: 'GDPR Configuration',
            content: <a tabIndex="-1" style={{ outline: 'none' }} href="#" >GDPR Configuration</a>,
          },
        ]
      },
      {
        active: false,
        displayName: 'Settings',
        key: 'Settings',
        icon: <Settings />,
        onClick: () => { console.log('Settings'); },
      },
    ];

    const badMenuDescriptors = [
      {
        active: true,
        displayName: 'Keep in the loop',
        key: 'Keep in the loop',
        hasNew: true,
        icon: <Keepintheloop />,
        onClick: () => { console.log('Keep in the loop'); },
      },
      {
        displayName: 'Followed entities',
        key: 'Followed entities menu item',
        hasNew: true,
        icon: <Followentities />,
        panel: {
          Title: 'Followed entities',
          Content: () => (<div>'List of Followed entities'</div>),
          Action: ({close}) => (<button tabindex="0" onClick={close}>test</button>),
          width: 300,
        },
        children: [
          {
            key: 'viewAllRequest',
            displayName: 'View all request',
            content: 'View all request',
          },
          {
            key: 'GDPRConfiguration',
            displayName: 'GDPR Configuration',
            content: 'GDPR Configuration',
          },
        ]
      },
      {
        hasNew: true,
        displayName: 'Users',
        key: 'Users',
        icon: <User />,
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
        icon: <Padlock />,
        onClick: () => { console.log('GDPR'); },
      },
      {
        active: false,
        displayName: 'Settings',
        key: 'Settings',
        icon: <Settings />,
        onClick: () => { console.log('Settings'); },
      },
    ];

    const logoText = (
      <div style={{ maxWidth: '90px' }}>
        <CluedinLogoText style={{ width: '100%' }} />
      </div>
    )

    const logoDescriptor = {
      onClick: () => console.log('going home'),
      key: 'home route',
      Link,
      to: '/',
      displayName: (<CluedinLogoText style={{ width: '100%' }} />),
      icon: (<Cluedin size={28} />),
      isActive: (location === '/'),
    };
/*
    menuDescriptors.push({
      displayName: 'GDPR!',
      icon: <Settings />,
      // isActive: (pathname.toLowerCase() === '/gdpr'),
      isActive: ('location'.toLowerCase().indexOf('/gdpr') > -1),
      key: 'GDPR',
      Link,
      to: '/gdpr',
      children: [
        {
          key: 'viewAllRequest',
          displayName: 'View all request',
          content: <a tabIndex="-1" style={{ outline: 'none' }} href="#" >View all request</a>,
        },
        {
          key: 'GDPRConfiguration',
          displayName: 'GDPR Configuration',
          content: <a tabIndex="-1" style={{ outline: 'none' }} href="#" >GDPR Configuration</a>,
        },
      ],
    });
*/
    return (
      // Simulate cluedin rules .root a
      <div className="root">
        <style dangerouslySetInnerHTML={{
          __html: `
            .root a {
              cursor: pointer;
              text-decoration: none;
              color: #06979e;
          }`
        }} >
        </style>
        <H4>Good example of GlobalMenu (inline)</H4>
        <P>
          menuitem that have subItem (subroute) don't have panel and vicevera
        </P>
        <P>
          This usage is encouraged
        </P>
        <GlobalMenu
          logoDescriptor={logoDescriptor}
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
          logoDescriptor={logoDescriptor}
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
          logoDescriptor={logoDescriptor}
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
