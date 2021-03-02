import dayjs, { WeekdayNames } from "dayjs";
import localeData from "dayjs/plugin/localeData";
import weekday from "dayjs/plugin/weekday";

import enLocale from "dayjs/locale/en";
import itLocale from "dayjs/locale/it";

import { CalendarDay } from "./types";

dayjs.locale(enLocale);
dayjs.locale(itLocale);

dayjs.extend(localeData);
dayjs.extend(weekday);

export const range = (n1: number, n2?: number) => {
  const result = [];
  let first = !n2 ? 0 : n1;
  let last = n2;

  if (!last) {
    last = n1;
  }

  while (first < last) {
    result.push(first);
    first += 1;
  }
  return result;
};

export const getWeekDaysShort = (locale: string): WeekdayNames[] => {
  dayjs.locale(locale);
  return range(7).map((v) => dayjs().localeData().weekdaysShort(dayjs().weekday(v)));
};

export const getWeekDays = (locale: string): WeekdayNames[] => {
  dayjs.locale(locale);
  return range(7).map((v) => dayjs().localeData().weekdays(dayjs().weekday(v)));
};

export const getMonthShort = (locale: string) => {
  dayjs.locale(locale);
  return range(0, 12).map((v) => dayjs().localeData().monthsShort(dayjs().month(v)));
};

const getMonths = (locale: string) => {
  dayjs.locale(locale);
  return dayjs().localeData().months();
};

export const getMonthName = (month: number, locale: string): string => {
  const months = getMonths(locale);
  return months[month];
};

function getNumberOfDaysInMonth(year: number, month: number) {
  return dayjs(`${year}-${month}-01`).daysInMonth();
}

function createDaysForCurrentMonth(year: number, month: number) {
  const today = dayjs(new Date(Date.now())).format("YYYY-MM-DD");
  return [...Array(getNumberOfDaysInMonth(year, month))].map((day, index) => {
    let indexDate = dayjs(`${year}-${month}-${index + 1}`).format("YYYY-MM-DD");
    return {
      date: indexDate,
      dayOfMonth: index + 1,
      isCurrentMonth: true,
      isToday: today === indexDate,
    };
  });
}

function createDaysForPreviousMonth(year: number, month: number, firstDayCurrentMonth: string) {
  const firstDayOfTheMonthWeekday = getWeekday(firstDayCurrentMonth);

  const previousMonth = dayjs(`${year}-${month}-01`).subtract(1, "month");

  const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday;

  const previousMonthLastMondayDayOfMonth = dayjs(firstDayCurrentMonth)
    .subtract(visibleNumberOfDaysFromPreviousMonth, "day")
    .date();

  return [...Array(visibleNumberOfDaysFromPreviousMonth)].map((day, index) => {
    return {
      date: dayjs(
        `${previousMonth.year()}-${previousMonth.month() + 1}-${previousMonthLastMondayDayOfMonth + index}`
      ).format("YYYY-MM-DD"),
      dayOfMonth: previousMonthLastMondayDayOfMonth + index,
      isCurrentMonth: false,
      isToday: false,
    };
  });
}

function createDaysForNextMonth(year: number, month: number, currentMonthDays: number) {
  const lastDayOfTheMonthWeekday = getWeekday(`${year}-${month}-${currentMonthDays}`) + 1;

  const nextMonth = dayjs(`${year}-${month}-01`).add(1, "month");

  const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday
    ? 7 - lastDayOfTheMonthWeekday
    : lastDayOfTheMonthWeekday;

  return [...Array(visibleNumberOfDaysFromNextMonth)].map((day, index) => {
    return {
      date: dayjs(`${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`).format("YYYY-MM-DD"),
      dayOfMonth: index + 1,
      isCurrentMonth: false,
      isToday: false,
    };
  });
}

export function generateDays(currentDate: Date): CalendarDay[] {
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1;

  let currentMonthDays = createDaysForCurrentMonth(year, month);
  let firstDayCurrentMonth = currentMonthDays[0].date;
  let previousMonthDays = createDaysForPreviousMonth(year, month, firstDayCurrentMonth);
  let nextMonthDays = createDaysForNextMonth(year, month, currentMonthDays.length);

  return [...previousMonthDays, ...currentMonthDays, ...nextMonthDays];
}

function getWeekday(date: string) {
  return dayjs(date).weekday();
}
