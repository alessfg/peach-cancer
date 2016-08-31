// React
import React from 'react';
// Routes for react router
import { Route, IndexRoute, IndexRedirect } from 'react-router';
// App wrapper component
import App from '../components/App';
// HomePage component
import HomePage from '../components/home/HomePage';
// import Patients from '../components/Patients';
import PatientProfilePage from '../containers/patientProfile/PatientProfilePage';
// import PageNotFound from '../components/PageNotFound';
import PatientCreationPage from '../containers/patientForm/PatientCreationPage';
import PatientDirectoryPage from '../containers/patientDirectory/PatientDirectoryPage';
import PatientDemographics from '../components/patientProfile/PatientDemographics';
import PatientHistory from '../components/patientProfile/PatientHistory';
import PatientNotes from '../components/patientProfile/PatientNotes';
import PatientReferrals from '../components/patientProfile/PatientReferrals';

// Create the routes for the application
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="patients" component={PatientDirectoryPage} />
    <Route path="patients/create" component={PatientCreationPage} />
    <Route path="patient/:id" component={PatientProfilePage}>
      <IndexRedirect to="demographics" />
      <Route path="demographics" component={PatientDemographics} />
      <Route path="referrals" component={PatientReferrals} />
      <Route path="history" component={PatientHistory} />
      <Route path="notes" components={PatientNotes} />
    </Route>
    {/* <Route path="*" component={PageNotFound} /> */}
  </Route>
);
