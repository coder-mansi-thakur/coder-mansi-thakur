//@ts-nocheck
import { forwardRef } from "react";

interface InputProps {
  name: string,
  label: string,
  value: string,
  error?: string,
  placeholder: string,
  formik?: any,
  onChangeHandler?: any,
  width?: Number | String,
  onKeyDown?: any, 
}
// eslint-disable-next-line react/display-name
const Input = forwardRef((props: InputProps, ref) => {
  const { name, label, placeholder, onChangeHandler, value, error, formik, width, onKeyDown} = props;

  return (
    <div className='flex-col mx-5 my-5 mb-3 rounded text-xs'>
      <div className="py-3 block text-sm font-medium text-slate-700">
        {label}
      </div>
      <input
        ref={ref} 
        className='border border-slate-300  rounded-md text-sm shadow-sm px-2 py-3 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 invalid:text-red-500 invalid:border-red-500'
        name={name}
        value={value}
        onChange={onChangeHandler}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        style= {{
          width: width || '100%'
        }}
      />
      {
        error ?
        <div className="text-xs text-red-500 ml-2 mt-1">{error}</div>
        : null
      }
    </div>
  );
});

export default Input