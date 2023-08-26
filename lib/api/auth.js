import axios from 'axios'

export const signUp = ({ data }) => {
  const url = '/server/auth/signup'

  return axios.post(url, data)
}

export const signIn = ({ data }) => {
  const url = '/server/auth/login'

  return axios.post(url, data)
}
