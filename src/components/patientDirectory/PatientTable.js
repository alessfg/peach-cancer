import React, { PropTypes } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';
import PatientTableRow from './PatientTableRow';

export default function PatientTable({ patients }) {
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
          <PatientTableRow key={patient.id} patient={patient} />
        )}
      </TableBody>
    </Table>
  );
}

PatientTable.propTypes = {
  patients: PropTypes.array.isRequired,
};
