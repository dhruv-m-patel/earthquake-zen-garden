import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

export default function ReduxStateDecorator({ initialState, children }) {
  const store = configureStore(initialState);

  return <Provider store={store}>{children}</Provider>;
}
