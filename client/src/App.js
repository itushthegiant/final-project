import React, { useState, useEffect } from 'react'
import AuthApp from './AuthApp'
import UnAuthApp from './UnAuthApp'
import { BrowserRouter as Router } from 'react-router-dom'
import baseURL from './api/baseURL'
import Loading from './modals/Loading'


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)



  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await baseURL.get('/me', { withCredentials: true })
        if (response.statusText !== 'OK') {
          setIsLoading(true)
        } else {
          setCurrentUser(response.data)
          setIsLoading(false)
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
          !isLoading ?
            (<AuthApp
              setIsLoading={setIsLoading}
              isLoading={isLoading}
              setCurrentUser={setCurrentUser}
              currentUser={currentUser}
            />)
            :
            <Loading />
          :
          !isLoading ?
            (<UnAuthApp
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              setCurrentUser={setCurrentUser}
              currentUser={currentUser}
            />)
            :
            <Loading />
        }
      </Router>

    </div>
  );

}

export default App;
