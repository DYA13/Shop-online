import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

const rootUrl = 'https://node-course-e-commerce-8r2s.onrender.com'

const Logout = () => {
  const [redirectToHome, setRedirectToHome] = useState(false)

  const handleLogout = async () => {
    try {
      const url = `${rootUrl}/api/v1/auth/logout`
      const response = await fetch(url)

      if (response.ok) {
        console.log('Logout successful')
        setRedirectToHome(true)
      } else {
        console.log('Logout failed')
      }
    } catch (error) {
      console.log(error)
    }
  }

  if (redirectToHome) {
    return <Navigate to='/' />
  }

  return (
    <div>
      <h4 className='logoutPar'>
        If you want to log out please press the button
      </h4>
      <button className='logoutButton' onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default Logout
