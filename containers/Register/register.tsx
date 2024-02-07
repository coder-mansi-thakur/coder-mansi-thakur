import { useState } from "react";
import { Formik, Form, useFormik } from 'formik';
import Input from "@/components/Input";
import Field from "@/components/Field";
import ErrorMessage from "@/components/ErrorMessage";
import { DISABLE_SPEEDY } from "styled-components/dist/constants";


interface RegisterProps {

}

interface Error {
  username: string;

}

interface FormPayload {
  username: string;
  password: string;
  [key: string]: string;
}

interface FormField {
  fieldName: string;
  dot: boolean;
  label: string;
  disabled: boolean;
  type: string;
}

const signInForms: FormField [] = [
  {
    fieldName: 'username', dot: true, label: 'Username', disabled: false, type: 'text'
  },
  {
    fieldName: 'password', dot: true, label: 'Password', disabled: false, type: 'password'
  },
]

export default function Register(props: RegisterProps) {

  const [isSignUpState, setIsSignUpState] = useState(false)

  const validate = (values: FormPayload) => {
    const errors: FormPayload = { username: '', password: '' };

    if (!values.username) {
      errors.username = 'required';
    }
    return errors;
  }

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validate,
  });


  return (
    <div className='h-screen flex justify-center items-center width-screen '>
      <div className='w-96  h-fit rounded-2xl bg-white shadow-lg px-5'>

        <form onSubmit={formik.handleSubmit}>
          {
            signInForms.map((field) => {
              const { fieldName, dot, label, disabled, type } = field
              const error:object = formik.errors
              return (
                <Field
                  dot={dot}
                  type={type}
                  name={fieldName}
                  label={label}
                  disabled={disabled}
                  error={`error`}
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
      </div>
    </div>
  )
} 