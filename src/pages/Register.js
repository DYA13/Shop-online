import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

const rootUrl = 'https://node-course-e-commerce-8r2s.onrender.com'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirectToHome, setRedirectToHome] = useState(false)

  const handleRegister = async (user) => {
    try {
      const url = `${rootUrl}/api/v1/auth/register`
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })

      if (response.ok) {
        console.log('Registration successful')
        return true
      } else {
        console.log('Registration failed')
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
    const user = { name, email, password }
    const success = await handleRegister(user)
    if (success) {
      setName('')
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
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <button type='submit'>Register</button>
      </form>
      <p>
        Already have an account? <Link to='/login'>Login</Link>
      </p>
    </div>
  )
}

export default Register
