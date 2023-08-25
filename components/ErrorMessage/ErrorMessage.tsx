interface ErrorMessageProps {
  message: string
}
export default function ErrorMessage(props: ErrorMessageProps) {
  const { message } = props
  return (
    <div className="text-xs">
      {message}
    </div>
  )
}