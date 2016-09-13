import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import CircularProgress from 'material-ui/CircularProgress';
import PatientSideNav from '../../components/patientProfile/PatientSideNav';

function PatientProfilePage({ children, loading, patient }) {
  const styles = PatientProfilePage.styles;
  let component;
  if (loading) {
    component = <CircularProgress className={css(styles.loading)} />;
  } else {
    component = (
      <div className="row">
        <div className={`col-xs-12 col-md-2 ${css(styles.sidenav)}`}>
          <PatientSideNav
            patient={patient}
          />
        </div>
        <div className={`col-xs-12 col-md-10 ${css(styles.content)}`}>
          {children && React.cloneElement(children, {
            patient,
          })}
        </div>
      </div>
    );
  }
  return component;
}

PatientProfilePage.propTypes = {
  patient: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  children: PropTypes.element,
};

PatientProfilePage.styles = StyleSheet.create({
  loading: {
    margin: 'auto',
    width: '100%',
    height: 'calc(100vh - 56px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sidenav: {
    padding: '0',
    width: '100%',
    minHeight: 'calc(100vh - 56px)',
    height: 'calc(100% - 56px)',
    backgroundColor: '#FFE0B2',
  },
  content: {
    padding: '0',
    width: '100%',
  },
});

function getPatientById(patients, id) {
  const selectedPatient = patients.filter(patient => patient.id === id);
  if (selectedPatient.length) {
    return selectedPatient[0];
  }
  return null;
}

function mapStateToProps(state, ownProps) {
  const patientId = ownProps.params.id;
  let selectedPatient = {};
  if (patientId && state.patients.length > 0) {
    selectedPatient = getPatientById(state.patients, patientId);
  }
  return {
    loading: state.fetchInProgress > 0,
    patient: selectedPatient,
  };
}

export default connect(mapStateToProps)(PatientProfilePage);
