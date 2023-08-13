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
        <NameContainer>Mansi Thakur</NameContainer>

        <NavigationLinkContainer>
          <NavigationLink>Home</NavigationLink>
          <NavigationLink>About</NavigationLink>
          <NavigationLink>Tech stack </NavigationLink>
          <NavigationLink>Nuggets</NavigationLink>
          <NavigationLink>Blogs</NavigationLink>
          <NavigationLink>Contact</NavigationLink>
          <NavigationLink>Night mode </NavigationLink>
        </NavigationLinkContainer>

      </Wrapper>

    </HeaderContainer>
  )
}
