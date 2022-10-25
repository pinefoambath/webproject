import { Task } from 'components/task'
import { createTodo } from 'models/Todo'
import React, { ChangeEvent } from 'react'
import './App.css'

export const App = () => {
  const toDoArray = []
  const newTodo = createTodo('Eingabe Box zum laufen bringen')
  toDoArray.push(newTodo)
  const otherTodo = createTodo('Web assignment fertig machen')
  toDoArray.push(otherTodo)

  const [text, setText] = React.useState('')

  const addTodo = () => {
    const newTodo = createTodo(text)
    toDoArray.push(newTodo)
  }

  const updateText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  return (
    <div>
      <div className="page-head">Todo App</div>
      <div className="page-body">
        <div className="filter-bar">
          <div className="input-line">
            <input
              className="input-field"
              onChange={updateText}
              value={text}
              type="text"
              placeholder="Aufgabe..."
            ></input>
            <button onClick={addTodo} className="input-button">
              Hinzufuegen
            </button>
          </div>
          <div>
            <input type="checkbox"></input>
            Alle Anzeigen
          </div>
        </div>
        <div className="items-list">
          <div className="single-item">
            <div></div>
            <div>Wichtigkeit</div>
            <div>Aufgabe</div>
          </div>

          {toDoArray.map(task => (
            <Task
              description={task.text}
              rating={task.importance}
              done={task.done}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
