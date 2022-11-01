type ButtonProps = {
  className: string
  title: string
  buttonHandler: () => void
}

export const Button = ({ className, title, buttonHandler }: ButtonProps) => {
  return (
    <button className={className} onClick={() => buttonHandler()}>
      {title}
    </button>
  )
}
