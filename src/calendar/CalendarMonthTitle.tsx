import { useCalendarMonth } from './CalendarMonth';
import { GrPrevious, GrNext } from 'react-icons/gr';
import css from './CalendarMonthTitle.module.css'


export const CalendarMonthTitle: React.FC = ({ children }) => {
  const { state, dispatch } = useCalendarMonth()

  return (
    <div className={css.container}>
      <div className={css.leftContent}>
        {children}
        <button className={css.changeMonth} onClick={() => dispatch({ type: 'PREV_MONTH' })}><GrPrevious /></button>
        <button className={css.changeMonth} onClick={() => dispatch({ type: 'NEXT_MONTH' })}><GrNext /></button>
      </div>
      <div className={css.content}>
        <div className={css.itemDay}>{state.currentDayOrder}</div>
        <div className={css.item}>
          <div className={css.weekDay}>{state.currentWeekDay}</div>
          <div className={css.day}>{state.currentMonthName} {state.day.getFullYear()}</div>
        </div>
      </div>
    </div>
  )
}
