import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'redux-form-material-ui/lib/TextField';
import validate from './validate';

function NOKDetailsForm({ handleSubmit, stepper }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-xs-12 col-md-4">
          <Field
            component={TextField}
            floatingLabelText="Next Of Kin Name"
            fullWidth
            hintText="Next Of Kin Name"
            name="nextOfKinName"
          />
        </div>
        <div className="col-xs-12 col-md-4">
          <Field
            component={TextField}
            floatingLabelText="Next Of Kin Address"
            fullWidth
            hintText="Next Of Kin Address"
            name="nextOfKinAddress"
          />
        </div>
        <div className="col-xs-12 col-md-4">
          <Field
            component={TextField}
            floatingLabelText="Next Of Kin Postcode"
            fullWidth
            hintText="Next Of Kin Postcode"
            name="nextOfKinPostcode"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <Field
            component={TextField}
            floatingLabelText="Next Of Kin Email"
            fullWidth
            hintText="Next Of Kin Email"
            name="nextOfKinEmail"
          />
        </div>
        <div className="col-xs-12 col-md-6">
          <Field
            component={TextField}
            floatingLabelText="Next Of Kin Phone"
            fullWidth
            hintText="Next Of Kin Phone"
            name="nextOfKinPhone"
          />
        </div>
        <div className="col-xs-12">
          {stepper}
        </div>
      </div>
    </form>
  );
}

NOKDetailsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  stepper: PropTypes.element.isRequired,
};

export default reduxForm({
  form: 'createPatient',
  destroyOnUnmount: false,
  validate,
})(NOKDetailsForm);
