import { useState } from 'react'

export default function Callback({ getColor }) {

  const [activeColor, setActiveColor] = useState('')
  const handleChange = (e) => {
    const { value } = e.target
    setActiveColor(value)
    getColor(value)
  }
  return (
    <>
      <input
        type='input'
        id='input'
        placeholder="Enter Color Name/Code"
        onChange={handleChange}
        value={activeColor} />
    </>
  )
}
