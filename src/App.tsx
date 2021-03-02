import css from './App.module.css'

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
      </div>
      <div className={css.content}>

        <h1>Calendario</h1>

      </div>
      <div className={css.footer}>
        <h5>Footer</h5>
      </div>
    </div>
  );
}

export default App;
