import './searchBar.css'
import { ChangeEvent } from 'react'
import { Checkbox } from './checkbox'

type SearchBarProps = {
  text: string
  setText: (text: string) => void
  addTodo: (text: string) => void
  updateShowAllItems: () => void
  showAllItems: boolean
}

export const SearchBar = ({
  text,
  setText,
  addTodo,
  updateShowAllItems,
  showAllItems,
}: SearchBarProps) => {
  const createTodoAndClearInput = (text: string) => {
    if(text.length > 0){
      addTodo(text)
      setText('')
    }

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
            onKeyUp={(e) => {
              if(e.key === "Enter") {createTodoAndClearInput(text)}
            }}
          ></input>

          <button
            onClick={() => createTodoAndClearInput(text)}
            className="full-background-button"
            disabled={text.length<1}
          >
            Hinzufügen
          </button>
        </div>
        <div>
          <Checkbox
            checked={showAllItems}
            checkBoxHandler={updateShowAllItems}
          />
          Alle Anzeigen
        </div>
      </div>
    </>
  )
}
