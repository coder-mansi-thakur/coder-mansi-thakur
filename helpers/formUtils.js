export const validate = (form =[], values) => {
  const errors = {};

  form.forEach((fieldConfig) => {

    const { fieldName, required, regex, regexMessage, maxCharacter, minCharacter,  } = fieldConfig;

    if (required && !values[fieldName]) {
      errors[fieldName] = 'required';
    } else if (regex && !regex.test(values[fieldName])) {
      errors[fieldName] = regexMessage || '';
    }else if(maxCharacter && values[fieldName].length > maxCharacter){
      errors[fieldName] = `${fieldName} have more than ${maxCharacter}`
    }else if(minCharacter && values[fieldName].length < minCharacter){
      errors[fieldName] = `${fieldName} have less than ${minCharacter}`
    }
  })

  return errors;
}