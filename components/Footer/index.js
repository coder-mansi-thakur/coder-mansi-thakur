import {
  Links,
  Title,
  Designation,
  SocailMedia,
  FooterWrapper,
  TextWrapper,
} from './footer.style'

import {
  WhiteLinkedInIcon,
  WhiteMediumIcon,
  WhiteTwitterIcon,
} from '@/components/Icons'
import Image from 'next/image'

const socailMedia = [
  {
    name: 'linkedin',
    icon: WhiteLinkedInIcon,
  },
  {
    name: 'medium',
    icon: WhiteMediumIcon,
  },
  {
    name: 'twitter',
    icon: WhiteTwitterIcon
  },
]

const Footer = () =>{
  return (
    <FooterWrapper>

      <TextWrapper>
        <Title>
          Mansi Thakur
        </Title>

        <Designation>
          A front-end developer
        </Designation>

      </TextWrapper>

      <Links>

      <div>

      </div>

      <div>
      © All rights reserved.
      </div>

      </Links>

      <SocailMedia>

        {
          socailMedia.map(({icon, name})=>(
              <div key={name}>
                <Image src={icon} alt={name}/>
              </div>
          ))
        }
          
      </SocailMedia>

    </FooterWrapper>
  )
}

export default Footer