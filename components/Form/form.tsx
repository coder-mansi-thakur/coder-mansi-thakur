import React, { useState } from 'react';
import { Button } from '@mui/material';

import { validate } from '@/helpers'

interface FormField {
  name: string;
  label: string;
  type?: string;
  initialValue?: string | number | readonly string[] | undefined | boolean;
  options?: ({
    label: string;
    value: string | number | readonly string[] | undefined | boolean;
  })[]
}

interface GenricFormProps {
  formFields: FormField[];
  submitButtonText?: string;
  submitButtonHandler?: (e: React.FormEvent<HTMLFormElement>) => void;
}

type FormData = {
  [key: string]: string | number | readonly string[] | undefined | boolean;
};

const style = {
  dot: `after:content-['*'] after:ml-0.5 after:text-red-500 after:text-xs`,
  error: `ring-red-500 ring-1`,
  disabled: `cursor-not-allowed`,
  container: `relative mb-6 mt-3`,
  errorMessage: `text-sm text-red-500 mt-2`,
  checkboxLabel: `block overflow-hidden h-6 rounded-full bg-gray-300`,
  checkboxContainer: `relative w-10 mr-2 align-middle select-none mt-2`,
  iconContainer: `absolute flex border border-transparent left-0 top-0 h-full w-10`,
  icon: `flex items-center justify-center rounded-tl rounded-bl z-10 text-gray-400 text-lg h-full w-full`,
  checkbox: `checked:bg-blue-500 checked:right-0 focus:outline-none right-4 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer`,
  default: `text-base relative flex flex-1 w-full mt-1 rounded-md py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-base focus:outline-none focus:ring-1 focus:border-transparent border`,
};


export function GenericForm(props: GenricFormProps) {
  const { formFields, submitButtonText, submitButtonHandler } = props;

  const initialFormState: FormData = {};

  formFields.forEach((field) => {
    initialFormState[field.name] = field.initialValue || '';
  });

  const [formData, setFormData] = useState(initialFormState);
  const [errorData, setErrorData] = useState<FormData>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const isChecked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? isChecked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error = validate(formFields, formData)
    if (Object.keys(error).length === 0) {
      return
    }
    submitButtonHandler && submitButtonHandler(formData)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {formFields.map((field) => {
          const error = errorData[field.name]
          return (<div key={field.name} className='mt-5 mb-5'>
            <label htmlFor={field.name}>{field.label}:</label>
            {field.type === 'select' ? (
              <select
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
              >
                {field.options ?
                  field.options.map((option) => (
                    <option key={option.label} value={option.value}>
                      {option.label}
                    </option>
                  ))
                  : null
                }
              </select>
            ) : field.type === 'checkbox' ? (
              <input
                type="checkbox"
                id={field.name}
                name={field.name}
                checked={!!(formData[field.name])}
                onChange={handleInputChange}
              />
            ) : (
              <input
                className={`${style.default} 
                ${error ? style.error : 'border-gray-300'}
             `}
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
              />
            )}
          </div>
          )
        })}
        <Button
          buttonText="Submit"
          type="submit"
        />
      </form>
    </div>
  );
}

export default GenericForm;
