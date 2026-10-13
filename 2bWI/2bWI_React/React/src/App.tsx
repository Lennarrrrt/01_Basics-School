
import { useState } from 'react'

import './App.css'
import Card from './Card'
import Button from './Button'
import SecretButton from './SecretButton'

function App() {
  const [buttons] = useState(() => {
    const total = Math.floor(Math.random() * 9) + 1

    return [
      'secret',
      ...Array(total - 1).fill('normal')
    ].sort(() => Math.random() - 0.5)
  })

  return (
    <>
      <h1>Willkommen!</h1>

      <div className="cardcontainer">
        <Card
          title="Mein erstes Bild"
          image="https://picsum.photos/200/300?random=1"
        />
        <Card
          title="Mein zweites Bild"
          image="https://picsum.photos/200/300?random=2"
        />
        <Card
          title="Mein drittes Bild"
          image="https://picsum.photos/200/300?random=3"
        />
        <Card
          title="Mein viertes Bild"
          image="https://picsum.photos/200/300?random=4"
        />
        <Card
          title="Mein fünftes Bild"
          image="https://picsum.photos/200/300?random=5"
        />
      </div>

      <div>
        {buttons.map((type, index) =>
          type === 'secret' ? (
            <SecretButton key={index} />
          ) : (
            <Button key={index} />
          )
        )}
      </div>

      <p>That was the site!</p>
    </>
  )
}

export default App
