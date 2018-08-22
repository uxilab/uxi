import React from 'react';
import ComponentShell from './ComponentShell';
import { Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import ButtonPage from './components/pages/Button/Page';
import FontPage from './components/pages/Font/Page';
import ColorPage from './components/pages/Color/Page';
import BoxPage from './components/pages/Box/Page';
import SocialLinksPage from './components/pages/SocialLinks/Page';
import InputsPage from './components/pages/Inputs/Page';
import IconsPage from './components/pages/Icons/Page';
import LayoutPage from './components/pages/Layouts/Page';
import TablePage from './components/pages/Table/Page';
import SwitchPage from './components/pages/Switch/Page';
import AlertPage from './components/pages/Alert/Page';
import LoaderPage from './components/pages/Loader/Page';
import ImgPage from './components/pages/Img/Page';
import MenuPage from './components/pages/Menu/Page';
import InternalPage from './components/pages/Internal/Page';
import BadgePage from './components/pages/Badge/Page';
import IndicatorPage from './components/pages/Indicator/Page';
import DashboardPage from './components/pages/DashboardLayout/Page';
import StepperPage from './components/pages/Stepper/Page';
import DialogDropDownPage from './components/pages/DialogWithDropDown/Page';
import AutoCompletePage from './components/pages/AutoComplete/Page';
import BreadCrumbsPage from './components/pages/BreadCrumbs/Page';
import RadioPage from './components/pages/Radio/Page';
import ClassicPage from './components/pages/Classic/Page';
import ListPage from './components/pages/List/Page';
import DataGridPage from './components/pages/DataGrid/Page';
import GlobalMenuPage from './components/pages/GlobalMenu/Page';
import WidgetPage from './components/pages/Widget/Page';
import PesonalizedMenuPage from './components/pages/PersonalizedMenu/Page';
import PanbelPage from './components/pages/Panel/Page';
import GalleryPage from './components/pages/Gallery/Page';
import CarrouselPage from './components/pages/Carrousel/Page';
import TilePage from './components/pages/Tile/Page';
import MotionPage from './components/pages/Motion/Page';
import SelectInputPage from './components/pages/SelectInput/Page';
import PopOverPage from './components/pages/PopOver/Page';
import CompactSlidePage from './components/pages/CompactSlide/Page';

const ComponentRoutes = ({ match }) => (
  <ComponentShell>
    <Switch>
      <Route path={`${match.url}/`} exact component={Home} />
      <Route path={`${match.url}/Font`} exact component={FontPage} />
      <Route path={`${match.url}/color`} component={ColorPage} />
      <Route path={`${match.url}/button`} component={ButtonPage} />
      <Route path={`${match.url}/SelectInput`} component={SelectInputPage} />
      <Route path={`${match.url}/box`} component={BoxPage} />
      <Route path={`${match.url}/popover`} component={PopOverPage} />
      <Route path={`${match.url}/sociallinks`} component={SocialLinksPage} />
      <Route path={`${match.url}/inputs`} component={InputsPage} />
      <Route path={`${match.url}/icons`} component={IconsPage} />
      <Route path={`${match.url}/layouts`} component={LayoutPage} />
      <Route path={`${match.url}/list`} component={ListPage} />
      <Route path={`${match.url}/table`} component={TablePage} />
      <Route path={`${match.url}/switch`} component={SwitchPage} />
      <Route path={`${match.url}/alert`} component={AlertPage} />
      <Route path={`${match.url}/autocomplete`} component={AutoCompletePage} />
      <Route path={`${match.url}/loader`} component={LoaderPage} />
      <Route path={`${match.url}/img`} component={ImgPage} />
      <Route path={`${match.url}/menu`} component={MenuPage} />
      <Route path={`${match.url}/internal`} component={InternalPage} />
      <Route path={`${match.url}/badge`} component={BadgePage} />
      <Route path={`${match.url}/indicator`} component={IndicatorPage} />
      <Route path={`${match.url}/dashboard`} component={DashboardPage} />
      <Route path={`${match.url}/stepper`} component={StepperPage} />
      <Route path={`${match.url}/DialogDropDown`} component={DialogDropDownPage} />
      <Route path={`${match.url}/BreadCrumbs`} component={BreadCrumbsPage} />
      <Route path={`${match.url}/radio`} component={RadioPage} />
      <Route path={`${match.url}/classic`} component={ClassicPage} />
      <Route path={`${match.url}/datagrid`} component={DataGridPage} />
      <Route path={`${match.url}/globalMenu`} component={GlobalMenuPage} />
      <Route path={`${match.url}/widget`} component={WidgetPage} />
      <Route path={`${match.url}/personalizedmenu`} component={PesonalizedMenuPage} />
      <Route path={`${match.url}/Panel`} component={PanbelPage} />
      <Route path={`${match.url}/Gallery`} component={GalleryPage} />
      <Route path={`${match.url}/Carrousel`} component={CarrouselPage} />
      <Route path={`${match.url}/Tile`} component={TilePage} />
      <Route path={`${match.url}/motion`} component={MotionPage} />
      <Route path={`${match.url}/compactslide`} component={CompactSlidePage} />
    </Switch>
  </ComponentShell>
);

export default ComponentRoutes;
