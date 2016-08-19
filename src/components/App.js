// React and React proptypes
import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';

/* eslint-disable */
// Application wrapper component
export default function App(props) {
  const title = (props.location.pathname !== '/') ? props.location.pathname : 'HomePage';
  console.log(props);
  return (
    <MuiThemeProvider>
      <div>
        <Header title={title}/>
        {props.children}
      </div>
    </MuiThemeProvider>
  );
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};
