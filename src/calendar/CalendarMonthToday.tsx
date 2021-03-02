import { useCalendarMonth } from './CalendarMonth'
import css from './CalendarMonthTitle.module.css'

export const CalendarMonthToday = () => {
  const { dispatch } = useCalendarMonth()
  const date = new Date(Date.now());
  return (
    <button className={css.changeToday} onClick={() => dispatch({ type: 'CHANGE_DAY', payload: date })} >
      Today
    </button>
  )
}

