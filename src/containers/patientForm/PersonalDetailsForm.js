import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'redux-form-material-ui/lib/TextField';
import SelectField from 'redux-form-material-ui/lib/SelectField';
import DatePicker from 'redux-form-material-ui/lib/DatePicker';
import MenuItem from 'material-ui/MenuItem';
import validate from './validate';

function PersonalDetailsForm({ handleSubmit, stepper }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-xs-12 col-md-4">
          <Field
            component={TextField}
            floatingLabelText="Nhs Number"
            fullWidth
            hintText="Nhs Number"
            name="nhsNumber"
          />
        </div>
        <div className="col-xs-12 col-md-4">
          <Field
            component={TextField}
            floatingLabelText="Patient Name"
            fullWidth
            hintText="Patient Name"
            name="name"
          />
        </div>
        <div className="col-xs-12 col-md-4">
          <Field
            component={DatePicker}
            defaultValue={null}
            fullWidth
            hintText="Patient Date of Birth"
            name="birthdate"
            textFieldStyle={{ height: '72px' }}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-4">
          <Field
            component={TextField}
            floatingLabelText="Patient Email"
            fullWidth
            hintText="Patient Email"
            name="email"
          />
        </div>
        <div className="col-xs-12 col-md-4">
          <Field
            component={TextField}
            floatingLabelText="Patient Phone Number"
            fullWidth
            hintText="Patient Phone Number"
            name="homePhone"
          />
        </div>
        <div className="col-xs-12 col-md-4">
          <Field
            component={TextField}
            floatingLabelText="Patient Work Phone Number"
            fullWidth
            hintText="Patient Work Phone Number"
            name="workPhone"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <Field
            component={TextField}
            floatingLabelText="Patient Address"
            fullWidth
            hintText="Patient Address"
            name="address"
          />
        </div>
        <div className="col-xs-12 col-md-6">
          <Field
            component={TextField}
            floatingLabelText="Patient Postcode"
            fullWidth
            hintText="Patient Postcode"
            name="postcode"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <Field
            component={SelectField}
            floatingLabelText="Patient Preferred Contact Method"
            fullWidth
            hintText="Patient Preferred Contact Method"
            name="prefContactMethod"
          >
            <MenuItem value="Email" primaryText="Email" />
            <MenuItem value="Letter" primaryText="Letter" />
            <MenuItem value="Phone" primaryText="Phone" />
          </Field>
        </div>
        <div className="col-xs-12 col-md-6">
          <Field
            name="gender"
            component={SelectField}
            fullWidth
            hintText="Patient Gender"
            floatingLabelText="Patient Gender"
          >
            <MenuItem value="Male" primaryText="Male" />
            <MenuItem value="Female" primaryText="Female" />
          </Field>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <Field
            component={SelectField}
            floatingLabelText="Patient Ethnicity"
            fullWidth
            hintText="Patient Ethnicity"
            name="ethnicity"
          >
            <MenuItem value="White" primaryText="White" />
            <MenuItem value="Latin" primaryText="Latin" />
            <MenuItem value="Black" primaryText="Black" />
          </Field>
        </div>
        <div className="col-xs-12 col-md-6">
          <Field
            component={SelectField}
            floatingLabelText="Patient Status"
            fullWidth
            hintText="Patient Status"
            name="maritalStatus"
          >
            <MenuItem value="Married" primaryText="Married" />
            <MenuItem value="Single" primaryText="Single" />
          </Field>
        </div>
        <div className="col-xs-12">
          {stepper}
        </div>
      </div>
    </form>
  );
}

PersonalDetailsForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  stepper: PropTypes.element.isRequired,
};

export default reduxForm({
  form: 'createPatient',
  destroyOnUnmount: false,
  validate,
})(PersonalDetailsForm);
