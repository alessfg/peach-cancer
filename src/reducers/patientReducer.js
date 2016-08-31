/* eslint-disable */
import * as types from '../constants/actionTypes';

export default function patientReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_PATIENT_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.patient),
      ];
    case types.LOAD_PATIENTS_SUCCESS:
      return action.patients;
    default:
      return state;
  }
}
