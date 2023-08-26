export const validate = (form =[], values) => {
  const errors = {};

  form.forEach((fieldConfig) => {

    const { fieldName, required, regex, regexMessage, maxCharacter, minCharacter } = fieldConfig;

    if (required && !values[fieldName]) {
      errors[fieldName] = 'required';
    } else if (regex && !regex.test(values[fieldName])) {
      errors[fieldName] = regexMessage || '';
    }
  })

  return errors;
}