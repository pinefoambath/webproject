import './App.css'

export const App = () => {
  return (
  <div>
    <div className = "page-head">
    Todo App
    </div>
    <div className = "page-body">
    <div className = "filter-bar">
        <div className = "input-line">
            <input className= "input-field" type="text" placeholder="Aufgabe..."></input>
            <button className= "input-button">Hinzufuegen</button>
        </div>
        <div>
          <input type="checkbox"></input>
          Alle Anzeigen
        </div>
      </div>
      <div className = "items-list">
        <div className = "single-item">
        <div></div>
          <div>Wichtigkeit   
          </div>
          <div>Aufgabe   
          </div>
        </div>
        <div className = "single-item">
          <input className = "item-checkbox" type="checkbox"></input>
          <div className = "item-rating">🗲🗲🗲</div>
          <div className = "item-description">Wohnung aufräumen</div>
          <button className= "item-button">Löschen</button>
        </div>
        <div className = "single-item">
          <input className = "item-checkbox" type="checkbox"></input>
          <div className = "item-rating">🗲🗲🗲</div>
          <div className = "item-description">Lasagne kochen</div>
          <button className= "item-button">Löschen</button>
        </div>
        <div className = "single-item">
          <input className = "item-checkbox" type="checkbox"></input>
          <div className = "item-rating">🗲🗲🗲</div>
          <div className = "item-description">Wäsche waschen</div>
          <button className= "item-button">Löschen</button>
        </div>
      </div>
    </div>
  </div>
  )
}
