import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import PatientTable from './PatientTable';

export default function PatientCard({ patient, active, ...props }) {
  return (
    <Card initiallyExpanded={active} {...props}>
      <CardTitle showExpandableButton={active} subtitle="Personal Details" />}
      <CardText expandable={active}>
        <PatientTable patient={patient} />
      </CardText>
    </Card>
  );
}

PatientCard.propTypes = {
  patient: PropTypes.object.isRequired,
  active: PropTypes.bool,
};
