import React from 'react'
import css from './CalendarMonth.module.css'
import { CalendarState, CalendarAction, calendarReducer, getInitialState } from './calendarReducer'

interface CalendarContext {
  state: CalendarState;
  selectDate?: (date: string) => void;
  dispatch: React.Dispatch<CalendarAction>
}

const CalendarMonthContext = React.createContext<CalendarContext | undefined>(undefined)

export function useCalendarMonth() {
  const context = React.useContext(CalendarMonthContext)
  if (context === undefined) {
    throw new Error('useCalendar must be used within a CalendarMonthProvider')
  }
  return context
}

export const CalendarMonth: React.FC<{ locale?: string, day?: Date, selectDate?: (date: string) => void }> = ({ locale = 'en', day, selectDate, children }) => {

  const initialDay = day || new Date(Date.now())
  const initialState = getInitialState(locale, initialDay)

  const [state, dispatch] = React.useReducer(calendarReducer, initialState)

  return (<CalendarMonthContext.Provider value={{ state, dispatch, selectDate }}>
    <div className={css.calendarWrapper}>{children}</div>
  </CalendarMonthContext.Provider>)

}
