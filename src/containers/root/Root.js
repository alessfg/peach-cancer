// React and React proptypes
import React, { PropTypes } from 'react';
// Theme for material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Connects react components to redux store
import { Provider } from 'react-redux';
// Allows creation of routes within react app
import { Router } from 'react-router';
// Defined routes
import routes from '../../routes/routes';

// Root application manager
export default function Root(props) {
  const { store, history } = props;
  return (
    <MuiThemeProvider>
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    </MuiThemeProvider>
  );
}

// Check Root proptype validation
Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
