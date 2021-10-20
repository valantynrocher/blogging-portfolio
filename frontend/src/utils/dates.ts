import { OpeningHoursHalfDay } from "./types";

export const makeYearsArray = () => {
  const current = new Date().getFullYear();
  const max = current + 50;
  let years: number[] = [];
  for (let i = current; i <= max; i++) {
    years = [...years, i];
  }
  return years;
};

export const getJoursFeries = (year: number) => {
  var JourAn = new Date(year, 0, 1);
  var FeteTravail = new Date(year, 4, 1);
  var Victoire1945 = new Date(year, 4, 8);
  var FeteNationale = new Date(year, 6, 14);
  var Assomption = new Date(year, 7, 15);
  var Toussaint = new Date(year, 10, 1);
  var Armistice = new Date(year, 10, 11);
  var Noel = new Date(year, 11, 25);

  var G = year % 19;
  var C = Math.floor(year / 100);
  var H =
    (C - Math.floor(C / 4) - Math.floor((8 * C + 13) / 25) + 19 * G + 15) % 30;
  var I =
    H -
    Math.floor(H / 28) *
      (1 -
        Math.floor(H / 28) *
          Math.floor(29 / (H + 1)) *
          Math.floor((21 - G) / 11));
  var J = (year * 1 + Math.floor(year / 4) + I + 2 - C + Math.floor(C / 4)) % 7;
  var L = I - J;
  var MoisPaques = 3 + Math.floor((L + 40) / 44);
  var JourPaques = L + 28 - 31 * Math.floor(MoisPaques / 4);
  var LundiPaques = new Date(year, MoisPaques - 1, JourPaques + 1);
  var Ascension = new Date(year, MoisPaques - 1, JourPaques + 39);
  var LundiPentecote = new Date(year, MoisPaques - 1, JourPaques + 50);

  return new Array(
    JourAn,
    LundiPaques,
    FeteTravail,
    Victoire1945,
    Ascension,
    LundiPentecote,
    FeteNationale,
    Assomption,
    Toussaint,
    Armistice,
    Noel
  ).map((date) => date.toLocaleDateString());
};

export const getTodayDateValues = (today: Date) => {
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();
  return { year, month, day };
};

export const getOpeningHalfDayStartDate = (
  today: Date,
  values: OpeningHoursHalfDay
) => {
  const { year, month, day } = getTodayDateValues(today);

  return new Date(
    year,
    month,
    day,
    values.startHour,
    values.startMinutes
  ).getTime();
};

export const getOpeningHalfDayEndDate = (
  today: Date,
  values: OpeningHoursHalfDay
) => {
  const { year, month, day } = getTodayDateValues(today);
  return new Date(
    year,
    month,
    day,
    values.endMinutes === 0 ? values.endHour - 1 : values.endHour,
    values.endMinutes === 0 ? 59 : values.endMinutes,
    59,
    999
  ).getTime();
};
