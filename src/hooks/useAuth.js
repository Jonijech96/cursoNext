import React from 'react'

import Cookie from 'js-cookie'
import axios from 'axios'
import endPoints from '@services/api/'

function useAuth() {
  const [user, setUser] = React.useState(null)

  const signIn = async (email, password) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json'
      }
    }
    const { data: access_token } = await axios.post(
      endPoints.auth.login,
      { email, password },
      options
    )
    console.log(access_token)
    if (access_token) {
      const token = access_token.access_token
      Cookie.set('token', token, { expires: 5 })
      axios.defaults.headers.Authorization = `Bearer ${token}`
      const { data: user } = await axios.get(endPoints.auth.profile)
      setUser(user)
    }
  }

  return {
    user,
    signIn
  }
}

export { useAuth }
