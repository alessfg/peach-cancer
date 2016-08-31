import React, { PropTypes } from 'react';
import { Table, TableBody } from 'material-ui/Table';
import GPTableRow from './GPTableRow';

export default function GPTable({ patient }) {
  const gpObject = {
    name: patient.gpName,
    email: patient.gpEmail,
    address: patient.gpAddress,
    postcode: patient.gpPostcode,
    phone: patient.gpPhone,
  };
  return (
    <Table selectable={false}>
      <TableBody displayRowCheckbox={false}>
        {Object.keys(gpObject).map(key =>
          <GPTableRow key={key} description={key} value={gpObject[key]} />
        )}
      </TableBody>
    </Table>
  );
}

GPTable.propTypes = {
  patient: PropTypes.object.isRequired,
};
