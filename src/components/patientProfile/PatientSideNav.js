import React, { PropTypes } from 'react';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import { StyleSheet, css } from 'aphrodite';
import PatientHeader from '../common/patientDetails/PatientHeader';

export default function PatientSideNav({ patient }) {
  const styles = PatientSideNav.styles;
  return (
    <Paper zDepth={0} className={css(styles.paper)}>
      <PatientHeader patient={patient} zDepth={0} className={css(styles.header)} />
      <List>
        <Divider className={css(styles.divider)} />
        <ListItem
          containerElement={<Link to={`/patient/${patient.id}/demographics`} />}
          primaryText="Demographics"
        />
        <Divider className={css(styles.divider)} />
        <ListItem
          containerElement={<Link to={`/patient/${patient.id}/referrals`} />}
          primaryText="Referrals"
        />
        <Divider className={css(styles.divider)} />
        <ListItem
          containerElement={<Link to={`/patient/${patient.id}/history`} />}
          primaryText="History"
        />
        <Divider className={css(styles.divider)} />
        <ListItem
          containerElement={<Link to={`/patient/${patient.id}/notes`} />}
          primaryText="Notes"
        />
        <Divider className={css(styles.divider)} />
      </List>
    </Paper>
  );
}

PatientSideNav.propTypes = {
  patient: PropTypes.object.isRequired,
};

PatientSideNav.styles = StyleSheet.create({
  divider: {
    backgroundColor: 'black',
  },
  header: {
    backgroundColor: '#FFE0B2',
  },
  paper: {
    backgroundColor: '#FFE0B2',
  },
});
