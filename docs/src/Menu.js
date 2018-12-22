import React from 'react';
import { GlobalMenu } from 'uxi/Menu';
import { Link } from 'react-router-dom'
import { Circle, Cluedin } from 'uxi/Icons';
import { H4, P } from 'uxi/Classic';
import Button from 'uxi/Button';
import { CluedinLogoText } from 'uxi/Logo';
import {routes} from './ComponentShell'

const getIsActive = key  => (
  window && window.location && window.location.pathname &&
  window.location.pathname.indexOf(key) > -1
)

export const GlobalDocAppMenu = props => {
  const makeRouteObj = (routeDescription) => ({
    displayName: routeDescription.label,
    key: routeDescription.label,
    // hasNew: true,
    onClick: () => { console.log(routeDescription.label); },
    // icon: <Circle /> ,
    to: `/components${routeDescription.path}`,
    Link: Link,
    isActive: getIsActive(routeDescription.path),
    ...(
      routeDescription.childRoutes
        ? { children: routeDescription.childRoutes.map(makeRouteObj) }
        : {}
    ),
  })

  const menuDescriptors = routes.map(makeRouteObj)
  /* const menuDescriptors = routes.map(route => ({
    displayName: route.label,
    key: route.label,
    hasNew: true,
    // content: <div>anything</div>,
    onClick: () => { console.log(route.label); },
    icon: <Circle /> ,
    to: `/components${route.path}`,
    Link: Link,
    isActive: getIsActive(route.path),
    ...(route.childRoutes
      ? {
          children: childRoutes.map()
      }
      : {}
    ),
  }))
  */


  // const logoDescriptor = {
  //   onClick: () => console.log('going home'),
  //   key: 'home route',
  //   Link,
  //   to: '/',
  //   displayName: (<CluedinLogoText style={{ width: '100%' }} />),
  //   icon: (<Cluedin size={28} />),
  //   isActive: (location === '/'),
  // };

  return (
    <GlobalMenu
      // attachToViewport={true}
      logoDescriptor={null}
      activeKey="GlobalMenu"
      menuDescriptors={menuDescriptors}
      isOwner
    />
  )
}

export default GlobalDocAppMenu
