import dayjs, { Dayjs, MonthNames, WeekdayNames } from "dayjs";
import { CalendarDay } from "./types";
import { getMonthName, getWeekDays, generateDays, getWeekDaysShort, getMonthShort } from "./dateUtils";


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
  | { type: "PREV_MONTH" }
  | { type: "NEXT_MONTH" };

const initialLocale = "it";
const initialDate = new Date("2021-04-02");

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
      break;
    case "CHANGE_DAY":
      return {
        ...state,
        day: action.payload,
        days: generateDays(action.payload),
        currentMonthName: getMonthName(state.day.getMonth(), state.locale),
        currentWeekDay: getWeekDays(state.locale)[dayjs(action.payload).weekday()].toString(),
        currentDayOrder: dayjs(action.payload).format("D"),
      };
      break;
    case "PREV_MONTH":
      const prevDay = state.currentDay.add(-1, "M");
      return {
        ...state,
        currentDay: prevDay,
        day: prevDay.toDate(),
        days: generateDays(prevDay.toDate()),
        currentMonthName: getMonthName(prevDay.month(), state.locale),
        currentWeekDay: getWeekDays(state.locale)[prevDay.weekday()].toString(),
        currentDayOrder: prevDay.format("D"),
      };
      break;
    case "NEXT_MONTH":
      const nextDay = state.currentDay.add(1, "M");
      return {
        ...state,
        currentDay: nextDay,
        day: nextDay.toDate(),
        days: generateDays(nextDay.toDate()),
        currentMonthName: getMonthName(nextDay.month(), state.locale),
        currentWeekDay: getWeekDays(state.locale)[nextDay.weekday()].toString(),
        currentDayOrder: nextDay.format("D"),
      };
      break;
  }
}

export { calendarReducer };
