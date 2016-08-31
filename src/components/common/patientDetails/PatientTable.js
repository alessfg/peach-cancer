import React, { PropTypes } from 'react';
import { Table, TableBody } from 'material-ui/Table';
import PatientTableRow from './PatientTableRow';
import { formatUTCDate } from '../../../utils/stringFormatter';

export default function PatientTable({ patient }) {
  const patientObject = {
    email: patient.email,
    address: patient.address,
    postcode: patient.postcode,
    dateOfBirth: formatUTCDate(patient.birthdate),
    homePhone: patient.homePhone,
    workPhone: patient.workPhone,
    contactMethod: patient.prefContactMethod,
    gender: patient.gender,
    ethnicity: patient.ethnicity,
    maritalStatus: patient.maritalStatus,
  };
  return (
    <Table selectable={false}>
      <TableBody displayRowCheckbox={false}>
        {Object.keys(patientObject).map(key =>
          <PatientTableRow key={key} description={key} value={patientObject[key]} />
        )}
      </TableBody>
    </Table>
  );
}

PatientTable.propTypes = {
  patient: PropTypes.object.isRequired,
};
