import React from 'react';
import { render } from 'react-dom';
import Loader from './components/Loader';

console.log('shit');

render(
  <Loader />,
  global.document.getElementById('main'),
);

if (module.hot) {
  module.hot.accept();

  module.hot.addStatusHandler((status) => {
    if (status === 'prepare') {
      console.clear();
    }
  });
}
