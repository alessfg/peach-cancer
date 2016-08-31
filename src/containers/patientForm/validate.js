export default function validate(values) {
  const errors = {};
  const requiredFields = [
    'nhsNumber',
    'name',
    'email',
    'birthdate',
    'address',
    'postcode',
    'homePhone',
    'workPhone',
    'prefContactMethod',
    'gender',
    'ethnicity',
    'maritalStatus',
    'gpName',
    'gpEmail',
    'gpAddress',
    'gpPostcode',
    'gpPhone',
    'nextOfKinName',
    'nextOfKinEmail',
    'nextOfKinAddress',
    'nextOfKinPostcode',
    'nextOfKinPhone',
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (values.gpEmail && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.gpEmail)) {
    errors.gpEmail = 'Invalid email address';
  }
  if (values.nextOfKinEmail && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.nextOfKinEmail)) {
    errors.nextOfKinEmail = 'Invalid email address';
  }
  return errors;
}
