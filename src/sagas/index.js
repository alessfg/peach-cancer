// Allows starting sagas in parallel
import { fork, call, put, take } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import PatientApi from '../api/mockPatientApi';
import * as patientActions from '../actions/patientActions';
import * as fetchStatusActions from '../actions/fetchStatusActions';
import * as types from '../constants/actionTypes';

function* getAllPatients() {
  try {
    yield put(fetchStatusActions.beginFetchRequest());
    const patients = yield call(PatientApi.getAllPatients);
    yield put(patientActions.loadPatientsSuccess(patients));
    yield put(fetchStatusActions.fetchRequestSuccess());
  } catch (error) {
    yield put(fetchStatusActions.fetchRequestFailure());
  }
}

function* watchGetAllPatients() {
  yield* takeEvery(types.LOAD_PATIENTS, getAllPatients);
}

function* createPatient(patient) {
  try {
    yield put(fetchStatusActions.beginFetchRequest());
    const newPatient = yield call(PatientApi.savePatient, patient);
    yield put(patientActions.createPatientSuccess(newPatient));
    yield put(fetchStatusActions.fetchRequestSuccess());
  } catch (error) {
    yield put(fetchStatusActions.fetchRequestError());
  }
}

function* watchCreatePatient() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { patient } = yield take(types.CREATE_PATIENT);
    yield call(createPatient, patient);
  }
}

// Export root saga
export default function* rootSaga() {
  yield [
    fork(watchGetAllPatients),
    fork(watchCreatePatient),
  ];
}
