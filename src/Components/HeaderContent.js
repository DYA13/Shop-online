import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

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
    <Router>
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

        <Link to='/login' className='link'>
          Login
        </Link>

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
          <Route path='login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default Header
