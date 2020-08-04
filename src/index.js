import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/cadastro/Video/index';
import Categoria from './pages/cadastro/Categoria/index';
import NotFound from './pages/erros/NotFound/index';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={Video} exact />
      <Route path="/cadastro/categoria" component={Categoria} exact />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
