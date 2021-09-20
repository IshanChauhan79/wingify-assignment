export const validateInput = (value, type) => {
  if (type === "email") {
    let regex =
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let emailValid = regex.test(value);
    return emailValid;
  }
  if (type === "password") {
    var regex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let passValid = regex.test(value);
    return passValid;
  }
};
