import RAWDialog from '!raw-loader!uxi/Dialog/Dialog'
import RAWPanel from '!raw-loader!uxi/Panel/Panel'
import RAWPanelHeader from '!raw-loader!uxi/Panel/PanelHeader'
import RAWPanelContent from '!raw-loader!uxi/Panel/PanelContent'
import RAWPanelFooter from '!raw-loader!uxi/Panel/PanelFooter'

import { parse } from 'react-docgen';

console.log('RAWDialog', RAWDialog)

// use same label as routes for keys
// use same path as routes for path
export const componentsData = [
  {
    componentInfo: parse(RAWDialog),
    path: '/Dialog',
  }, {
    componentInfo: parse(RAWPanel),
    path: '/Panel',
  }, {
    componentInfo: parse(RAWPanelHeader),
    path: '/PanelHeader',
  }, {
    componentInfo: parse(RAWPanelContent),
    path: '/PanelContent',
  }, {
    componentInfo: parse(RAWPanelFooter),
    path: '/PanelFooter',
  }
]

