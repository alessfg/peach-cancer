import React, { PropTypes } from 'react';
import { Table, TableBody } from 'material-ui/Table';
import NOKTableRow from './NOKTableRow';

export default function NOKTable({ patient }) {
  const nokObject = {
    name: patient.nextOfKinName,
    email: patient.nextOfKinEmail,
    address: patient.nextOfKinAddress,
    postcode: patient.nextOfKinPostcode,
    phone: patient.nextOfKinPhone,
  };
  return (
    <Table selectable={false}>
      <TableBody displayRowCheckbox={false}>
        {Object.keys(nokObject).map(key =>
          <NOKTableRow key={key} description={key} value={nokObject[key]} />
        )}
      </TableBody>
    </Table>
  );
}

NOKTable.propTypes = {
  patient: PropTypes.object.isRequired,
};
