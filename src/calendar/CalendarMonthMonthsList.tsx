import css from './CalendarMonth.module.css'
import { useCalendarMonth } from './CalendarMonth'

export const CalendarMonthMonthsList = () => {
  const { state, dispatch } = useCalendarMonth()
  return (
    <ul className={css.calendarMonths}>
      {state.monthNamesShort.map((month, index) => <li role="button" className={css.monthShort} key={month.toString()}
        onClick={() => dispatch({ type: 'CHANGE_MONTH', payload: index })}
      >
        {month}
      </li>)}
    </ul>
  )
}

