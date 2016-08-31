/* eslint-disable */
import uuid from 'node-uuid';
import delay from './delay';
import patients from './storedPatients';


export default class PatientApi {

  static getAllPatients() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], patients));
      }, delay);
    });
  }

  static savePatient(patient) {
    patient = Object.assign({}, patient);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        patient.id = uuid.v4();
        patients.push(patient);
        resolve(patient);
      }, delay);
    });
  }

}
