import React, { PropTypes } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import PatientCard from '../common/patientDetails/PatientCard';
import GPCard from '../common/generalPractitionerDetails/GPCard';
import NOKCard from '../common/nextOfKinDetails/NOKCard';

export default function PatientDemographics({ patient }) {
  return (
    <div>
      <Tabs>
        <Tab label="Personal Details"><PatientCard patient={patient} active={false} /></Tab>
        <Tab label="General Practitioner Details"><GPCard patient={patient} /></Tab>
        <Tab label="Next Of Kin Details"><NOKCard patient={patient} /></Tab>
        <Tab label="View All">
          <div className="row" style={{ marginTop: '30px' }}>
            <div className="col-md-4">
              <PatientCard patient={patient} />
            </div>
            <div className="col-md-4">
              <NOKCard patient={patient} />
            </div>
            <div className="col-md-4">
              <GPCard patient={patient} />
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

PatientDemographics.propTypes = {
  patient: PropTypes.object.isRequired,
};
