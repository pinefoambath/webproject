import { ArrowCondition } from './pages/App'

type ArrowProps = {
  arrowState: ArrowCondition
}

export const Arrow = ({ arrowState }: ArrowProps) => {
  return arrowState === 'asc' ? <div>⬆</div> : <div>⬇</div>
}
