import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import GPTable from './GPTable';

export default function GPCard({ patient, active, ...props }) {
  return (
    <Card initiallyExpanded={active} {...props}>
      <CardTitle showExpandableButton={active} subtitle="General Practitioner Details" />
      <CardText expandable={active}>
        <GPTable patient={patient} />
      </CardText>
    </Card>
  );
}

GPCard.propTypes = {
  patient: PropTypes.object.isRequired,
  active: PropTypes.bool,
};
