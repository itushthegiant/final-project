import React, { useState, useEffect } from 'react'
import AuthApp from './AuthApp'
import UnAuthApp from './UnAuthApp'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/NavBar'



function App() {

  const [currentUser, setCurrentUser] = useState(null)



  useEffect(() => {
    fetch('/me', {
      credentials: 'include',
    })
      .then(res => {
        if (res.ok) {
          res.json().then((data) => {
            setCurrentUser(data)
          })
        }
      })
  }, []);


  return (
    <div className='app'>
      <NavBar />
      <Router>
        {currentUser ?
          (<AuthApp
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          />)
          :
          (<UnAuthApp
            setCurrentUser={setCurrentUser}
          />)
        }
      </Router>
    </div>
  );
}

export default App;
