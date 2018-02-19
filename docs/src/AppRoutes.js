import React from 'react';
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

const AppRoutes = (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Font" exact component={FontPage} />
    <Route path="/color" component={ColorPage} />
    <Route path="/button" component={ButtonPage} />
    <Route path="/box" component={BoxPage} />
    <Route path="/sociallinks" component={SocialLinksPage} />
    <Route path="/inputs" component={InputsPage} />
    <Route path="/icons" component={IconsPage} />
    <Route path="/layouts" component={LayoutPage} />
    <Route path="/list" component={ListPage} />
    <Route path="/table" component={TablePage} />
    <Route path="/switch" component={SwitchPage} />
    <Route path="/alert" component={AlertPage} />
    <Route path="/autocomplete" exact component={AutoCompletePage} />
    <Route path="/loader" component={LoaderPage} />
    <Route path="/img" component={ImgPage} />
    <Route path="/menu" component={MenuPage} />
    <Route path="/internal" exact component={InternalPage} />
    <Route path="/badge" component={BadgePage} />
    <Route path="/indicator" component={IndicatorPage} />
    <Route path="/dashboard" component={DashboardPage} />
    <Route path="/stepper" component={StepperPage} />
    <Route path="/DialogDropDown" component={DialogDropDownPage} />
    <Route path="/BreadCrumbs" component={BreadCrumbsPage} />
    <Route path="/radio" component={RadioPage} />
    <Route path="/classic" component={ClassicPage} />
    <Route path="/datagrid" component={DataGridPage} />
    <Route path="/globalMenu" component={GlobalMenuPage} />
    <Route path="/widget" component={WidgetPage} />
    <Route path="/personalizedmenu" component={PesonalizedMenuPage} />
    <Route path="/Panel" component={PanbelPage} />
    <Route path="/Gallery" component={GalleryPage} />
  </Switch>
);

export default AppRoutes;
