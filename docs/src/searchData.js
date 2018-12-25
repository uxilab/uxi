import RAWDialog from '!raw-loader!uxi/Dialog/Dialog';
import RAWPanel from '!raw-loader!uxi/Panel/Panel';
import RAWPanelHeader from '!raw-loader!uxi/Panel/PanelHeader';
import RAWPanelContent from '!raw-loader!uxi/Panel/PanelContent';
import RAWPanelFooter from '!raw-loader!uxi/Panel/PanelFooter';
import RAWButton from '!raw-loader!uxi/Button/Button';
import RAWFlatButton from '!raw-loader!uxi/Button/FlatButton';
import RAWButtonLink from '!raw-loader!uxi/Button/ButtonLink';
import RAWFlex from '!raw-loader!uxi/Layout/Flex';
import RAWAppLayout from '!raw-loader!uxi/Layout/AppLayout';
import RAWContentWithExtra from '!raw-loader!uxi/Layout/ContentWithExtra';
import RAWSimpleGrid from '!raw-loader!uxi/Layout/SimpleGrid';
import RAWDrawer from '!raw-loader!uxi/Drawer';

import { parse } from 'react-docgen';


const parseMD = (rawMD) => {
  let componentInfo = null;
  try {
    componentInfo = parse(rawMD);
  } catch (err) {
    console.error(err);
  }

  if (componentInfo === null) {
    return 'no doc';
  }

  return componentInfo;
};

// use same label as routes for keys
// use same path as routes for path
export const componentsData = [
  {
    componentInfo: parseMD(RAWDialog),
    path: '/Dialog',
  }, {
    componentInfo: parseMD(RAWPanel),
    path: '/Panel',
  }, {
    componentInfo: parseMD(RAWPanelHeader),
    path: '/Panel/PanelHeader',
  }, {
    componentInfo: parseMD(RAWPanelContent),
    path: '/Panel/PanelContent',
  }, {
    componentInfo: parseMD(RAWButton),
    path: '/Button',
  }, {
    componentInfo: parseMD(RAWFlatButton),
    path: '/Button/FlatButton',
  }, {
    componentInfo: parseMD(RAWButtonLink),
    path: '/Button/ButtonLink',
  }, {
    componentInfo: parseMD(RAWFlex),
    path: '/Layout/Flex',
  }, {
    componentInfo: parseMD(RAWAppLayout),
    path: '/Layout/AppLayout',
  }, {
    componentInfo: parseMD(RAWContentWithExtra),
    path: '/Layout/ContentWithExtra',
  }, {
    componentInfo: parseMD(RAWSimpleGrid),
    path: '/Layout/SimpleGrid',
  }, {
    componentInfo: parseMD(RAWDrawer),
    path: '/Drawer',
  },
];

export default {
  componentsData,
};
