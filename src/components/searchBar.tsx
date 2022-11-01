import { ChangeEvent, useState } from 'react'
import { Checkbox } from './checkbox'

type SearchBarProps = {
  text: string
  setText: (text: string) => void
  addTodo: (text: string) => void
  showAllCheckHandler: () => void
  showAllItems: boolean
}

export const SearchBar = ({
  text,
  setText,
  addTodo,
  showAllCheckHandler,
  showAllItems,
}: SearchBarProps) => {

  const createTodoAndClearInput = (text: string) => {
    addTodo(text)
    setText('')
  }
  const updateText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
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
            className="full-background-button"
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
