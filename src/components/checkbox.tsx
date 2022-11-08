import { useState } from 'react'

type checkboxProps = {
  checked: boolean
  checkBoxHandler: () => void
}

export const Checkbox = ({ checked, checkBoxHandler }: checkboxProps) => {
  return (
    <input
      className="item-checkbox"
      type="checkbox"
      checked={checked}
      onChange={() => {
        checkBoxHandler()
      }}
    />
  )
}
