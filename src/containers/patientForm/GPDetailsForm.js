import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'redux-form-material-ui/lib/TextField';
import validate from './validate';

function GPDetailsForm({ handleSubmit, stepper }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-xs-12 col-md-4">
          <Field
            component={TextField}
            floatingLabelText="General Practicioner Name"
            fullWidth
            hintText="General Practicioner Name"
            name="gpName"
          />
        </div>
        <div className="col-xs-12 col-md-4">
          <Field
            component={TextField}
            floatingLabelText="General Practicioner Address"
            fullWidth
            hintText="General Practicioner Address"
            name="gpAddress"
          />
        </div>
        <div className="col-xs-12 col-md-4">
          <Field
            component={TextField}
            floatingLabelText="General Practicioner Postcode"
            fullWidth
            hintText="General Practicioner Postcode"
            name="gpPostcode"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <Field
            component={TextField}
            floatingLabelText="General Practicioner Email"
            fullWidth
            hintText="General Practicioner Email"
            name="gpEmail"
          />
        </div>
        <div className="col-xs-12 col-md-6">
          <Field
            component={TextField}
            floatingLabelText="General Practicioner Phone"
            fullWidth
            hintText="General Practicioner Phone"
            name="gpPhone"
          />
        </div>
        <div className="col-xs-12">
          {stepper}
        </div>
      </div>
    </form>
  );
}

GPDetailsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  stepper: PropTypes.element.isRequired,
};

export default reduxForm({
  form: 'createPatient',
  destroyOnUnmount: false,
  validate,
})(GPDetailsForm);
