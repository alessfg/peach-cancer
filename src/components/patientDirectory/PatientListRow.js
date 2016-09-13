import React, { PropTypes } from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import { StyleSheet, css } from 'aphrodite';
import PatientDialog from './PatientDialog';
import { formatUTCDate } from '../../utils/stringFormatter';

export default class PatientListRow extends React.Component {

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
    const styles = PatientListRow.styles;
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

PatientListRow.styles = StyleSheet.create({
  button: {
    verticalAlign: 'middle',
  },
});

PatientListRow.propTypes = {
  patient: PropTypes.object.isRequired,
};
