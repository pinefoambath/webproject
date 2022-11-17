import './ratingBolts.css'
import { useState } from 'react'

const getClassName = (indexstatus: boolean) => {
  return indexstatus ? 'on-rated' : 'off-rated'
}

interface ImportanceLevel {
  imprating: number
  newImportance: (val: number) => void
}

export const Rating = (input: ImportanceLevel) => {
  const [hover, setHover] = useState<number>(input.imprating)
  return (
    <div className="item-rating">
      {[...Array(3)].map((sign, index) => {
        index += 1
        return (
          <button
            type="button"
            key={index}
            className={
              index <= (hover || input.imprating)
                ? getClassName(true)
                : getClassName(false)
            }
            onClick={() => input.newImportance(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(input.imprating)}
          >
            ↯
          </button>
        )
      })}
    </div>
  )
}
