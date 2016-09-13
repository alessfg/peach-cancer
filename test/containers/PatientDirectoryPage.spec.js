// Test runner
import test from 'ava';
// React
import React from 'react';
// React wrapper
import { shallow, mount } from 'enzyme';
// Directory component
import { PatientDirectoryPage } from '../../src/containers/patientDirectory/PatientDirectoryPage';

import storedPatients from '../../src/api/storedPatients';

import PatientToolbar from '../../src/components/patientDirectory/PatientToolbar';

import PatientList from '../../src/components/patientDirectory/PatientList';

const props = {
  patients: storedPatients,
  loading: false,
};

test('is not empty', t => {
  const wrapper = shallow(<PatientDirectoryPage {...props} />);
  t.true(!wrapper.isEmpty());
});

test('has only one div', t => {
  const wrapper = shallow(<PatientDirectoryPage {...props} />);
  t.is(wrapper.find('div').length, 1);
});
