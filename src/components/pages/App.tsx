import { SearchBar } from 'components/searchBar'
import { Task } from 'components/taskItem'
import { createTodo, createUrgentTodo, Todo } from 'models/Todo'
import { useEffect, useState } from 'react'
import './App.css'

export const App = () => {
  const [todoItems, setTodoItems] = useState<Todo[]>([])
  const [textSortButton, setTextSortButton] = useState(false)
  const [importanceSortButton, setImportanceSortButton] = useState(false)

  const [showAllItems, setShowAllItems] = useState(false)

  const addTodo = (text: string) => {
    const newTodo = createTodo(text)
    const fullList = [...todoItems, newTodo]
    setTodoItems(fullList)
  }

  const setAddTodo = (text: string) => {
    addTodo(text)
  }

  const removeTodo = (id: string) => {
    const newTodos = todoItems.filter(todo => todo.id !== id)
    setTodoItems(newTodos)
  }

  const setRemoveTodo = (id: string) => {
    removeTodo(id)
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

  const setTodoAsDone = (id: string) => {
    setAsDone(id)
  }

  const updateListOnEntry = (text: string) => {
    let filteredList = todoItems.filter(t =>
      t.text.toLowerCase().startsWith(text.toLowerCase())
    )
    setTodoItems(filteredList)
  }

  const urgentTodo = () => {
    const newUrgentTodo = createUrgentTodo('Urgent Todo')
    const fullList = [...todoItems, newUrgentTodo]
    setTodoItems(fullList)
  }

  const showAllCheckHandler = () => {
    setShowAllItems(!showAllItems)
  }

  useEffect(() => {
    let returnValue: number[] = []
    textSortButton ? (returnValue = [1, -1]) : (returnValue = [-1, 1])
    const newTodos = todoItems.sort((a, b) => {
      if (a.text > b.text) {
        return returnValue[1]
      }
      if (a.text < b.text) {
        return returnValue[0]
      }
      return 0
    })
    setTodoItems(newTodos)
  }, [textSortButton, todoItems])

  useEffect(() => {
    let returnValue: number[] = []
    importanceSortButton ? (returnValue = [1, -1]) : (returnValue = [-1, 1])
    const newTodos = todoItems.sort((a, b) => {
      if (a.importance > b.importance) {
        return returnValue[1]
      }
      if (a.importance < b.importance) {
        return returnValue[0]
      }
      return 0
    })
    setTodoItems(newTodos)
  }, [importanceSortButton, todoItems])

  return (
    <div>
      <div className="page-head">Todo App</div>
      <div className="page-body">
        <SearchBar
          setAddTodo={setAddTodo}
          updateListOnEntry={updateListOnEntry}
          showAllCheckHandler={showAllCheckHandler}
          showAllItems={showAllItems}
        />
        {/* <div className="filter-bar">
          <div className="input-line">
            <input
              className="input-field"
              onChange={updateText}
              value={text}
              type="text"
              placeholder="Aufgabe..."
            ></input>
            <button onClick={addTodo} className="input-button">
              Hinzufügen
            </button>
          </div>
          <div>
            <input
              type="checkbox"
              checked={showAllItems}
              onChange={showAllCheckHandler}
            ></input>
            Alle Anzeigen
          </div>
        </div> */}
        <div className="items-list">
          <div className="button-group">
            <button
              className="sorting-button"
              onClick={() => setImportanceSortButton(!importanceSortButton)}
            >
              Nach Wichtigkeit ordnen
            </button>
            <button
              className="sorting-button"
              onClick={() => setTextSortButton(!textSortButton)}
            >
              Nach Aufgabentext ordnen
            </button>
            <button className="sorting-button" onClick={() => urgentTodo()}>
              Todo mit Importance = 3 erstellen (für Testzwecke)
            </button>
          </div>

          {todoItems.map(todo => (
            <Task
              key={todo.id}
              id={todo.id}
              description={todo.text}
              rating={todo.importance}
              done={todo.done}
              setTodoAsDone={setTodoAsDone}
              setRemoveTodo={setRemoveTodo}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
