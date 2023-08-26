import { useState } from "react";
import { useFormik } from 'formik';
import { regex } from '@/constants'
import { validate } from '@/helpers'
import Field from "@/components/Field";

import {
  useSignIn
} from '@/lib/hooks'


interface FormField {
  fieldName: string;
  label: string;
  disabled: boolean;
  type: string;
  required: true;
  regex?: RegExp;
  regexMessage?: string;
}

const signInForms: FormField[] = [
  {
    fieldName: 'username', label: 'Username', disabled: false, type: 'text', required: true,
  },
  {
    fieldName: 'password',
    label: 'Password',
    disabled: false,
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
    disabled: false,
    type: 'text',
    required: true,
    regex: regex.emailRegex,
    regexMessage: 'Invalid Email Format'
  },
  {
    fieldName: 'username', label: 'Username', disabled: false, type: 'text', required: true,
  },
  {
    fieldName: 'password',
    label: 'Password',
    disabled: false,
    type: 'password',
    required: true,
    regex: regex.passwordRegex,
    regexMessage: 'Minimum eight characters, at least one letter, one number and one special character '
  },
  {
    fieldName: 'retypePassword',
    label: 'Re type password',
    disabled: false,
    type: 'retypePassword',
    required: true,
    regex: regex.passwordRegex,
    regexMessage: 'Minimum eight characters, at least one letter, one number and one special character '
  },
]

export default function Register(props: any) {

  const [isSignUpState, setIsSignUpState] = useState(false)
  const {
    isLoading: isSendLoading,
    handleSend
  } = useSignIn({
    onSuccess: () =>{},
    onFailure: (e: any) => console.error(e)
  })


  const onSubmit  = (values: any) => {
    handleSend(values)
    console.log("🚀 ~ file: register.tsx:72 ~ onSubmit ~ values:", values)
  } 
  const form = isSignUpState ? signUpForm : signInForms



  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: values => {
      onSubmit(values)
    },
    validate: (values) => validate(form, values),
  });


  return (
    <div className='h-screen flex justify-center items-center width-screen '>
      <div className='w-96  h-fit rounded-2xl bg-white shadow-lg px-5'>

        <form onSubmit={formik.handleSubmit}>
          {
            form.map((field) => {
              const { fieldName, label, disabled, type, required } = field
              const error: object = formik.errors
              const touched: object = formik.touched
              return (
                <Field
                  key={fieldName}
                  dot={required}
                  type={type}
                  name={fieldName}
                  label={label}
                  disabled={disabled}
                  onChange={formik.handleChange}
                  error={touched[fieldName as keyof object] && error[fieldName as keyof object]}
                />
              )
            })
          }

          <button
            className="mx-10 border-2 border-black rounded-2xl m-4 text-center w-5/6"
            type="submit"
          >
            Submit
          </button>
        </form>

        <div className='flex justify-between p10 mb-5'>
          <div
            className='w-1/2 rounded border-2 text-center'
            onClick={() => setIsSignUpState(false)}
          >
            Sign In
          </div>
          <div
            className='w-1/2 rounded border-2 text-center'
            onClick={() => setIsSignUpState(true)}
          >Sign Up</div>
        </div>
      </div>
    </div>
  )
} 