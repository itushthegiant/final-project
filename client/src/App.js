import React, { useState, useEffect } from 'react'
import AuthApp from './AuthApp'
import UnAuthApp from './UnAuthApp'
import { BrowserRouter as Router } from 'react-router-dom'
import baseURL from './api/baseURL'


function App() {

  const [currentUser, setCurrentUser] = useState(null)



  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await baseURL.get('/me', { withCredentials: true })
        if (response.statusText === 'OK') {
          setCurrentUser(response.data)
        }
      } catch (err) {
        console.log(err)
      }
    }
    fetchUser()
  }, [])



  return (
    <div className='app'>
      <Router>
        {currentUser ?
          (<AuthApp
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          />)
          :
          (<UnAuthApp
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          />)
        }
      </Router>
    </div>
  );
}

export default App;
