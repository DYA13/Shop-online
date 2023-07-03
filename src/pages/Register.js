import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

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
    if (!email || !password || !name) return
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
    return <Navigate to='/' />
  }

  return (
    <div>
      <h4>Registration Form</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='label'>Name</label>
          <input
            className='input-register'
            type='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className='label'>Email</label>
          <input
            className='input-register'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className='label'>Password</label>
          <input
            className='input-register'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='button-register' type='submit'>
          Register
        </button>
      </form>
      <p className='account-par'>
        Already have an account?{' '}
        <Link className='link' to='/login'>
          Login
        </Link>
      </p>
    </div>
  )
}

export default Register
