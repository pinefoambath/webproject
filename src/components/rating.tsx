interface ItemProps {
  ratingLevel: number
}

// Noch nicht implementiert - soll die Rating-Komponente darstellen
export const Rating = ({ ratingLevel }: ItemProps) => {
  return (
    <div>
      <div className="item-rating">🗲🗲🗲</div>
      <div>{ratingLevel}</div>
    </div>
  )
}
