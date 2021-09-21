// is used to validate email and password
//return true if valid

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

// Return true if year is leap year
function isLeap(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Returns true if given date is valid or not
export const checkDate = (d, m, y) => {
  // Handle February month
  // with leap year
  if (m === 2) {
    if (isLeap(y)) {
      return d <= 29;
    } else {
      return d <= 28;
    }
  }

  // Months of April, June,
  // Sept and Nov must have
  // number of days less than
  // or equal to 30.
  if (m === 4 || m === 6 || m === 9 || m === 11) return d <= 30;

  return true;
};
