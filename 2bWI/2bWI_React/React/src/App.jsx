import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Willkommen!</h1>

      <div className="cardcontainer">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <p>
          That was the site!
        </p>
      </div>


    </>
  )
}


export default App
