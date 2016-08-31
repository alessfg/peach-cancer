import React, { PropTypes } from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import { camelCaseToSentence } from '../../../utils/stringFormatter';

export default function NOKTableRow({ description, value, ...other }) {
  return (
    <TableRow {...other}>
      {other.children}
      <TableRowColumn><strong>{camelCaseToSentence(description)}:</strong></TableRowColumn>
      <TableRowColumn>{value}</TableRowColumn>
    </TableRow>
  );
}

NOKTableRow.propTypes = {
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
