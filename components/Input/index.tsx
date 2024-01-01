interface InputProps {
  name: string,
  label: string,
  value: string,
  error?: string,
  placeholder: string,
  onChangeHandler?: any,
}
export default function Input(props: InputProps) {

  const { name, label, placeholder, onChangeHandler, value, error, } = props

  return (
    <div className='flex-col mx-5 my-5 mb-3 rounded text-xs'>
      <div className="py-3 block text-sm font-medium text-slate-700">
        {label}
      </div>
      <input
        className='w-full border border-slate-300  rounded-md text-sm shadow-sm px-2 py-3 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 invalid:text-red-500 invalid:border-red-500'
        name={name}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
      />
      {
        error ?
        <div className="text-xs text-red-500 ml-2 mt-1">{error}</div>
        :null
      }
    </div>
  )

}