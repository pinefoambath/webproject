import './ratingBolts.css'
import { useState } from 'react'

const getClassName = (indexstatus: boolean) => {
  return indexstatus ? 'on-rated' : 'off-rated'
}

interface ImportanceLevel {
  inprating: number
  newImportance: (val: number) => void
}

export const Rating = (input: ImportanceLevel) => {
  const [hover, setHover] = useState<number>(input.inprating)
  const boltsign = String.fromCharCode(0xD83D, 0xDDF2	)  //🗲
  return (
    <div className="item-rating">
      {[...Array(3)].map((sign, index) => {
        index += 1
        return (
          <button
            type="button"
            key={index}
            className={
              index <= (hover || input.inprating)
                ? getClassName(true)
                : getClassName(false)
            }
            onClick={() => input.newImportance(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(input.inprating)}
          >
            {boltsign}
          </button>
        )
      })}
    </div>
  )
}
