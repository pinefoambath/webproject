type SortingButtonProps = {
  title: string
  sortingFunction: () => void
}

export const SortingButton = ({
  title,
  sortingFunction,
}: SortingButtonProps) => {
  return (
    <button className="sorting-button" onClick={() => sortingFunction()}>
      {title}
    </button>
  )
}
