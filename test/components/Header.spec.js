// Test runner
import test from 'ava';
// React
import React from 'react';
// React wrapper
import { shallow } from 'enzyme';
// HomePage component
import Header from '../../src/components/header/Header';

import NavBar from '../../src/components/header/NavBar';
import SideNavBar from '../../src/components/header/SideNavBar';

test('renders correctly', t => {
  const wrapper = shallow(<Header />);
  t.true(!wrapper.isEmpty());
});

test('has only one div', t => {
  const wrapper = shallow(<Header />);
  t.is(wrapper.find('div').length, 1);
});
