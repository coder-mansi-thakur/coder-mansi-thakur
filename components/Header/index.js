import Link from 'next/link'
import {
  Wrapper,
  NameContainer,
  NavigationLink,
  HeaderContainer,
  NavigationLinkContainer,
} from './header.style'
export default function Header(props) {
  return (

    <HeaderContainer>

      <Wrapper>
        <NameContainer>
          <Link href="/">
            Mansi Thakur
          </Link>
        </NameContainer>

        <NavigationLinkContainer>
          <NavigationLink
            href="/#home"
          >
            Home
          </NavigationLink>
          <NavigationLink
            href="/#about"
          >
            About
          </NavigationLink>
          <NavigationLink
            href="/#techstack"
          >
            Tech stack
          </NavigationLink>
          <NavigationLink
            href="/#about"
          >
            Nuggets
          </NavigationLink>
          <NavigationLink
            href="/#about"
          >
            Blogs
          </NavigationLink>
          <NavigationLink
            href="/#contanct"
          >
            Contact
          </NavigationLink>
          {/* <NavigationLink>Night mode </NavigationLink> */}
        </NavigationLinkContainer>

      </Wrapper>

    </HeaderContainer>
  )
}
