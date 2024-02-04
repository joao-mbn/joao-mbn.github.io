export function getMyAge() {
  const today = new Date();
  const birthDate = new Date(1997, 1, 17);

  const yearDifference = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    return yearDifference - 1;
  } else {
    return yearDifference;
  }
}

export function getMyWorkExperience() {
  const today = new Date();
  const internshipStartDate = new Date(2021, 4, 10);

  const yearDifference = today.getFullYear() - internshipStartDate.getFullYear();
  const monthDifference = today.getMonth() - internshipStartDate.getMonth();
  const dayDifference = today.getDate() - internshipStartDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    const monthsInPreviousYear = 12;
    return { years: yearDifference - 1, months: monthsInPreviousYear + monthDifference };
  } else {
    return { years: yearDifference, months: monthDifference };
  }
}
