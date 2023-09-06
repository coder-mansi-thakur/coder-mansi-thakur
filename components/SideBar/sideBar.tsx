import { ReactNode } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter, usePathname } from "next/navigation"
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

import { sideBarComponentType } from '@/constants'


interface sideBarProps {
  sideBarConstants: sideBarComponentType[],
  children: ReactNode
}

export default function SideBar(props: sideBarProps) {
  const { children, sideBarConstants } = props

  const router = useRouter()
  const pathName = usePathname()


  return (
    <div className='flex h-full'>
      <div className=' w-1/5 border-r-4 h-full'>
        {
          sideBarConstants.length > 0 ? (
            sideBarConstants.map((nav) => {
              const { title, subComponents, routingUrl } = nav
              const active = ('/' + routingUrl) === pathName
              return (
                <div
                  key={title}
                  className={`${active ? 'bg-slate-200' : ''} m-2 p-1 rounded text-sm`}
                  onClick={() => router.push(routingUrl)}>
                  {title}
                  <FontAwesomeIcon icon={icon({name: 'user-secret'})} />
                </div>
              )
            })
          ) : null
        }
      </div>
      {children}
    </div>
  )
}