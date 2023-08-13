import Image from 'next/image'
import styled from 'styled-components'

export const DescriptionWrapper = styled.div `
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 10px;
`

export const ImageWrapper = styled.div`
      height: 340px;
      width: 340px;
`

export const FullPortfolioImage = styled.img`
    width: 340px;
    border-radius: 50%;
    height: 200px;
`

export const TextWrappper = styled.div`
    width: 400px;
    text-align: justify;
    font-size: 14px;
    color: #b3b1ad;
`

export const ExperinceContainer = styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
`

export const AbouTitle = styled.div`
      color: #000000;
    font-size: 20px;
    font-weight: bolder;
`

export const AboutWrapper = styled.div`
    text-align: center;
`

export const DownloadWrapperButton = styled.div`
    background-color: #f9660b;
    color: #FFF;
    border-radius: 0.5rem;
    font-weight: 200;
    width: fit-content;
    align-items: center;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    width: 160px;
    justify-content: space-between;
    padding: 16px;
`

export const AboutMeHeader = styled.h2`
    font-size: 32px;
`

export const AboutMeSubTitle = styled.div`
    padding: 10px;
    font-size: 12px;
    color: #b3b1ad;

`

export const AboutMeContainer = styled.div`
    text-align: center;
`