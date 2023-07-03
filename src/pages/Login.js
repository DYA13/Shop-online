import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { handleLogin } from '../utils/api'

const Login = ({ afterLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirectToHome, setRedirectToHome] = useState(false)
  const [loginSuccess, setLoginSuccess] = useState(false)
  const [loggedInEmail, setLoggedInEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !password) return
    const user = { email, password }
    const { successful: responseSucceeded, user: loggedInUser } =
      await handleLogin(user)
    if (responseSucceeded) {
      setEmail('')
      setPassword('')
      // This will call the setUserNameAfterLogin function in the HeaderContnent component to display the Welcome message in the header
      afterLogin(loggedInUser)
      setLoggedInEmail(email)
      setLoginSuccess(true)
      setRedirectToHome(true)
    }
  }

  if (redirectToHome) {
    return <Navigate to='/' />
  }

  return (
    <div className='login-form'>
      <h4>Log in</h4>

      {loginSuccess && (
        <p className='welcome-message'>Welcome, {loggedInEmail}!</p>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label className='label'>Email</label>
          <input
            className='input-login'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className='label'>Password</label>
          <input
            className='input-login'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='button-login' type='submit'>
          Login
        </button>
      </form>
      <p className='account-par'>
        Don't have an account?{' '}
        <Link className='link' to='/register'>
          Register
        </Link>
      </p>
    </div>
  )
}

export default Login
