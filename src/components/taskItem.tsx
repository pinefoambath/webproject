import { Rating } from './rating'

type TaskItem = {
  id: string
  description: string
  rating: number
  done: boolean
  setTodoAsDone: (id: string) => void
  setRemoveTodo: (id: string) => void
}

const textRendering = (done: boolean) => {
  if (done) {
    return 'item-description-done'
  } else {
    return 'item-description'
  }
}

export const Task = ({
  id,
  description,
  rating,
  done,
  setTodoAsDone,
  setRemoveTodo,
}: TaskItem): JSX.Element => {
  return (
    <div className="single-item">
      <input
        className="item-checkbox"
        type="checkbox"
        onClick={() => {
          setTodoAsDone(id)
        }}
      ></input>
      <div className="item-rating">⚡⚡️⚡️</div>
      <div className={textRendering(done)}>{description}</div>
      <button className="item-button" onClick={() => setRemoveTodo(id)}>
        Löschen
      </button>
    </div>
  )
}
