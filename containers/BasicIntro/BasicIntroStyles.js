import styled from 'styled-components'

import { colors, fontWeights } from '@/app/styling/variables'

export const NameContainer = styled.div`
      font-size: 24px;
      font-weight: 700;
`

export const SocailMedia = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: center;
  gap: 8px;
  padding: 0px 20px;


  a{
    height: 10px;
  }
`

export const BasicIntroContainer = styled.div`
    padding: 100px 0px 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;

    .connect-with-me{
      background-color: #f9660b;
      color: #FFF;
      padding: 12px;
      border-radius: 0.5rem;
      font-weight: 200;
      width: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .connect-link{
      height: 30px;
      width: 30px;
      margin-left: 10px;
    }
`

export const Title = styled.div`
    font-size: 45px;
    color: ${colors.fadedGreyColor};
    font-weight: ${fontWeights.medium};
`

export const Description = styled.div`
  text-align: justify;
  color: #b3b1ad;
  font-size: 12px;
`

export const ImageContainer = styled.div`
`

export const Embed = styled.embed`
  height: 200px;
  width: 200px;
  border-radius: 50%;
`

export const TextWrapper = styled.div`
    width: 500px;
    align-items: start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 20px;
 `