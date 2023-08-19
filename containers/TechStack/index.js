import Image from 'next/image'
import { LinkedInIcon } from '@/components/Icons';
import {
  Title,
  Description,
  ListContainer,
  TechnologyName,
  TechInfoWrapper,
  TechStackContainer,
} from './TechStack.style'
import Progress from "../../components/Progress";

import { techKnwledege } from '@/constants'



const TechInfo = ({ title, icon, description }) => (
  <TechInfoWrapper>
    <div>
      <div>
        <Image src={icon || LinkedInIcon} alt="icon" />
      </div>
      <TechnologyName>{title}</TechnologyName>
      <Progress obtained={3} fullScore={5} />
    </div>

    <div>
      <Description>{description}</Description>
    </div>
  </TechInfoWrapper>
)

export function TechStack() {
  return (
    <TechStackContainer id="techstack">
      <Title>Technologies</Title>
      <ListContainer>
        {
          techKnwledege.map(({ title, icon, description, obtained }) => {
            return (
              <TechInfo
                icon={icon}
                key={title}
                obtained={obtained}
                title={title}
                description={description}
              />
            )
          })
        }
      </ListContainer>
    </TechStackContainer>
  )
}