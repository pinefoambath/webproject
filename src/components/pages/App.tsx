import './App.css'

export const App = () => {
  return (
  <div>
    <div className = "pageHead">
    Todo App
    </div>
    <div className = "pageBody">
    <div className = "filterBar">
        <div className = "inputLine">
            <input className= "inputField" type="text" placeholder="Aufgabe..."></input>
            <button className= "inputButton">Hinzufuegen</button>
        </div>
        <div>
          <input className="filterCheckbox" type="checkbox"></input>
          Alle Anzeigen
        </div>
      </div>
      <div className = "itemsList">
        <div className = "singleItem">
          <input className = "itemCheckbox" type="checkbox"></input>
          <div className = "itemRating">🗲🗲🗲</div>
          <div className = "itemDescription">Wohnung aufräumen</div>
          <button className= "itemButton">Löschen</button>
        </div>
        <div className = "singleItem">
          <input className = "itemCheckbox" type="checkbox"></input>
          <div className = "itemRating">🗲🗲</div>
          <div className = "itemDescription">Lasagne kochen</div>
          <button className= "itemButton">Löschen</button>
        </div>
        <div className = "singleItem">
          <input className = "itemCheckbox" type="checkbox"></input>
          <div className = "itemRating">🗲</div>
          <div className = "itemDescriptionDone">Wäsche waschen</div>
          <button className= "itemButton">Löschen</button>
        </div>
      </div>
    </div>
  </div>
  )
}
