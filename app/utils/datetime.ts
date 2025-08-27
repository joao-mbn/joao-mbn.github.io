import { BIRTH_DATE, CAREER_START_DATE } from './constants';

export function getMyAge() {
  return getDateDifferenceInMonths(new Date(), BIRTH_DATE).years;
}

export function getMyWorkExperience() {
  return getDateDifferenceInMonths(new Date(), CAREER_START_DATE);
}

function getDateDifferenceInMonths(date1: Date, date2: Date) {
  let yearDifference = date1.getFullYear() - date2.getFullYear();
  let monthDifference = date1.getMonth() - date2.getMonth();
  const dayDifference = date1.getDate() - date2.getDate();

  if (dayDifference < 0) {
    monthDifference -= 1;
  }

  if (monthDifference < 0) {
    yearDifference -= 1;
    monthDifference += 12;
  }

  return { years: yearDifference, months: monthDifference };
}
