import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import {init} from './init';

// Initialize all the app
init();
import { App } from './common/containers/App';

// App Component

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./common/containers/App', () => {
    const NextApp = require('./common/containers/App').default;
    render(NextApp);
  });
}
