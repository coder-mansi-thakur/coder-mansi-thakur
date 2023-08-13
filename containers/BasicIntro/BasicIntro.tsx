import Image from 'next/image'
import Link from 'next/link'
import {
  Title,
  Embed,
  Description,
  SocailMedia,
  TextWrapper,
  NameContainer,
  ImageContainer,
  BasicIntroContainer,
} from './BasicIntroStyles'

import {
  SendMailIcon,
  TwitterIcon,
  LinkedInIcon,
  MediumIcon
} from '@/components/Icons'

import { embedString } from './embedString'


const socialMediaLinks = [
  {
    imageLink: LinkedInIcon,
    link: '',
    name: 'linkedin',
  },
  {
    imageLink: TwitterIcon,
    link: '',
    name: 'twitter',
  },
  {
    imageLink: MediumIcon,
    link: '',
    name: 'medium',
  },
]

function BasicInfo() {

  return (
    <BasicIntroContainer>
      <SocailMedia>
        {socialMediaLinks.map(({ name, link, imageLink }) => (
          <div key={name}>
            <Link href={link}>
              <Image src={imageLink} alt={name} />
            </Link>
          </div>
        ))}
      </SocailMedia>


      <div>
        <TextWrapper>
          <NameContainer>
            Hi, I am Mansi Thakur.
          </NameContainer>
          <Title>
            Savvy Solution Maestro
          </Title>
          <Description>
            I'm passionate about building cool and user-centric web applications that leave a lasting impact.
          </Description>
        </TextWrapper>

        <div>
          <Link href="" className='connect-with-me'>
            Connect with me
          <Image src={SendMailIcon} alt="connect" className='connect-link' />
          </Link>
        </div>

      </div>

      <ImageContainer>
        <Embed src={embedString} />
      </ImageContainer>
    </BasicIntroContainer>
  )

}

export { BasicInfo }