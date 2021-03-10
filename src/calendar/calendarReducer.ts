import dayjs, { Dayjs, MonthNames, WeekdayNames } from "dayjs";
import { CalendarDay } from "./types";
import { getMonthName, getWeekDays, generateDays, getWeekDaysShort, getMonthShort, changeMonth } from "./dateUtils";

export interface CalendarState {
  day: Date;
  currentDay: Dayjs;
  currentDayOrder: string;
  currentMonthName: string;
  currentWeekDay: string;
  days: CalendarDay[];
  locale: string;
  weekDays: WeekdayNames[];
  weekDaysShort: WeekdayNames[];
  monthNamesShort: MonthNames[];
}

export type CalendarAction =
  | { type: "CHANGE_LOCALE"; payload: string }
  | { type: "CHANGE_DAY"; payload: Date }
  | { type: "CHANGE_MONTH"; payload: number }
  | { type: "PREV_MONTH" }
  | { type: "NEXT_MONTH" };

//const initialLocale = "it";
//const initialDate = new Date("2021-04-02");

export const getInitialState = (locale: string, day: Date): CalendarState => ({
  locale,
  day,
  currentDay: dayjs(day),
  currentDayOrder: dayjs(day).format("D"),
  currentMonthName: getMonthName(day.getMonth(), locale),
  currentWeekDay: getWeekDays(locale)[dayjs(day).weekday()].toString(),
  days: generateDays(day),
  weekDays: getWeekDays(locale),
  weekDaysShort: getWeekDaysShort(locale),
  monthNamesShort: getMonthShort(locale),
});

function generateDataFromMonth(day: Dayjs, locale: string) {
  return {
    currentDay: day,
    day: day.toDate(),
    days: generateDays(day.toDate()),
    currentMonthName: getMonthName(day.month(), locale),
    currentWeekDay: getWeekDays(locale)[day.weekday()].toString(),
    currentDayOrder: day.format("D"),
  };
}

function calendarReducer(state: CalendarState, action: CalendarAction): CalendarState {
  switch (action.type) {
    case "CHANGE_LOCALE":
      return {
        ...state,
        locale: action.payload,
        currentMonthName: getMonthName(state.day.getMonth(), action.payload),
        currentWeekDay: getWeekDays(action.payload)[dayjs(state.day).weekday()].toString(),
        weekDaysShort: getWeekDaysShort(action.payload),
        weekDays: getWeekDays(action.payload),
        monthNamesShort: getMonthShort(action.payload),
      };
    case "CHANGE_DAY":
      const changeDay = dayjs(action.payload);
      const changeDayData = generateDataFromMonth(changeDay, state.locale);
      return {
        ...state,
        ...changeDayData,
      };
    case "PREV_MONTH":
      const prevDay = state.currentDay.add(-1, "M");
      const prevMonthData = generateDataFromMonth(prevDay, state.locale);
      return {
        ...state,
        ...prevMonthData,
      };
    case "NEXT_MONTH":
      const nextDay = state.currentDay.add(1, "M");
      const nextMonthData = generateDataFromMonth(nextDay, state.locale);
      return {
        ...state,
        ...nextMonthData,
      };
    case "CHANGE_MONTH":
      const changeMonthDay = changeMonth(state.currentDay.toDate(), action.payload);
      const changeMonthData = generateDataFromMonth(changeMonthDay, state.locale);
      return {
        ...state,
        ...changeMonthData,
      };
  }
}

export { calendarReducer };
