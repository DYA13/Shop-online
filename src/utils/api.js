const rootUrl = 'https://node-course-e-commerce-8r2s.onrender.com'

export const handleRegister = async (user) => {
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

export const handleLogin = async (user) => {
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
      // .json() will returns the body of the response as a json object
      // read more in mdn: https://developer.mozilla.org/en-US/docs/Web/API/Response/json#examples.
      // We expect the body returned by the backend to look like {"user":{"name":"akos","userId":"649496075cb6d83f666e9f3a","role":"user"}}
      const body = await response.json()
      // return an object with the success state and the user object to Login.js

      return { successful: true, user: body.user }
    } else {
      console.log('Login failed')
      return { successful: false }
    }
  } catch (error) {
    console.log(error)
    return { successful: false }
  }
}

export const handleLogout = async () => {
  try {
    const url = `${rootUrl}/api/v1/auth/logout`
    const response = await fetch(url)

    if (response.ok) {
      console.log('Logout successful')
      return true
    } else {
      console.log('Logout failed')
      return false
    }
  } catch (error) {
    console.log(error)
    return false
  }
}
