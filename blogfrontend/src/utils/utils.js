export const userNameValidation = (value) => {
  return value.length <= 3;
};
export const isEmailValidation = (value) => {
  const validEmail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !validEmail.test(value);
};

export const isPasswordValidation = (value) => {
  return value.length < 6;
};

export const checkConfirmation = (password, cpassword) => {
  return password === cpassword;
};
