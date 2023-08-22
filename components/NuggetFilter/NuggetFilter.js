import { useState } from 'react';
import {
  Wrapper,
  FilterTag,
  Seperator,
  SelectedTagsContainer,
  UnSelectedTagsContainer,
} from './NuggetFilter.styles'
import Input from '../Input';

import { techKnwledege } from '@/constants'


export function NuggetFilter({
  selectedTags,
  selectTagHandler,
  unSelectTagHandler,
  filterTextClickHandler
}) {


  const unSelectedTags = techKnwledege.filter(({ id }) => {
    return !selectedTags.includes(id);
  })

  const selectedTagsInfo = techKnwledege.filter(({ id }) => {
    return selectedTags.includes(id);
  })

  return (
    <Wrapper>
      <div>
        <Input
          label="Search"
          placeholder="Seach anything"
          onChangeHandler={filterTextClickHandler}
        />
      </div>

      <SelectedTagsContainer>
        {
          selectedTagsInfo.map((tag) => {
            const { id, title, color, background, borderColor } = tag
            return (
              <FilterTag
                key={id}
                color={color}
                background={background}
                borderColor={borderColor}
                onClick={() => unSelectTagHandler(id)}
              >
                {title}
              </FilterTag>
            )
          })
        }

      </SelectedTagsContainer>

      <Seperator />

      <UnSelectedTagsContainer>
        {
          unSelectedTags.map((tag) => {
            const { id, title, color, background, borderColor } = tag
            return (
              <FilterTag
                key={id}
                color={color}
                background={background}
                borderColor={borderColor}
                onClick={() => selectTagHandler(id)}
              >
                {title}
              </FilterTag>
            )
          })
        }
      </UnSelectedTagsContainer>
    </Wrapper>
  )
}