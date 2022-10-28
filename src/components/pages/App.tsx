import { Task } from 'components/task'
import { createTodo, Todo } from 'models/Todo'
import { Importance } from 'models/Importance'
import React, { ChangeEvent, useState } from 'react'
import './App.css'

export const App = () => {
  const [todoItems, setTodoItems] = useState<Todo[]>([])
  const [text, setText] = React.useState('')

  const addTodo = () => {
    const newTodo = createTodo(text)
    const fullList = [...todoItems, newTodo]
    setTodoItems(fullList)
  }

  const removeTodo = (id: string) => {
    setAsDone(id)
    const newTodos = todoItems.filter(todo => todo.id !== id)
    setTodoItems(newTodos)
  }

  const setAsDone = (id: string) => {
    const newTodos = todoItems.map(todo => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done }
      }
      return todo
    })
    setTodoItems(newTodos)
  }

  const updateText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  const showAll = () => {
    setTodoItems(todoItems)
    console.log('hello from ' + todoItems)
  }

  const textRendering = (todo: Todo) => {
    if (todo.done) {
      return 'item-description-done'
    } else {
      return 'item-description'
    }
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
            <input type="checkbox" onClick={showAll}></input>
            Alle Anzeigen
          </div>
        </div>
        <div className="items-list">
          <div className="single-item">
            <div></div>
            <div>Wichtigkeit</div>
            <div>Aufgabe</div>
          </div>

          {todoItems.map(todo => (
            // <Task
            //   description={task.text}
            //   rating={task.importance}
            //   done={task.done}
            // />

            <div>
              <div className="single-item">
                <input
                  className="item-checkbox"
                  type="checkbox"
                  onClick={() => removeTodo(todo.id)}
                ></input>
                <div className="item-rating">🗲🗲🗲</div>
                {/* Ich habe das Rating level erstmal ausgeschaltet, Dies sollte dann das element mit den dynamischen Blitzen werden */}
                {/* <Rating ratingLevel={rating} /> */}
                <div className={textRendering(todo)}>{todo.text}</div>
                <button
                  className="item-button"
                  onClick={() => removeTodo(todo.id)}
                >
                  Löschen
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
