import { useState } from 'react'
import './App.css'
import Modal from './assets/modal/Modal'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = ()=>{
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <>
    <div className='page'>
      <button onClick={handleOpen} className='button'>Click me!</button>
      <Modal onClick={handleClose} isOpen={isOpen}/>
    </div>
    </>
  )
}

export default App
