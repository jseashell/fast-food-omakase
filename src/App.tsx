import React, { useState, useEffect } from 'react';

interface CreationUI {
  id: string;
  name: string;
  image: string;
  user: string;
}

function App() {
  // Prepare state hook for welcome message
  const [welcomeMessage, setWelcomeMessage] = useState('')

  // Prepare state hook for users list
  // Note: <CreationUI[]> is for TypeScript
  // It specifies the shape of creationsList state
  const [creationsList, setCreationsList] = useState<CreationUI[]>([])

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
        {creationsList.length > 0 && <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Image</th>
              <th>User</th>
            </tr>
          </thead>

          <tbody>
            {creationsList.map((creation: CreationUI) => (
              <tr key={creation.id}>
                <td>{creation.id}</td>
                <td>{creation.name}</td>
                <td>{creation.image}</td>
                <td>{creation.user}</td>
              </tr>
            ))}
          </tbody>
        </table>}
      </header>
    </div>
  )
}

export default App;
