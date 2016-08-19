import React from 'react';
import { IndexLink } from 'react-router';
import logo from '../images/peach-cancer.png';

export default function Logo() {
  return (
    <IndexLink to="/" activeClassName="active">
      <img src={logo} alt="Peach Cancer" />
    </IndexLink>
  );
}
