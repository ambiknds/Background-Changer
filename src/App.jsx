import { useState } from 'react'
import './App.css'
import Callback from './Callback'

//Parent
export default function App() {
  const [color, setColor] = useState(null)

  //callback function
  const getColor = (col)=>{
    setColor(col)
  }
  return (
    <div className='App'>
      <div className='app-container' style={{ background: `${color}` }}>
      </div>
      <Callback getColor={getColor} />
    </div>
  )
}
