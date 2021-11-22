import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';

export default function Router() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={loadable(() => import('./components/HomePage'))}
      />
      <Route
        exact
        path="/profile"
        component={loadable(() => import('./components/ProfilePage'))}
      />
      <Route
        exact
        path="/detail/:id"
        component={loadable(() => import('./components/DetailPage'))}
      />
      <Route component={loadable(() => import('./components/NotFound'))} />
    </Switch>
  );
}
