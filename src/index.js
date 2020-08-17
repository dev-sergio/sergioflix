import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import StoreProvider from './components/Store/Provider';
import RoutesPrivate from './components/Routes/Private/Private';
import Home from './pages/Home';
import Video from './pages/cadastro/Video/index';
import Categoria from './pages/cadastro/Categoria/index';
import NotFound from './pages/erros/NotFound/index';
import Login from './pages/Login/Login';

ReactDOM.render(
  <BrowserRouter>
    <StoreProvider>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <RoutesPrivate path="/cadastro/video" component={Video} exact />
        <RoutesPrivate path="/cadastro/categoria" component={Categoria} exact />
        <Route component={NotFound} />
      </Switch>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
