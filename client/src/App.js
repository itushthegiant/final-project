import React, { useState, useEffect } from 'react'
import AuthApp from './AuthApp'
import UnAuthApp from './UnAuthApp'
import { BrowserRouter as Router } from 'react-router-dom'
import baseURL from './api/baseURL'


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)



  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await baseURL.get('/me', { withCredentials: true })
        if (response.statusText === 'OK') {
          setCurrentUser(response.data)
          setIsLoading(false)
        } else {
          setIsLoading(true)
        }
      } catch (err) {
        console.log(err)
      }
    }
    fetchUser()
  }, [])

    return (
      <div>
        <Router>
          {currentUser ?
            (<AuthApp
              setIsLoading={setIsLoading}
              isLoading={isLoading}
              setCurrentUser={setCurrentUser}
              currentUser={currentUser}
            />)
            :
            (<UnAuthApp
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              setCurrentUser={setCurrentUser}
              currentUser={currentUser}
            />)
          }
        </Router>

      </div>
    );

}

export default App;
