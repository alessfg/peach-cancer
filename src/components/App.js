// React and React proptypes
import React, { PropTypes } from 'react';
import Header from './header/Header';

// Application wrapper component
export default function App(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};
