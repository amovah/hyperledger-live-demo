import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import Loader from './components/Loader';
import App from './App';
import loadBlocks from './actions/blocks/load';
import polling from './actions/blocks/polling';
import './styles/index.less';

render(
  <Loader />,
  global.document.getElementById('main'),
);

(async () => {
  await loadBlocks();
  polling();

  render(
    <App />,
    global.document.getElementById('main'),
  );
})();

if (module.hot) {
  module.hot.accept();

  module.hot.addStatusHandler((status) => {
    if (status === 'prepare') {
      console.clear();
    }
  });
}
