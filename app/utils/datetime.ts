import { BIRTH_DATE, CAREER_START_DATE } from './constants';

export function getMyAge() {
  const today = new Date();

  const yearDifference = today.getFullYear() - BIRTH_DATE.getFullYear();
  const monthDifference = today.getMonth() - BIRTH_DATE.getMonth();
  const dayDifference = today.getDate() - BIRTH_DATE.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    return yearDifference - 1;
  } else {
    return yearDifference;
  }
}

export function getMyWorkExperience() {
  const today = new Date();

  let yearDifference = today.getFullYear() - CAREER_START_DATE.getFullYear();
  let monthDifference = today.getMonth() - CAREER_START_DATE.getMonth();
  const dayDifference = today.getDate() - CAREER_START_DATE.getDate();

  if (dayDifference < 0) {
    monthDifference -= 1;
  }

  if (monthDifference < 0) {
    yearDifference -= 1;
    monthDifference += 12;
  }

  return { years: yearDifference, months: monthDifference };
}

