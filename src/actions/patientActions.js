import * as types from '../constants/actionTypes';

export function loadPatients() {
  return {
    type: types.LOAD_PATIENTS,
  };
}

export function loadPatientsSuccess(patients) {
  return {
    type: types.LOAD_PATIENTS_SUCCESS,
    patients,
  };
}

export function loadPatientsFailure() {
  return {
    type: types.LOAD_PATIENTS_FAILURE,
  };
}

export function createPatient(patient) {
  return {
    type: types.CREATE_PATIENT,
    patient,
  };
}

export function createPatientSuccess(patient) {
  return {
    type: types.CREATE_PATIENT_SUCCESS,
    patient,
  };
}
export function createPatientFailure(patient) {
  return {
    type: types.CREATE_PATIENT_FAILURE,
    patient,
  };
}
