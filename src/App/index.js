import React from 'react';
import { Provider } from 'react-redux';
import store from 'Root/store';
import Components from 'Root/components';

export default () => (
  <Provider store={store}>
    <Components />
  </Provider>
);
