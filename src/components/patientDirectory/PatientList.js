import React, { PropTypes } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';
import PatientListRow from './PatientListRow';

export default function PatientList({ patients }) {
  return (
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Date of Birth</TableHeaderColumn>
          <TableHeaderColumn>Address</TableHeaderColumn>
          <TableHeaderColumn>Email</TableHeaderColumn>
          <TableHeaderColumn>Phone</TableHeaderColumn>
          <TableHeaderColumn />
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {patients.map(patient =>
          <PatientListRow key={patient.id} patient={patient} />
        )}
      </TableBody>
    </Table>
  );
}

PatientList.propTypes = {
  patients: PropTypes.array.isRequired,
};
