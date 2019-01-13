
export const routes = [
  // { path: '/theme', label: 'Theme' },
  { path: '/panel',
    label: 'Panel',
    childRoutes: [
      { path: '/panel/PanelHeader', label: 'PanelHeader' },
      { path: '/panel/PanelContent', label: 'PanelContent' },
      { path: '/panel/PanelFooter', label: 'PanelFooter' },
      { path: '/panel/LightPanel', label: 'LightPanel' },
    ],
  },
  { path: '/Dialog',
    label: 'Dialog',
    childRoutes: [
      { path: '/dialog/withConfirmDialog', label: 'withConfirmDialog', isHOC: true },
    ] },
  { path: '/icons', label: 'Icons' },
  { path: '/button',
    label: 'Button',
    childRoutes: [
      { path: '/button/FlatButton', label: 'FlatButton' },
      { path: '/button/OutlineButton', label: 'OutlineButton' },
      { path: '/button/ButtonLink', label: 'ButtonLink' },
      { path: '/button/UnstyledButton', label: 'UnstyledButton' },
    ],
  },
  { path: '/inputs',
    label: 'Inputs',
    childRoutes: [
      { path: '/inputs/Checkbox', label: 'Checkbox' },
      { path: '/inputs/radio', label: 'Radio' },
      { path: '/inputs/select', label: 'Select' },
      { path: '/inputs/FileInput', label: 'FileInput' },
      { path: '/inputs/TextField', label: 'TextField' },
      { path: '/inputs/Range', label: 'Range' },
      { path: '/inputs/Datetime', label: 'Datetime' },
      { path: '/inputs/SearchForm', label: 'SearchForm' },
      { path: '/inputs/AutoComplete', label: 'AutoComplete' },
    // ,{ path: '/inputs/switch', label: 'Switch' }
    ],
  },
  { path: '/Drawer',
    label: 'Drawer',
    childRoutes: [
      { path: '/Drawer/CompactDrawer', label: 'CompactDrawer' },
      { path: '/Drawer/Disclosure', label: 'Disclosure' },
    ],
  },
  { path: '/Image',
    label: 'Image',
    childRoutes: [
      { path: '/Image/Img', label: 'Img' },
      { path: '/Image/Gallery', label: 'Gallery' },
    ],
  },
  { path: '/Menu',
    label: 'Menu',
    childRoutes: [
      { path: '/Menu/ButtonMenu', label: 'ButtonMenu' },
      { path: '/Menu/ButtonMenuItem', label: 'ButtonMenuItem' },
      { path: '/Menu/globalmenu', label: 'GlobalMenu' },
    ],
  },
  { path: '/alert', label: 'Alert' },
  { path: '/layouts',
    label: 'Layout',
    childRoutes: [
      { path: '/layouts/AppLayout', label: 'AppLayout' },
      { path: '/layouts/Flex', label: 'Flex' },
      { path: '/layouts/ContentWithExtra', label: 'ContentWithExtra' },
      { path: '/layouts/SimpleGrid', label: 'SimpleGrid' },
    ],
  },
  { path: '/table',
    label: 'Table',
  },
  {
    path: '/datagrid', label: 'DataGrid',
  },
  // { path: '/internal', label: 'Internal' },
  { path: '/others',
    label: 'Beta',
    childRoutes: [
      { path: '/beta/classic', label: 'Classic' },
      { path: '/beta/Motion', label: 'Motion' },
      { path: '/beta/spacer', label: 'Spacer' },
      { path: '/beta/stepper', label: 'Stepper' },
      { path: '/beta/carrousel', label: 'Carrousel' },
      { path: '/beta/BETAAutoComplete', label: 'BETAAutoComplete' },
      { path: '/beta/popover', label: 'PopOver' },
      // { path: '/beta/compactslide', label: 'CompactSlide' },
      { path: '/beta/sociallinks', label: 'Sociallinks' },
      { path: '/beta/MenuDropDown', label: 'MenuDropDown' },
      // { path: '/beta/font', label: 'Fonts' },
      // { path: '/beta/color', label: 'Colors' },
      // { path: '/beta/dropdown', label: 'Dropdown' },
      { path: '/beta/box', label: 'Box' },
      { path: '/beta/dashboard', label: 'Dashboard' },
      { path: '/beta/indicator', label: 'Indicator' },
      { path: '/beta/tree', label: 'Tree' },
      // { path: '/beta/list', label: 'List' },
      // { path: '/beta/loader', label: 'Loader' },
      // { path: '/beta/menu', label: 'Menu' },
      // {/* { path: '/beta/sublayout', label: 'SubLayout' }, */ },
      { path: '/beta/widget', label: 'Widget' },
      { path: '/beta/personalizedmenu', label: 'Personalized Menu' },
      { path: '/beta/tile', label: 'Tile' },
      { path: '/beta/badge', label: 'Badge' },
    ],
  },
];


export default {
  routes,
};
