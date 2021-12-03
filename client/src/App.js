import React, { useState, useEffect } from 'react'
import AuthApp from './AuthApp'
import UnAuthApp from './UnAuthApp'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/NavBar'
import { API_URL, FRONT_URL } from './constants'
import baseURL from './api/baseURL'


function App() {

  const [currentUser, setCurrentUser] = useState(null)



  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await baseURL.get('/me', 
  //       { withCredentials: true },
  //       )
  //       if (response.statusText === 'OK') {
  //         setCurrentUser(response.data)
  //       }
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   fetchUser()
  // }, [])

  // useEffect(() => {
  //   fetch(API_URL + '/me', {
  //     credentials: 'include',
  //     origin: FRONT_URL,
  //   })
  //     .then(res => {
  //       if (res.ok) {
  //         res.json().then((data) => {
  //           setCurrentUser(data)
  //         })
  //       }
  //     })
  //     .catch((e) => {
  //       console.log(e)
  //     })
  // }, []);


  return (
    <div className='app'>
      <NavBar />
      <Router>
        <AuthApp />
        {/* {currentUser ?
          (<AuthApp
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          />)
          :
          (<UnAuthApp
            setCurrentUser={setCurrentUser}
          />)
        } */}
      </Router>
    </div>
  );
}

export default App;
