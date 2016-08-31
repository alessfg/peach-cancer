import React, { PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router';
import PatientCard from '../common/patientDetails/PatientCard';

export default function PatientDialog({ patient, open, onTouchTap }) {
  const styles = PatientDialog.styles;
  return (
    <Dialog
      autoScrollBodyContent
      modal={false}
      open={open}
      actions={
        <div>
          <FlatButton
            label="Go to patient profile"
            className={css(styles.button)}
            containerElement={<Link to={`/patient/${patient.id}`} />}
          />
          <FlatButton
            label="Close"
            className={css(styles.button)}
            onTouchTap={onTouchTap}
          />
        </div>
      }
    >
      <PatientCard patient={patient} />
    </Dialog>
  );
}

PatientDialog.styles = StyleSheet.create({
  button: {
    verticalAlign: 'middle',
  },
});

PatientDialog.propTypes = {
  patient: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onTouchTap: PropTypes.func.isRequired,
};
