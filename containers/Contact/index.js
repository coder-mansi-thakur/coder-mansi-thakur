import Image from 'next/image'
import {
  Row,
  Column,
  Title,
  Header,
  Wrapper,
  SubText,
  SubTitle,
  Section,
  BoldText,
  SendMessage,
  IconWrapper,
  InfoContainer,
} from './contact.styles'

import {
  EmailIcon,
  ProfileIcon,
  LocationIcon,
  SendMailIcon,
} from '@/components/Icons'

import Input from '@/components/Input'
import TextArea from '@/components/TextArea'

export function Contact() {
  return (
    <Wrapper id="contanct">

      <Header>
        <Title>Contact Me</Title>
        <SubTitle>Get in touch</SubTitle>
      </Header>

      <Section>

        <Column width="240px">

          <InfoContainer>
            <IconWrapper>
              <Image src={EmailIcon} alt="mail me" />
            </IconWrapper>
            <div>
              <BoldText>Email</BoldText>
              <SubText>coder.mansi.thakur@gmail.com</SubText>
            </div>
          </InfoContainer>

          <InfoContainer>
            <IconWrapper><Image src={LocationIcon} alt="my location" /></IconWrapper>
            <div>
              <BoldText>Location</BoldText>
              <SubText>India</SubText>
            </div>
          </InfoContainer>

          <InfoContainer>
            <IconWrapper><Image src={ProfileIcon} alt="hire me" /></IconWrapper>
            <div>
              <BoldText>Hire me</BoldText>
              <SubText>As a Freelancer or an Intern</SubText>
            </div>
          </InfoContainer>

        </Column>

        <Column width="460px">
          <Row>

            <Input
              name="name"
              label="Full Name"
              placeholder="Enter Full name"
            />
            <Input
              name="email"
              label="Email"
              placeholder="Enter email address"
            />

          </Row>
          <Input
            name="subject"
            label="Subject"
            placeholder="Enter a subject line"
          />

          <TextArea
            rows={7}
            name="Message"
            label="Message"
            placeholder="Enter your message"
          />

          <SendMessage>
            <div>Send Message</div>
            <div>
              <Image src={SendMailIcon} alt ="askndl" width={40} height={40}/>
            </div>
            </SendMessage>

        </Column>
      </Section>
    </Wrapper >
  )
}