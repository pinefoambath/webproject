import { Button } from 'components/button'
import { SearchBar } from 'components/searchBar'
import { Task } from 'components/taskItem'
import { createTodo, createUrgentTodo, Todo } from 'models/Todo'
import { useState } from 'react'
import './App.css'
import { NumToImportance } from 'models/Importance'

export type ArrowCondition = 'asc' | 'desc' | 'none'
type SortConditions = 'importance' | 'text'

export const App = () => {
  const [todoItems, setTodoItems] = useState<Todo[]>([])


  //const [textSortButton, setTextSortButton] = useState(false)
  //const [importanceSortButton, setImportanceSortButton] = useState(false)
//
  const [arrowCondition, setArrowCondition] = useState<ArrowCondition>('none')
  const [sortingCriteria, setSortingCriteria] = useState<SortConditions>('importance')

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

  const setNewImportance = (id: string, val: number) => {
    const newTodos = todoItems.map(todo => {
      if(todo.id === id) {
        return { ...todo, importance: NumToImportance(val) }
      }
      return todo
    })
    setTodoItems(newTodos)
  }

  const filteredList = todoItems
    .filter(t => t.text.toLowerCase().startsWith(text.toLowerCase()))
    .filter(t => !t.done || showAllItems)

  const urgentTodo = () => {
    const newUrgentTodo = createUrgentTodo('Urgent Todo')
    const fullList = [...todoItems, newUrgentTodo]
    setTodoItems(fullList)
  }

  const showAllCheckHandler = () => {
    setShowAllItems(!showAllItems)
  }

  const sortByText = () => {
    (arrowCondition === 'asc')? setArrowCondition('desc') : setArrowCondition('asc')
    setSortingCriteria('text')
  }

  const filteredSortedList = filteredList.sort((a, b) => {
    let returnValue: number[] = []
    if (sortingCriteria === 'text') {
      (arrowCondition === 'asc') ? (returnValue = [1, -1]) : (returnValue = [-1, 1])
      if (a.text > b.text) {
        return returnValue[1]
      }
      if (a.text < b.text) {
        return returnValue[0]
      }
      return 0
    }
    if (sortingCriteria === 'importance') {
      (arrowCondition === 'asc') ? (returnValue = [1, -1]) : (returnValue = [-1, 1])
      if (a.importance > b.importance) {
        return returnValue[1]
      }
      if (a.importance < b.importance) {
        return returnValue[0]
      }
      return 0
    } else {
      return 0
    }
  })

  const sortByImportance = () => {
    (arrowCondition === 'asc')? setArrowCondition('desc') : setArrowCondition('asc')
    setSortingCriteria('importance')
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
              arrowState={sortingCriteria === 'importance'? arrowCondition : 'none'}
              buttonHandler={sortByImportance}
            />
            <Button
              className="sorting-button"
              title="Text"
              arrowState={sortingCriteria === 'text'? arrowCondition : 'none'}
              buttonHandler={sortByText}
            />

            {/* TODO diesen Button entfernen, ist nur zum Test */}
            <button className="sorting-button" onClick={() => urgentTodo()}>
              Todo mit Importance = 3 erstellen (für Testzwecke)
            </button>
          </div>

          {filteredSortedList.map(todo => (
            <Task
              key={todo.id}
              id={todo.id}
              description={todo.text}
              importance={todo.importance}
              done={todo.done}
              setAsDone={setAsDone}
              removeTodo={removeTodo}
              setNewImportance={setNewImportance}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
