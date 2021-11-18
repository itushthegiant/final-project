import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'



function App() {

  const [currentUser, setCurrentUser] = useState(null)


  return (
    <div className='app'>
      {currentUser ?
        (<AuthenticatedApp
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
        />)
        :
        (<UnauthenticatedApp
          setCurrentUser={setCurrentUser}
        />)
      }
    </div>
  );
}

export default App;
