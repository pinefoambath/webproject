import { useState } from 'react'
import { Todo } from './Todo'
import { Importance } from './Importance';

interface Importance {
    
}

export const Rating = (inprating: Importance) => {
    const [rating, setRating] = useState<number>(inprating);
    const [hover, setHover] = useState<number>(inprating);

    return (
        <div className = "item-rating">
            { [...Array(3)].map((sign, index ) => {
                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? "on-rated": "off-rated"}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <span className="sign">&#26A1;</span>
                    </button>
                );
            })}
        </div>
    );
};