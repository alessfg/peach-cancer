/* eslint-disable */
import React, { PropTypes } from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import { StyleSheet, css } from 'aphrodite';
import Dialog from 'material-ui/Dialog';
import { Link } from 'react-router';
import PatientDialog from './PatientDialog';
import { formatUTCDate } from '../../utils/stringFormatter';

export default class PatientTableRow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dialog: false,
    };
    this.handleTouchTap = this.handleTouchTap.bind(this);
  }

  handleTouchTap() {
    this.setState({
      dialog: !this.state.dialog,
    });
  }

  render() {
    const styles = PatientTableRow.styles;
    const { patient, ...other } = this.props;
    return (
      <TableRow {...other}>
        {other.children}
        <TableRowColumn>{patient.name}</TableRowColumn>
        <TableRowColumn>{formatUTCDate(patient.birthdate)}</TableRowColumn>
        <TableRowColumn>{patient.address}</TableRowColumn>
        <TableRowColumn>{patient.email}</TableRowColumn>
        <TableRowColumn>{patient.workPhone}</TableRowColumn>
        <TableRowColumn>
          <FlatButton
            label="VIEW"
            className={css(styles.button)}
            onTouchTap={this.handleTouchTap}
          />
          <PatientDialog
            open={this.state.dialog}
            patient={patient}
            onTouchTap={this.handleTouchTap}
          />
        </TableRowColumn>
      </TableRow>
    );
  }

}

PatientTableRow.styles = StyleSheet.create({
  button: {
    verticalAlign: 'middle',
  },
});

PatientTableRow.propTypes = {
  patient: PropTypes.object.isRequired,
};
