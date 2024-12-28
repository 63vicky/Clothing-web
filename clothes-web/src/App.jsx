import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import Navbar from '../new/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Button>Click ME</Button>
        <Navbar />
      </div>
    </>
  )
}

export default App
