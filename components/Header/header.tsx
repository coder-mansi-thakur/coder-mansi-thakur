
interface HeaderProp {
  isLoggedIn: boolean;
}

export default function Header(props: HeaderProp): JSX.Element {

  const { isLoggedIn } = props

  return (
   <div>
    {isLoggedIn ? 
    'logged in'
    :
    'logged out'
}
   </div>
  )

}