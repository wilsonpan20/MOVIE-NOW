import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import ListEspisodes from './pages/ListEspisodes';
import Watch from './pages/Watch';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/list-episodes" component={ListEspisodes} />
      <Route path="/watch" component={Watch} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
