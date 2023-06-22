import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Logout from '../pages/Logout'

const Header = () => {
  let text = useRef(null)

  useEffect(() => {
    gsap.to(text, {
      duration: 8,
      delay: 3,
      opacity: 1,
      repeat: -1
    })
  }, [])

  return (
    <div className='header_container'>
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
          <Route exact path='/login'>
            <Login />
          </Route>

          <Route exact path='/register'>
            <Register />
          </Route>

          <Route exact path='/logout'>
            <Logout />
          </Route>
        </Routes>
      </Router>

      <a href='##' className='carello-button'>
        <img className='carelloImg' src='Carello.png' alt='logo' />
      </a>
    </div>
  )
}

export default Header
