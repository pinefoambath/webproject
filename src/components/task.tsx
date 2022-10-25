import { Rating } from './rating'

type TaskProps = {
  description: string
  rating: number
  done: boolean
}

export const Task = ({ description, rating, done }: TaskProps): JSX.Element => {
  return (
    <div>
      <div className="single-item">
        <input className="item-checkbox" type="checkbox"></input>
        <div className="item-rating">🗲🗲🗲</div>
        {/* Ich habe das Rating level erstmal ausgeschaltet, Dies sollte dann das element mit den dynamischen Blitzen werden */}
        {/* <Rating ratingLevel={rating} /> */}
        <div className="item-description">{description}</div>
        <button className="item-button">Löschen</button>
      </div>
    </div>
  )
}
