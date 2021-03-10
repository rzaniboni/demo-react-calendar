import React from 'react'
import css from './App.module.css'
import { CalendarMonth, CalendarMonthDays, CalendarMonthTitle, CalendarMonthToday, CalendarMonthWeekdays } from './calendar'
import { CalendarMonthMonthsList } from './calendar/CalendarMonthMonthsList'
import { FaGithub } from 'react-icons/fa';

function App() {
  const newDate = new Date(Date.now())
  const newDate2 = new Date('2020-07-01')

  const handleClick = (date: string) => {
    alert(`la data selezionata è: ${date}`)
  }

  return (
    <div className={css.container} >
      <div className={css.header}>
        <h2>Calendar compound component</h2>
        <a href="https://github.com/rzaniboni/demo-react-calendar"> <FaGithub /></a>
      </div>

      <div className={css.content}>
        <h1>Calendario</h1>
        <CalendarMonth locale={'it'}>
          <CalendarMonthTitle>
            <CalendarMonthToday />
          </CalendarMonthTitle>
          <CalendarMonthMonthsList />
          <CalendarMonthWeekdays />
          <CalendarMonthDays />
        </CalendarMonth>
        <br />
        <CalendarMonth locale={'en'}>
          <CalendarMonthTitle />
          <CalendarMonthWeekdays />
          <CalendarMonthDays />
        </CalendarMonth>
      </div>
      <div className={css.footer}>
        <h5>Roberto Zaniboni 2021</h5>
      </div>
    </div>
  );
}

export default App;
