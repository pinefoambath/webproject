import { ChangeEvent, useState } from 'react'
import { Checkbox } from './checkbox'

type SearchBarProps = {
  addTodo: (text: string) => void
  updateListOnEntry: (text: string) => void
  showAllCheckHandler: () => void
  showAllItems: boolean
}

export const SearchBar = ({
  addTodo,
  updateListOnEntry,
  showAllCheckHandler,
  showAllItems,
}: SearchBarProps) => {
  const [text, setText] = useState('')

  const createTodoAndClearInput = (text: string) => {
    addTodo(text)
    setText('')
  }
  const updateText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
    updateListOnEntry(text)
  }

  return (
    <>
      <div className="filter-bar">
        <div className="input-line">
          <input
            className="input-field"
            onChange={updateText}
            value={text}
            type="text"
            placeholder="Aufgabe..."
          ></input>

          <button
            onClick={() => createTodoAndClearInput(text)}
            className="input-button"
          >
            Hinzufügen
          </button>
        </div>
        <div>
          <Checkbox checkBoxHandler={showAllCheckHandler} />
          Alle Anzeigen
        </div>
      </div>
    </>
  )
}
