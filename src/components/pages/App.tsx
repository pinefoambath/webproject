import './App.css'

export const App = () => {
  return (
    <>
      <div>
        <div>To Do</div>
        <div className="Suchbox">
          <input type="text" placeholder="Aufgabe..." />
          <button type="button">Hinzufügen</button>
        </div>
        <div>
          <div className="checkbox"></div>
          <div>Alle Aufgaben anzeigen</div>
        </div>
      </div>
      <div className="listElement">
        <div className="checkbox"></div>
        <div className="rating"></div>
        <div className="task">Aufgabe</div>
        <button></button>
      </div>
    </>
  )
}
