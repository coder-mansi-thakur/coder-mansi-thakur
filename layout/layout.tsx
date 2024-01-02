import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

import { SideBarConstants } from '@/constants'



export default function Layout (props: any){
  return (
    <div className='h-screen'>
    <Header isLoggedIn/>
    <SideBar sideBarConstants={SideBarConstants}>
      {props.children}
    </SideBar>
    </div>
  )
}