import { Checkbox } from 'components/checkbox'
import { Button } from './button'

type TaskItem = {
  id: string
  description: string
  rating: number
  done: boolean
  setAsDone: (id: string) => void
  removeTodo: (id: string) => void
}

const textRendering = (done: boolean) => {
  return done ? 'item-description-done' : 'item-description'
}

export const Task = ({
  id,
  description,
  rating,
  done,
  setAsDone,
  removeTodo,
}: TaskItem): JSX.Element => {
  return (
    <div className="single-item">
      <Checkbox checkBoxHandler={() => setAsDone(id)} />

      {/* TODO: die rating funktion implementieren */}
      <div className="item-rating">⚡⚡️⚡️</div>
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
