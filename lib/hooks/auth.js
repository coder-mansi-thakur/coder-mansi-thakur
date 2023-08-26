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

      if (res.status !== 200 || !res.data?.operation_id) {
        setIsError(true)
      } else {
        onSuccess({
          operationId: res.data.operation_id,
          phoneNo: safePhoneNoValue
        })
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