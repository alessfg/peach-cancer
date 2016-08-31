import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import NOKTable from './NOKTable';

export default function NOKCard({ patient, active, ...props }) {
  return (
    <Card initiallyExpanded={active} {...props}>
      <CardTitle showExpandableButton={active} subtitle="Next Of Kin Details" />}
      <CardText expandable={active}>
        <NOKTable patient={patient} />
      </CardText>
    </Card>
  );
}

NOKCard.propTypes = {
  patient: PropTypes.object.isRequired,
  active: PropTypes.bool,
};
