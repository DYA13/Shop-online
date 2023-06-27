import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom'
import Home from '../../pages/Home'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
import { handleLogin, handleRegister, handleLogout } from '../../utils/api'

const Navbar = () => {
  const [isLoggedIn, setLoggedIn] = useState(false)

  const handleLogoutClick = () => {
    handleLogout()
    setLoggedIn(false)
  }

  return (
    <Router>
      <nav>
        {!isLoggedIn ? (
          <Link to='/login'>Login</Link>
        ) : (
          <button onClick={handleLogoutClick}>Logout</button>
        )}
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/login'
          element={
            isLoggedIn ? (
              <Navigate to='/' replace />
            ) : (
              <Login handleLogin={handleLogin} />
            )
          }
        />
        <Route
          path='/register'
          element={
            !isLoggedIn ? (
              <Register handleRegister={handleRegister} />
            ) : (
              <Navigate to='/' />
            )
          }
        />
      </Routes>
    </Router>
  )
}

export default Navbar
