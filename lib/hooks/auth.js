import { useState } from 'react'
import { signUp, signIn } from '../api'

export const useSignIn = ({ onSuccess, onFailure }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [response, setResponse] = useState({})

  const handleSend = async (payload) => {
    try {
      setIsLoading(true)
      const res = await signIn({ data: payload })
      setIsLoading(false)
      setResponse(res.data)

      if (res.status !== 200) {
        setIsError(true)
      } else {
        onSuccess(res.data)
      }
    } catch (e) {
      setIsLoading(false)
      setIsError(false)
      onFailure(e)
      console.error(e)
    }
  }

  return {
    isLoading,
    isError,
    response,
    handleSend
  }
}

export const useSignUp = ({ onSuccess, onFailure }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [response, setResponse] = useState({})

  const handleSend = async (payload) => {
    try {
      setIsLoading(true)
      const res = await signUp({ data: payload })
      setIsLoading(false)
      setResponse(res.data)

      if (res.status !== 200) {
        setIsError(true)
      } else {
        onSuccess(res.data)
      }
    } catch (e) {
      setIsLoading(false)
      setIsError(false)
      onFailure(e.response?.data?.error)
    }
  }

  return {
    isLoading,
    isError,
    response,
    handleSend
  }
}