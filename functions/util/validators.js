const isEmpty = (string) => {
  if (string.trim() === "") return true;
  else return false;
};

exports.validateLoginData = (data) => {
  let errors = {};

  if (isEmpty(data.email)) errors.email = "Email must not be empty";
  if (isEmpty(data.password)) errors.password = "Password must not be empty";

  return { errors, valid: Object.keys(errors).length === 0 ? true : false };
};

const isEmailValid = (email) => {
  const emailRegEx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(emailRegEx)) return true;
  else return false;
};

exports.validateSignUpData = (data) => {
  let errors = {};

  if (isEmpty(data.email)) {
    errors.email = "Email must not be empty";
  } else if (!isEmailValid(data.email)) {
    errors.email = "Email address is not valid";
  }

  if (isEmpty(data.firstName))
    errors.firstName = "First name must not be empty";
  if (isEmpty(data.lastName)) errors.lastName = "Last name must not be empty";
  if (isEmpty(data.phoneNumber))
    errors.phoneNumber = "Phone number must not be empty";
  if (isEmpty(data.country)) errors.country = "Country must not be empty";

  if (isEmpty(data.password)) errors.password = "Password must not be empty";
  if (data.password !== data.confirmPassword)
    errors.confirmPassword = "Passwords must match";

  if (isEmpty(data.username)) errors.username = "Username must not be empty";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};
