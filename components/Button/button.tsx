import { Loader } from '@/components'

interface ButtonProps {
  isLoading?: boolean;
  buttonText?: string | JSX.Element;
  type?: "button" | "submit" | "reset" | undefined;
}
export function Button(props: ButtonProps) {
  const { isLoading, buttonText, type } = props
  return (
    <button
      className='flex justify-center items-center h-8 mx-10 border-2 border-black rounded-2xl m-4 text-center w-5/6 hover:bg-black hover:text-white'
      type={type || 'submit'}
    >
      {isLoading ? <Loader data-testid="loader" width="w-4" height="h-4" /> : null}
      <span>
        {buttonText || ''}
      </span>
    </button>
  )
}