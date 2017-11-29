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

const AppRoutes = (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Font" exact component={FontPage} />
    <Route path="/button" component={ButtonPage} />
    <Route path="/color" component={ColorPage} />
    <Route path="/box" component={BoxPage} />
    <Route path="/sociallinks" component={SocialLinksPage} />
    <Route path="/inputs" component={InputsPage} />
    <Route path="/icons" component={IconsPage} />
    <Route path="/layouts" component={LayoutPage} />
    <Route path="/table" component={TablePage} />
    <Route path="/switch" component={SwitchPage} />
    <Route path="/alert" component={AlertPage} />
    <Route path="/loader" component={LoaderPage} />
    <Route path="/img" component={ImgPage} />
    <Route path="/menu" component={MenuPage} />
  </Switch>
);

export default AppRoutes;
