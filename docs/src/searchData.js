import RAWDialog from '!raw-loader!uxi/Dialog/Dialog'
import RAWPanel from '!raw-loader!uxi/Panel/Panel'
import RAWPanelHeader from '!raw-loader!uxi/Panel/PanelHeader'
import RAWPanelContent from '!raw-loader!uxi/Panel/PanelContent'
import RAWPanelFooter from '!raw-loader!uxi/Panel/PanelFooter'
import RAWButton from '!raw-loader!uxi/Button/Button'
import RAWFlatButton from '!raw-loader!uxi/Button/FlatButton'

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
    path: '/Panel/PanelHeader',
  }, {
    componentInfo: parse(RAWPanelContent),
    path: '/Panel/PanelContent',
  }, {
    componentInfo: parse(RAWButton),
    path: '/Button',
  }, {
    componentInfo: parse(RAWFlatButton),
    path: '/Button/FlatButton',
  }
]

