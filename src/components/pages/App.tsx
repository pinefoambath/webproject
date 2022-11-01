import { Button } from 'components/button'
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
  const [text, setText] = useState('')

  const addTodo = (text: string) => {
    const newTodo = createTodo(text)
    const fullList = [...todoItems, newTodo]
    setTodoItems(fullList)
  }

  const removeTodo = (id: string) => {
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

    
  const filteredList = todoItems.filter(t =>
    t.text.toLowerCase().startsWith(text.toLowerCase()) 
  ).filter(t => !t.done || showAllItems)
    

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

  const sortByText = () => {
    setTextSortButton(!textSortButton)
  }

  const sortByImportance = () => {
    setImportanceSortButton(!importanceSortButton)
  }

  return (
    <div>
      <div className="page-head">Todo App</div>
      <div className="page-body">
        <SearchBar
          text={text}
          setText={setText}
          addTodo={addTodo}
          showAllCheckHandler={showAllCheckHandler}
          showAllItems={showAllItems}
        />
        <div className="items-list">
          <div className="button-group">
            <Button
              className="sorting-button"
              title="Wichtigkeit"
              buttonHandler={sortByImportance}
            />
            <Button
              className="sorting-button"
              title="Text"
              buttonHandler={sortByText}
            />

            {/* TODO diesen Button entfernen, ist nur zum Test */}
            <button className="sorting-button" onClick={() => urgentTodo()}>
              Todo mit Importance = 3 erstellen (für Testzwecke)
            </button>
          </div>

          {filteredList.map(todo => (
            <Task
              key={todo.id}
              id={todo.id}
              description={todo.text}
              rating={todo.importance}
              done={todo.done}
              setAsDone={setAsDone}
              removeTodo={removeTodo}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
