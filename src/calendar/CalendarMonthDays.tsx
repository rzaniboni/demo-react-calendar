import { useCalendarMonth } from './CalendarMonth'
import css from './CalendarMonth.module.css'

export const CalendarMonthDays = () => {
  const { state: { days }, selectDate } = useCalendarMonth()

  return (
    <ul className={css.calendar}>
      {days.map(day =>
        <li className={`${css.day} ${day.isCurrentMonth ? css.currentMonthDay : null} ${day.isToday ? css.today : null}`}
          key={day.date} onClick={() => { return selectDate ? selectDate(day.date) : undefined }} >{day.dayOfMonth}</li>)
      }
    </ul >

  )
}

