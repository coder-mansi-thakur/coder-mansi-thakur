import { useState } from 'react'
import { Card, Tag, Title, TagWrapper, Description, ReadMoreText, LinksWrapper } from './nugget.style'

import { techKnwledege } from '@/constants'

export default function Nugget({ data }) {
  const { title, description = "", tags = [] } = data

  const [descLimit, setDescLimit] = useState(500)

  const increaseLimit = () => {
    setDescLimit(description.length)
  }

  const decreaseLimit = () => {
    setDescLimit(500)
  }

  return (
    <Card>

      <div>
        <Title>{title}</Title>
        <Description>
          {description.slice(0, descLimit)}
          {
            description.length > 500
              ?
              (description.length === descLimit ?
                <ReadMoreText onClick={decreaseLimit}> &nbsp; Show less</ReadMoreText>
                :
                <ReadMoreText onClick={increaseLimit}> &nbsp; read more</ReadMoreText>
              )
              : null
          }
        </Description>

        <TagWrapper>{
          tags.map(data => {
            const tag = techKnwledege[data]
            if(!tag) return null
            return (
              <Tag key={tag.name} >
                {tag.title}
              </Tag>)
          })
        }</TagWrapper>
      </div>

      <LinksWrapper>
        
      </LinksWrapper>

    </Card >
  )
}

