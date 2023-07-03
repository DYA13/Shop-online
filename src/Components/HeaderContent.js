import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Logout from '../pages/Logout'

const Header = () => {
  let text = useRef(null)
  const [userName, setUserName] = useState(undefined)

  useEffect(() => {
    gsap.to(text, {
      duration: 8,
      delay: 3,
      opacity: 1,
      repeat: -1
    })
  }, [])

  function setUserNameAfterLogin(user) {
    console.log('SETTING USER NAME in HeaderContent: ', user)
    setUserName(user.name)
  }

  return (
    <div className='headerContainer'>
      <img className='logoImg' src='Logo.png' alt='logo' />

      <p
        ref={(el) => {
          text = el
        }}
        className='par'
      >
        Benvenuto su Jewelry Shop Olivia Rossi!
      </p>

      <Router>
        <Routes>
          <Route
            exact
            path='/login'
            element={<Login afterLogin={setUserNameAfterLogin} />}
          />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/logout' element={<Logout />} />
          <Route
            path='*'
            element={
              userName ? <p className='accountPar'>Welcome {userName}!</p> : ''
            }
          ></Route>
        </Routes>
      </Router>

      <a href='##' className='carello-button'>
        <img className='carelloImg' src='Carello.png' alt='logo' />
      </a>
    </div>
  )
}

export default Header
