import './checkbox.css'
import { ArrowCondition } from './pages/App'

type ArrowProps = {
  arrowState: ArrowCondition
}

export const Arrow = ({ arrowState }: ArrowProps) => {
  return <div className="arrow-padding">{arrowState === 'asc' ? '⬇' : '⬆'}</div>
}
