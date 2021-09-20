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

export const getYears = () => {
  var current = new Date().getFullYear() - 17;
  var years = [];
  for (var i = 0; i < 60; i++) {
    years.push(current - i);
  }
  return years;
};
