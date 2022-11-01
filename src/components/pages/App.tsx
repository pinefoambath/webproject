import './App.css'
import { SingleItem } from 'models/SingleItem'

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
        <SingleItem />
      </div>
    </div>
  </div>
  )
}
