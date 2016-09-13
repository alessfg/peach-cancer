import uuid from 'node-uuid';
import delay from './delay';
import patients from './storedPatients';

export default class PatientApi {

  static getAllPatients() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], patients));
      }, delay);
    });
  }

  static savePatient(patient) {
    const newPatient = Object.assign({}, patient);
    return new Promise((resolve) => {
      setTimeout(() => {
        newPatient.id = uuid.v4();
        patients.push(newPatient);
        resolve(newPatient);
      }, delay);
    });
  }

}
