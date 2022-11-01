import { Arrow } from './arrow'

type ButtonProps = {
  className: string
  title: string
  arrowVisibility?: boolean
  arrowState?: boolean | undefined
  buttonHandler: () => void
}

export const Button = ({
  className,
  title,
  arrowState,
  arrowVisibility,
  buttonHandler,
}: ButtonProps) => {
  return (
    <button className={className} onClick={() => buttonHandler()}>
      <div>{title}</div>
      {arrowState !== undefined && arrowVisibility && (
        <Arrow arrowState={arrowState} />
      )}
    </button>
  )
}
