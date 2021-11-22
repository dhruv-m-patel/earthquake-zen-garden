import { loadableReady } from '@loadable/component';
import renderApp from './renderApp';

function render() {
  renderApp();

  if (module.hot) {
    module.hot.accept('./renderApp', () => {
      const renderApp = require('./renderApp').default;
      renderApp();
    });
  }
}

loadableReady(() => {
  render();
});
