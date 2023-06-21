import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
const rootUrl = 'https://node-course-e-commerce-8r2s.onrender.com'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirectToHome, setRedirectToHome] = useState(false)
  const [userName, setUserName] = useState('')

  const handleLogin = async (user) => {
    try {
      const url = `${rootUrl}/api/v1/auth/login`
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })

      if (response.ok) {
        console.log('Login successful')
        setUserName(user.name)
        return true
      } else {
        console.log('Login failed')
        return false
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !password) return
    const user = { email, password }
    const success = await handleLogin(user)
    if (success) {
      setEmail('')
      setPassword('')
      setRedirectToHome(true)
    }
  }

  if (redirectToHome) {
    return <Redirect to='/' />
  }

  return (
    <div>
      {userName && <p>Welcome {userName}!</p>}
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit'>Login</button>
      </form>
      <p>
        Don't have an account? <Link to='/register'>Register</Link>
      </p>
    </div>
  )
}

export default Login
