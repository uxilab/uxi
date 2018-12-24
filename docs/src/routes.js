
export const routes = [
  { path: '/panel', label: 'Panel', childRoutes: [
      { path: '/panel/PanelHeader', label: 'PanelHeader' }
      ,{ path: '/panel/PanelContent', label: 'PanelContent' }
      ,{ path: '/panel/PanelFooter', label: 'PanelFooter' }
      ,{ path: '/panel/LightPanel', label: 'LightPanel' }
  ]},
  { path: '/Dialog', label: 'Dialog', childRoutes: [
      { path: '/dialog/withConfirmDialog', label: 'withConfirmDialog', isHOC: true }
  ]},
  { path: '/icons', label: 'Icons' },
  { path: '/inputs', label: 'Inputs', childRoutes: [
      { path: '/inputs/Checkbox', label: 'Checkbox' }
      ,{ path: '/inputs/radio', label: 'Radio' }
      ,{ path: '/inputs/selectinput', label: 'SelectInput' }
      ,{ path: '/inputs/FileInput', label: 'FileInput' }
      ,{ path: '/inputs/TextField', label: 'TextField' }
      ,{ path: '/inputs/Range', label: 'Range' }
      ,{ path: '/inputs/Datetime', label: 'Datetime' }
      ,{ path: '/inputs/SearchForm', label: 'SearchForm' }
      , { path: '/inputs/AutoComplete', label: 'AutoComplete' }
      // ,{ path: '/inputs/switch', label: 'Switch' }
  ]},
  { path: '/button', label: 'Button', childRoutes: [
    { path: '/button/FlatButton', label: 'FlatButton' }
    ,{ path: '/button/ButtonLink', label: 'ButtonLink' }
  ]},
  { path: '/Drawer', label: 'Drawer', childRoutes: [
    { path: '/Drawer/CompactDrawer', label: 'CompactDrawer' }
  ]},
  { path: '/alert', label: 'Alert' },
  { path: '/badge', label: 'Badge' },
  { path: '/layouts', label: 'Layout', childRoutes: [
    { path: '/layouts/AppLayout', label: 'AppLayout' }
    ,{ path: '/layouts/Flex', label: 'Flex' }
    ,{ path: '/layouts/ContentWithExtra', label: 'ContentWithExtra' }
    ,{ path: '/layouts/SimpleGrid', label: 'SimpleGrid' }
  ]},
  // { path: '/internal', label: 'Internal' },
  { path: '/breadcrumbs', label: 'BreadCrumbs' },
  { path: '/classic', label: 'Classic' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/Motion', label: 'Motion' },
  { path: '/datagrid', label: 'Data Grid' },
  { path: '/spacer', label: 'Spacer' },
  { path: '/img', label: 'Image' },
  { path: '/stepper', label: 'Stepper' },
  { path: '/carrousel', label: 'Carrousel' },
  { path: '/table', label: 'Table' },
  { path: '/BETAAutoComplete', label: 'BETAAutoComplete' },
  { path: '/popover', label: 'PopOver' },
  // { path: '/compactslide', label: 'CompactSlide' },
  { path: '/MenuDropDown', label: 'MenuDropDown' },
  // { path: '/font', label: 'Fonts' },
  // { path: '/color', label: 'Colors' },
  // { path: '/dropdown', label: 'Dropdown' },
  { path: '/box', label: 'Box' },
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/indicator', label: 'Indicator' },
  { path: '/tree', label: 'Tree' },
  { path: '/list', label: 'List' },
  { path: '/loader', label: 'Loader' },
  { path: '/menu', label: 'Menu' },
  // {/* { path: '/sublayout', label: 'SubLayout' }, */ },
  { path: '/sociallinks', label: 'Sociallinks' },
  { path: '/globalmenu', label: 'Global Menu' },
  { path: '/widget', label: 'Widget' },
  { path: '/personalizedmenu', label: 'Personalized Menu' },
  { path: '/tile', label: 'Tile' },
];
