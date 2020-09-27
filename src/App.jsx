import React, { useState, useEffect } from 'react';
import { createIncrementalCompilerHost } from 'typescript';
import Creation from './components/Creation';

function App() {
  const [welcomeMessage, setWelcomeMessage] = useState('')
  const [creations, setCreations] = useState([])

  const fetchMessage = async () => {
    const message = await fetch('/api')
      .then(res => res.text())

    setWelcomeMessage(message)
  }

  // Use useEffect to call fetchMessage() on initial render
  useEffect(() => {
    fetchMessage()
  }, [])

  // Async function for fetching all creations from the server and setting them into the state
  const fetchCreationsAll = async () => {
    const creationsAll = await fetch('/creations/all')
      .then(res => res.json())
    setCreations(creationsAll)
  }

  return (
    <div className="app">
      <header className="app-header">
        <p>{welcomeMessage}</p>
        <button onClick={fetchCreationsAll}>Fetch creations</button>
        {creations.length > 0 && <div className="creations-container">
          {creations.map((creationJson) => (
            <Creation id={creationJson.id} name={creationJson.name} image={creationJson.image} user={creationJson.user} />
          ))}
        </div>}
      </header>
    </div>
  )
}

export default App;
