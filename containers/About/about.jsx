import Image from 'next/image'
import {
  AbouTitle,
  TextWrappper,
  ImageWrapper,
  AboutWrapper,
  AboutMeHeader,
  AboutMeSubTitle,
  AboutMeContainer,
  DescriptionWrapper,
  ExperinceContainer,
  FullPortfolioImage,
  DownloadWrapperButton,
} from './about.styles'

import { DownloadIcon } from '@/components/Icons'

const experinceInfo = [
  {
    boldText: '04+',
    firstLineText: `Years`,
    secondLineText: 'Experience',
  },
  {
    boldText: "10+",
    firstLineText: 'Projects',
    secondLineText: 'Completed'
  },
  {
    boldText: "05+",
    firstLineText: 'Blogs',
    secondLineText: 'Published'
  }
]
export function About() {
  return (

    <AboutMeContainer id="about">

      <div>
        <AboutMeHeader>
          About me
        </AboutMeHeader>
        <AboutMeSubTitle> Introduction</AboutMeSubTitle>
      </div>


      <DescriptionWrapper>

        <ImageWrapper>
          <FullPortfolioImage src="https://placehold.co/340x400?text=Hello+World" alt="hello" width="340px" height="340px" />
        </ImageWrapper>

        <TextWrappper>

          <div>
            Experienced in Full Stack Web Development. Working with tech stacks: Node JS, React JS, NoSql, SQL and crafting elegant solutions in Frontend & Backend Web Development.
          </div>

          <ExperinceContainer>
            {
              experinceInfo.map(({ boldText, firstLineText, secondLineText }) => (
                <AboutWrapper key={boldText}>
                  <AbouTitle>{boldText}</AbouTitle>
                  <div>{firstLineText} <br /> {secondLineText}</div>
                </AboutWrapper>
              ))
            }

          </ExperinceContainer>

          <DownloadWrapperButton>
            <div>Download CV</div>
            <div>
              <Image src={DownloadIcon} alt="download" />
            </div>
          </DownloadWrapperButton>
        </TextWrappper>


      </DescriptionWrapper>
    </AboutMeContainer>
  )
}