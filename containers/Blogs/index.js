import { Wrapper, Title } from './blogs.style'
import Crousel from '../../components/Crousel'

const carouselSlidesData = [
  {
    title: 'Title',
    description: 'The process of building a basic user authentication application using these powerful technologies. By combining the frontend capabilities of React with the backend functionality of Firebase, we can create secure and dynamic web applications.'
  },
  {
    title: 'Title',
    description: 'The process of building a basic user authentication application using these powerful technologies. By combining the frontend capabilities of React with the backend functionality of Firebase, we can create secure and dynamic web applications.'
  },
  {
    title: 'Title',
    description: 'description'
  },
  {
    title: 'Title',
    description: 'description'
  },
]

export function Blogs() {
  return (
    <Wrapper>
      <Title>
        Published Blogs
      </Title>
      <Crousel carouselSlidesData={carouselSlidesData} />
    </Wrapper>
  )
}