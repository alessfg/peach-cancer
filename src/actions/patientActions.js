/* eslint-disable */
import * as types from '../constants/actionTypes';
import patientApi from '../api/mockPatientApi';

export function loadPatients() {
  return {
    type: types.LOAD_PATIENTS,
  }
}

export function loadPatientsSuccess(patients) {
  return {
    type: types.LOAD_PATIENTS_SUCCESS,
    patients,
  }
}

export function createPatient(patient) {
  return {
    type: types.CREATE_PATIENT,
    patient
  }
}

export function createPatientSuccess(patient) {
  return {
    type: types.CREATE_PATIENT_SUCCESS,
    patient
  }
}
