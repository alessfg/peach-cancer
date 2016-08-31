import React, { PropTypes } from 'react';
import { Card, CardHeader } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Person from 'material-ui/svg-icons/social/person';

export default function PatientHeader({ patient, ...props }) {
  return (
    <Card {...props}>
      <CardHeader
        avatar={<Avatar icon={<Person />} />}
        title={patient.name}
        subtitle={patient.nhsNumber}
      />
    </Card>
  );
}

PatientHeader.propTypes = {
  patient: PropTypes.object.isRequired,
};
