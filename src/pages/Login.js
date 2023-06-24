import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { handleLogin } from '../utils/api'

const LoginForm = ({ afterLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirectToHome, setRedirectToHome] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !password) return
    const user = { email, password }
    const { successful: responseSucceeded, user: loggedInUser } =
      await handleLogin(user) // Update handleLogin in api.js to return the user in an object;  instead of just returning true
    if (responseSucceeded) {
      setEmail('')
      setPassword('')
      afterLogin(loggedInUser)
      setRedirectToHome(true)
    }
  }

  if (redirectToHome) {
    return <Navigate to='/' />
  }

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='label'>Email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className='label'>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Login</button>
      </form>
      <p className='account-par'>
        Don't have an account? <Link to='/register'>Register</Link>
      </p>
    </div>
  )
}

export default LoginForm
