type TaskItem = {
  id: string
  description: string
  rating: number
  done: boolean
  setAsDone: (id: string) => void
  removeTodo: (id: string) => void
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
  setAsDone,
  removeTodo,
}: TaskItem): JSX.Element => {
  return (
    <div className="single-item">
      <input
        className="item-checkbox"
        type="checkbox"
        onClick={() => {
          setAsDone(id)
        }}
      ></input>
      <div className="item-rating">⚡⚡️⚡️</div>
      <div className={textRendering(done)}>{description}</div>
      <button className="item-button" onClick={() => removeTodo(id)}>
        Löschen
      </button>
    </div>
  )
}
