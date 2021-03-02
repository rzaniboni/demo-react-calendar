import css from './CalendarMonth.module.css'
import { useCalendarMonth } from './CalendarMonth'

export const CalendarMonthWeekdays = () => {
  const { state } = useCalendarMonth()
  return (
    <ul className={css.calendar}>
      {state.weekDaysShort.map(day => <li className={css.weekDay} key={day.toString()}>{day}</li>)}
    </ul>
  )
}
