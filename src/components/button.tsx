import { Arrow } from './arrow'
import { ArrowCondition } from './pages/App'

type ButtonProps = {
  className: string
  title: string
  arrowState: ArrowCondition
  buttonHandler: () => void
}

export const Button = ({
  className,
  title,
  arrowState,
  buttonHandler,
}: ButtonProps) => {
  return (
    <button className={className} onClick={() => buttonHandler()}>
      <div>{title}</div>
      {arrowState !== 'none' && <Arrow arrowState={arrowState} />}
    </button>
  )
}
