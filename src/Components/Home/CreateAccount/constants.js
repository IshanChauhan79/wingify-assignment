// list of months
export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// return the index of specific month
export const getMonthIndex = (value) => {
  return MONTHS.findIndex((el) => value === el) + 1;
};

// return the list of last 60 year starting form 17 year ago
export const getYears = () => {
  var current = new Date().getFullYear() - 17;
  var years = [];
  for (var i = 0; i < 60; i++) {
    years.push(current - i);
  }
  return years;
};
