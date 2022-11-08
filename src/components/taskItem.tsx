import { Checkbox } from 'components/checkbox'
import { Button } from './button'
import { Rating } from 'components/Rating'
import { Todo } from 'models/Todo'
/* ToDo type verwenden!*/
type TaskItem = {
  id: string
  description: string
  importance: number
  done: boolean
  setAsDone: (id: string) => void
  removeTodo: (id: string) => void
  setNewImportance: (id: string, val: number) => void
}

const textRendering = (done: boolean) => {
  return done ? 'item-description-done' : 'item-description'
}

export const Task = ({
  id,
  description,
  importance,
  done,
  setAsDone,
  removeTodo,
  setNewImportance,
}: TaskItem): JSX.Element => {
  return (
    <div className="single-item">
      <Checkbox checked={done} checkBoxHandler={() => setAsDone(id)} />
      < Rating inprating={importance} newImportance={(val) => setNewImportance(id, val)}  />
      <div className={textRendering(done)}>{description}</div>
      <Button
        className="full-background-button"
        title="Löschen"
        arrowState='none'
        buttonHandler={() => removeTodo(id)}
      />
    </div>
  )
}
