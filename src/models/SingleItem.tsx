import { useState } from 'react'
import './SingleItem.css'
import { Todo } from './Todo'
import {Rating} from './Rating'

export const SingleItem = (singleTodo: Todo) => {
    const [rating, setRating] = useState(singleTodo.importance)
    return (
        <div className = "single-item">
            <input className = "item-checkbox" type="checkbox">{singleTodo.done}</input>
            < Rating inprating={singleTodo.importance} />
          <div className = "item-description">{singleTodo.text}</div>
          <button className= "item-button">Löschen</button>
        </div>
    )
}
