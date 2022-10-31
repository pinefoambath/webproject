import { useState } from 'react'

type checkboxProps = {
  checkBoxHandler: () => void
}

export const Checkbox = ({ checkBoxHandler }: checkboxProps) => {
  const [checked, setChecked] = useState(false)
  const toggleCheckbox = () => {
    setChecked(!checked)
    checkBoxHandler()
  }
  return (
    <input
      className="item-checkbox"
      type="checkbox"
      checked={checked}
      onChange={() => {
        toggleCheckbox()
      }}
    />
  )
}
