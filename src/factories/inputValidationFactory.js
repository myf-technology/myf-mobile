import isEmail from 'validator/lib/isEmail';
import isStrongPassword from 'validator/lib/isStrongPassword';

const email = (input) => {
  input.valid = isEmail(input.value);
  return input;
};

const password = (input) => {
  input.valid = isStrongPassword(input.value);
  return input;
};

const username = (input) => {
  let usernameValidation;

  if (
    input.value.length < 3 ||
    input.value.length > 15 ||
    input.value.includes(' ') ||
    RegExp(/[^a-zA-Z0-9 ]/).test(input.value)
  ) {
    usernameValidation = false;
  } else {
    usernameValidation = true;
  }

  input.valid = usernameValidation;
  return input;
};

const validations = { email, password, username };

const inputValidationFactory = (input) => {
  const validationType = validations[input.key];

  if (validationType && input.touched) {
    return validationType(input);
  }

  return input;
};

export default inputValidationFactory;
