import { useState } from "react";
import { useRouter } from 'next/navigation'
import { get } from 'lodash'
import "react-toastify/dist/ReactToastify.css";

import { regex } from '@/constants'
import { ToastContainer, toast } from "react-toastify";

import {
  useSignIn,
  useSignUp
} from '@/lib/hooks'
import { GenericForm } from "@/components/Form";


interface FormField {
  name: string;
  label: string;
  disabled?: boolean;
  type: string;
  required: true;
  regex?: RegExp;
  regexMessage?: string;
}

const signInForms: FormField[] = [
  {
    name: 'email',
    label: 'E-mail address',
    type: 'text',
    required: true,
    regex: regex.emailRegex,
    regexMessage: 'Write it like a mail na'
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    required: true,
    regex: regex.passwordRegex,
    regexMessage: 'Minimum eight characters, at least one letter, one number and one special character '
  },
]

const signUpForm: FormField[] = [
  {
    name: 'email',
    label: 'E mail address',
    type: 'text',
    required: true,
    regex: regex.emailRegex,
    regexMessage: 'Invalid Email Format'
  },
  {
    name: 'userName',
    label: 'Username',
    type: 'text',
    required: true,
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    required: true,
    regex: regex.passwordRegex,
    regexMessage: 'Minimum eight characters, at least one letter, one number and one special character '
  },
  {
    name: 'retypePassword',
    label: 'Re type password',
    type: 'password',
    required: true,
    regex: regex.passwordRegex,
    regexMessage: 'Minimum eight characters, at least one letter, one number and one special character '
  },
]

export default function Register(props: any) {

  const router = useRouter()

  const [isSignUpState, setIsSignUpState] = useState(false)

  const signSuccess = (payload: any) => {
    const { message, success, data } = payload

    if (success) {
      router.push('problems')
      //TODO: correct this code when user mail verification backend code is corrcted.

      // const { isVerified } = data
      // if (!isVerified) {
      //   toast.info(message)
      // } else {
      //   router.push('problems')
      // }
    }

  }

  const signInFailure = (response: any) => {
    const message = get(response, 'response.data.error', '')
    toast.error(message || 'There is some issue in login, try again')
  }

  const {
    isLoading: isSignInLoading,
    handleSend: sendSignInRequest
  } = useSignIn({
    onSuccess: signSuccess,
    onFailure: signInFailure
  })

  const signUpSuccsess = () => {
    debugger
  }

  const signUpFailure = (message: string) => {
    toast.error(message)
  }

  const {
    isLoading: isSignUpLoading,
    handleSend: sendSignUpRequest
  } = useSignUp({
    onSuccess: signUpSuccsess,
    onFailure: signUpFailure,
  })


  const onSubmit = (values: any) => {
    if (isSignUpState) {
      const { password, retypePassword } = values
      if (password !== retypePassword) {
        setErrors({
          retypePassword: 'Passwords do not match!'
        })
        return
      }
      sendSignUpRequest(values)
      return
    }
    sendSignInRequest(values)
  }
  const form = isSignUpState ? signUpForm : signInForms



  return (
    <div className='h-screen flex justify-center items-center width-screen' data-testid="register-container">
      <div className='w-96  h-fit rounded-2xl bg-white shadow-lg px-5'>
        <ToastContainer />

        <GenericForm
          submitButtonHandler={onSubmit}
          formFields={isSignUpState ? signUpForm : signInForms}
        />
        <div className='flex justify-between p10 mb-5 gap-2'>
          <div
            className={`w-1/2 rounded border-2 text-center ${!isSignUpState && `text-white bg-black border-black`}`}
            onClick={() => setIsSignUpState(false)}
            data-testid="sign-in-form"
          >
            Sign In
          </div>
          <div
            className={`w-1/2 rounded border-2 text-center ${isSignUpState && `text-white bg-black border-black`}`}
            onClick={() => setIsSignUpState(true)}
            data-testid="sign-up-form"
          >Sign Up</div>
        </div>
      </div>
    </div>
  )
} 