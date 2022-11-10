import { Button } from 'components/Button'
import { SearchBar } from 'components/SearchBar'
import { Task } from 'components/TaskItem'
import { createTodo, Todo } from 'models/Todo'
import { useState } from 'react'
import './App.css'
import { NumToImportance } from 'models/Importance'

export type ArrowCondition = 'asc' | 'desc' | 'none'
type SortConditions = 'importance' | 'text'

export const App = () => {
  const [todoItems, setTodoItems] = useState<Todo[]>([])

  const [arrowCondition, setArrowCondition] = useState<ArrowCondition>('asc')
  const [sortingCriteria, setSortingCriteria] =
    useState<SortConditions>('importance')

  const [showAllItems, setShowAllItems] = useState(true)
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
      if (todo.id === id) {
        return { ...todo, importance: NumToImportance(val) }
      }
      return todo
    })
    setTodoItems(newTodos)
  }

  const filteredList = todoItems
    .filter(t => t.text.toLowerCase().startsWith(text.toLowerCase()))
    .filter(t => !t.done || showAllItems)

  const updateShowAllItems = () => {
    setShowAllItems(!showAllItems)
  }

  const sortByText = () => {
    arrowCondition === 'asc'
      ? setArrowCondition('desc')
      : setArrowCondition('asc')
    setSortingCriteria('text')
  }

  const filteredSortedList = filteredList.sort((a, b) => {
    let returnValue: number[] = []
    if (sortingCriteria === 'text') {
      arrowCondition === 'asc'
        ? (returnValue = [1, -1])
        : (returnValue = [-1, 1])
      if (a.text > b.text) {
        return returnValue[1]
      }
      if (a.text < b.text) {
        return returnValue[0]
      }
      return 0
    }
    if (sortingCriteria === 'importance') {
      arrowCondition === 'asc'
        ? (returnValue = [1, -1])
        : (returnValue = [-1, 1])
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
    arrowCondition === 'asc'
      ? setArrowCondition('desc')
      : setArrowCondition('asc')
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
          updateShowAllItems={updateShowAllItems}
          showAllItems={showAllItems}
        />
        <div className="items-list">
          <div className="single-item">
            <div />
            <Button
              className="sorting-button"
              title="Wichtigkeit"
              arrowState={
                sortingCriteria === 'importance' ? arrowCondition : 'none'
              }
              buttonHandler={sortByImportance}
            />

            <Button
              className="sorting-button"
              title="Text"
              arrowState={sortingCriteria === 'text' ? arrowCondition : 'none'}
              buttonHandler={sortByText}
            />
          </div>

          {filteredSortedList.map(todo => (
            <Task
              key={todo.id}
              todo={todo}
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
