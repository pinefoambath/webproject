import { useState } from 'react'

const getClassName = (indexstatus: boolean) =>{
    return  indexstatus ? "on-rated": "off-rated"
};

interface ImportanceLevel {
    inprating: number
}

export const Rating = (input: ImportanceLevel) => {
    const [rating, setRating] = useState<number>(input.inprating);
    const [hover, setHover] = useState<number>(input.inprating);

    return (
        <div className = "item-rating">
            { [...Array(3)].map((sign, index ) => {
                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? getClassName(true): getClassName(false)}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                        
                    >
                        🗲                     
                    </button>
                );
            })}
        </div>
    );
};