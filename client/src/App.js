import React, { useState, useEffect } from 'react'
import AuthApp from './AuthApp'
import UnAuthApp from './UnAuthApp'
import Login from './components/Login'



function App() {

  const [currentUser, setCurrentUser] = useState(null)


  return (
    <div className='app'>
      <UnAuthApp setCurrentUser={setCurrentUser}/>
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
    </div>
  );
}

export default App;
