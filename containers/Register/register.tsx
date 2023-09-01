import { useState } from "react";
import { useFormik } from 'formik';
import { useRouter } from 'next/router'
import type {  } from 'formik';
import "react-toastify/dist/ReactToastify.css";

import { regex } from '@/constants'
import { validate } from '@/helpers'
import Field from "@/components/Field";
import { ToastContainer, toast } from "react-toastify";

import {
  useSignIn,
  useSignUp
} from '@/lib/hooks'
import Button from "@/components/Button";


interface FormField {
  fieldName: string;
  label: string;
  disabled?: boolean;
  type: string;
  required: true;
  regex?: RegExp;
  regexMessage?: string;
}

const signInForms: FormField[] = [
  {
    fieldName: 'email',
    label: 'E-mail address',
    type: 'text',
    required: true,
    regex: regex.emailRegex,
    regexMessage: 'Write it like a mail na'
  },
  {
    fieldName: 'password',
    label: 'Password',
    type: 'password',
    required: true,
    regex: regex.passwordRegex,
    regexMessage: 'Minimum eight characters, at least one letter, one number and one special character '
  },
]

const signUpForm: FormField[] = [
  {
    fieldName: 'email',
    label: 'E mail address',
    type: 'text',
    required: true,
    regex: regex.emailRegex,
    regexMessage: 'Invalid Email Format'
  },
  {
    fieldName: 'userName',
    label: 'Username',
    type: 'text',
    required: true,
  },
  {
    fieldName: 'password',
    label: 'Password',
    type: 'password',
    required: true,
    regex: regex.passwordRegex,
    regexMessage: 'Minimum eight characters, at least one letter, one number and one special character '
  },
  {
    fieldName: 'retypePassword',
    label: 'Re type password',
    type: 'password',
    required: true,
    regex: regex.passwordRegex,
    regexMessage: 'Minimum eight characters, at least one letter, one number and one special character '
  },
]

export default function Register(props: any) {

  const [isSignUpState, setIsSignUpState] = useState(false)

  const signSuccess = (payload: any) => {
    const { message, success, data } = payload

    if (success) {
      const { isVerified } = data
      if (!isVerified) {
        toast.info(message)
      } else {

      }
    }

  }

  const {
    isLoading: isSignInLoading,
    handleSend: sendSignInRequest
  } = useSignIn({
    onSuccess: signSuccess,
    onFailure: (e: any) => console.error(e)
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


  const onSubmit = (values: any, setErrors: any) => {
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



  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
    },
    onSubmit: (values, {setErrors}) => {
      onSubmit(values, setErrors)
    },
    validate: (values) => validate(form, values),
  });


  return (
    <div className='h-screen flex justify-center items-center width-screen'>
      <div className='w-96  h-fit rounded-2xl bg-white shadow-lg px-5'>
        <ToastContainer />

        <form onSubmit={formik.handleSubmit}>
          {
            form.map((field) => {
              const { fieldName, label, type, required } = field
              const error: object = formik.errors
              const touched: object = formik.touched
              return (
                <Field
                  key={fieldName}
                  dot={required}
                  type={type}
                  name={fieldName}
                  label={label}
                  disabled={isSignInLoading}
                  onChange={formik.handleChange}
                  error={touched[fieldName as keyof object] && error[fieldName as keyof object]}
                />
              )
            })
          }

          <Button
            isLoading={isSignInLoading || isSignUpLoading}
          />
        </form>

        <div className='flex justify-between p10 mb-5 gap-2'>
          <div
            className={`w-1/2 rounded border-2 text-center ${!isSignUpState && `text-white bg-black border-black`}`}
            onClick={() => setIsSignUpState(false)}
          >
            Sign In
          </div>
          <div
            className={`w-1/2 rounded border-2 text-center ${isSignUpState && `text-white bg-black border-black`}`}
            onClick={() => setIsSignUpState(true)}
          >Sign Up</div>
        </div>
      </div>
    </div>
  )
} 