import './TaskItem.css'
import { Checkbox } from 'components/Checkbox'
import { Button } from './Button'
import { Rating } from 'components/Rating'
import { Todo } from 'models/Todo'

type TaskItem = {
  todo: Todo
  setAsDone: (id: string) => void
  removeTodo: (id: string) => void
  setNewImportance: (id: string, val: number) => void
}

const textRendering = (done: boolean) => {
  return done ? 'item-description-done' : 'item-description'
}

export const Task = ({
  todo,
  setAsDone,
  removeTodo,
  setNewImportance,
}: TaskItem): JSX.Element => {
  return (
    <div className="single-item">
      <Checkbox
        checked={todo.done}
        checkBoxHandler={() => setAsDone(todo.id)}
      />
      <Rating
        inprating={todo.importance}
        newImportance={val => setNewImportance(todo.id, val)}
      />
      <div className={textRendering(todo.done)}>{todo.text}</div>
      <Button
        className="full-background-button"
        title="Löschen"
        arrowState="none"
        buttonHandler={() => removeTodo(todo.id)}
      />
    </div>
  )
}
