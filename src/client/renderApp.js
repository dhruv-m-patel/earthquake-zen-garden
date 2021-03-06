import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from '../common/router';
import ReduxStateDecorator from './redux/StateDecorator';

export default function renderApp() {
  const supportsHistory = 'pushState' in window.history;
  const preloadedState = window.__PRELOADED_STATE__;
  const stateData = document.getElementById('stateData');
  if (stateData) {
    document.head.removeChild(stateData);
  }
  delete window.__PRELOADED_STATE__;

  ReactDOM.hydrate(
    <BrowserRouter forceRefresh={!supportsHistory}>
      <ReduxStateDecorator initialState={preloadedState}>
        <Router />
      </ReduxStateDecorator>
    </BrowserRouter>,
    document.getElementById('root')
  );
}
