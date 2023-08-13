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

const techKnwledege = [
  {
    techName: 'HTML',
    icon: '',
    obtained: 3,
    description: 'I possess a strong command of HTML, proficiently creating structured and meaningful web content through the use of semantic tags and proper nesting. My knowledge encompasses creating forms, organizing text, and embedding multimedia elements effectively within HTML documents.'
  }
]


const TechInfo = ({ techName, icon, description }) => (
  <TechInfoWrapper>
    <div>
      <div>
        <Image src={icon || LinkedInIcon} alt="icon" />
      </div>
      <TechnologyName>{techName}</TechnologyName>
      <Progress obtained={3} fullScore={5} />
    </div>

    <div>
      <Description>{description}</Description>
    </div>
  </TechInfoWrapper>
)

export function TechStack() {
  return (
    <TechStackContainer>
      <Title>Technologies</Title>
      <ListContainer>
        {
          techKnwledege.map(({ techName, icon, description, obtained }) => {
            return (
              <TechInfo
                icon={icon}
                key={techName}
                obtained={obtained}
                techName={techName}
                description={description}
              />
            )
          })
        }
      </ListContainer>
    </TechStackContainer>
  )
}