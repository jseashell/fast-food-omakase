import React, { useState, useEffect } from 'react';
import Creation from './components/Creation';

function App() {
  // Prepare state hook for welcome message
  const [welcomeMessage, setWelcomeMessage] = useState('')

  // Prepare state hook for users list
  // Note: <Creation[]> is for TypeScript. It specifies the shape of creationsList state
  const [creationsList, setCreationsList] = useState<Creation[]>([])

  const fetchMessage = async () => {
    const message = await fetch('/api')
      .then(res => res.text())

    setWelcomeMessage(message)
  }

  // Use useEffect to call fetchMessage() on initial render
  useEffect(() => {
    fetchMessage()
  }, [])

  // Async function for fetching creations list
  const fetchCreations = async () => {
    const creations = await fetch('/creations/all')
      .then(res => res.json())

    setCreationsList(creations)
  }

  return (
    <div className="app">
      <header className="app-header">
        <p>{welcomeMessage}</p>
        <button onClick={fetchCreations}>Fetch creations</button>
        {creationsList.length > 0 && <div className="creations-container">
          {creationsList.map((creation: Creation) => (
            <Creation /> // How do I map an entry in `creationsList` array to a `./components/Creation` component?
          ))}
        </div>}
      </header>
    </div>
  )
}

export default App;
