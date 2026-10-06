import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './card'
import Button from './Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Willkommen!</h1>

      <div className="cardcontainer">
        <Card title="Mein erstes Bild" />
        <Card title="Mein zweites Bild" />
        <Card title="Mein drittes Bild" />
        <Card title="Mein viertes Bild" />
        <Card title="Mein fünftes Bild" />
      </div>

      <div>
        <Button />
        <Button />
        <Button />
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
