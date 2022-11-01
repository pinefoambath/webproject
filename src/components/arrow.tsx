type ArrowProps = {
  arrowState: boolean
}

export const Arrow = ({ arrowState }: ArrowProps) => {
  return arrowState ? <div>⬆</div> : <div>⬇</div>
}
