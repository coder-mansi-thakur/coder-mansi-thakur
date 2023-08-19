import Link from 'next/link'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
    padding: 20px 20px;
    height: 60px;
`

export const NavigationLinkContainer = styled.div`
        display: flex;
        gap: 24px;
`

export const NavigationLink = styled(Link)`
        &:hover{
          color: #f9660b;
        }
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

`

export const NameContainer = styled.div`
        font-weight: bold;

        &:hover{
          color: #f9660b;
        }
`

export const ExperinceContainer = styled.div``