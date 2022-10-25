interface ItemProps {
  ratingLevel: number
}

export const Rating = ({ ratingLevel }: ItemProps) => {
  return (
    <div>
      <div className="item-rating">🗲🗲🗲</div>
      <div>{ratingLevel}</div>
    </div>
  )
}
