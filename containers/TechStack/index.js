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
    description: 'Yeah I know about semantic tags'
  },
  {
    techName: 'CSS',
    icon: '',
    obtained: 3,
    description: ' I have got this uncanny knack for creating designs that snugly hug every device and screen size out there.'
  },
  {
    techName: 'Javascript',
    icon: '',
    obtained: 3,
    description: 'Promises? Oh, those are not my style, unlike JavaScript acrobatics.'
  },
  {
    techName: 'React',
    icon: '',
    obtained: 3,
    description: "Guess what? I've mastered the useState and useEffect duo, and now I'm on a quest to unravel the mysteries of when not to unleash their powers."
  },
  {
    techName: 'Next JS',
    icon: '',
    obtained: 3,
    description: "Embarking on a wild adventure in the realms of Next.js – because who needs sleep when you've got server-side sorcery to learn?"
  },
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
    <TechStackContainer id="techstack">
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