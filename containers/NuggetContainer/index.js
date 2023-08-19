import { useState } from 'react'
import Image from 'next/image'
import { OwlIcon } from '@/components/Icons'
import NuggetComponent from '@/components/NuggetComponent'
import { NuggetFilter } from '@/components/NuggetFilter'

import {
  Row,
  NuggetWrapper,
  NothingFoundText,
  EmptyNuggetContainer,
} from './index.style'

import { nuggets } from './nuggets'

export default function Nugget() {

  const [filteredText, setFilterText] = useState('')
  const [selectedTags, setSelectedTags] = useState([])


  const filterTextClickHandler = (event) => {
    const { value } = event.target
    setFilterText(value)
  }

  const selectTagHandler = (id) => {
    setSelectedTags([...selectedTags, id])
  }

  const unSelectTagHandler = (id) => {
    setSelectedTags(selectedTags.filter((tagId) => tagId !== id))
  }

  const calCulateNuggets = nuggets.filter((nug) => {
    const { title, tags } = nug
    if (!filteredText && selectedTags.length === 0) return true

    if (selectedTags.length === 0) {
      return title.toLowerCase().includes(filteredText.toLowerCase())
    }

    if (!filteredText) {

      return selectedTags.some((tag) => {
        return tags.includes(tag)
      })
    }
  })
  return (
    <Row gap="32px">
      <div>
        <NuggetFilter
          selectedTags={selectedTags}
          selectTagHandler={selectTagHandler}
          unSelectTagHandler={unSelectTagHandler}
          filterTextClickHandler={filterTextClickHandler}
        />
      </div>

      <NuggetWrapper>
        {calCulateNuggets.length > 0 ?
          calCulateNuggets.map((nug) => (
            <NuggetComponent
              data={nug}
              key={nug.title}
            />
          ))
          : (
            <EmptyNuggetContainer>
              <Image src={OwlIcon} alt="nothing found" />
              <NothingFoundText>
                Whirling data waltz, a quirky query; bytes chuckled, answers shyly hid.
              </NothingFoundText>
            </EmptyNuggetContainer>
          )
        }
      </NuggetWrapper>

    </Row>
  )
}