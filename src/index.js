/* eslint-disable */
// Polyfill to support new ES6 functions
import 'babel-polyfill';
// React
import React from 'react';
// React DOM renderer
import ReactDOM from 'react-dom';
// Record tap events
import injectTapEventPlugin from 'react-tap-event-plugin';
// Container to enable hot reloading
import { AppContainer } from 'react-hot-loader';
// React router browser history for use with react hot loader
import { browserHistory } from 'react-router';
// Allows synchronising nagivation events with the store
import { syncHistoryWithStore } from 'react-router-redux';
// Store configuration
import configureStore from './store/configureStore';
// Root application manager
import Root from './containers/root/Root';
import { loadPatients } from './actions/patientActions';
import './styles/styles.css';
// Inject tap event plugin
injectTapEventPlugin();
// Create store
const store = configureStore();
// Create enhanced history that synchronises navigation events with store
const history = syncHistoryWithStore(browserHistory, store);

store.dispatch(loadPatients());
// Render hot reloading app container
ReactDOM.render(
  <AppContainer style={{height:'100%'}}>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

// Rerender components if a change is detected
if (module.hot) {
  module.hot.accept('./containers/root/Root', () => {
    // eslint-disable-next-line global-require, import/newline-after-import
    const NewRoot = require('./containers/root/Root').default;
    ReactDOM.render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
    document.getElementById('root')
    );
  });
}
