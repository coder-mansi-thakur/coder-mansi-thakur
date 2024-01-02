'use client'
import 'react-toastify/dist/ReactToastify.css'

import Header from "@/components/Header";
import RegisterContainer from "@/containers/Register"

export default function Register() {

  return (
    <div className='h-screen'>
      <Header isLoggedIn={false} />
      <RegisterContainer />
    </div>
  )

}
