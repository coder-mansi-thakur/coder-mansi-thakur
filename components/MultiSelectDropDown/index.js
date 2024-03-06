import { useState } from 'react'
import Image from 'next/image'

import {
  Backdrop,
  InputMainContainer,
  InputHeader,
  SubText,
  CheckBoxWrapper,
  LabelWrapper,
  Checkboxstyle,
  ClosingImg,
  SelectedData,
  SelectedItems
} from './element'
import Checkbox from 'core/Checkbox'
import iicon from 'assets/images/Iicon.png'
import close from 'assets/images/Close.png'
import Whiteclose from 'assets/images/Whiteclose.png'

const MultiselectDropDown = ({
  onDismiss,
  options,
  onChange,
  heading,
  subHeading
}) => {
  const [data, setData] = useState(options)
  const [filterdData, setFilteredData] = useState([])

  const toggle = (index) => {
    const newData = [...data]
    newData.splice(index.id, 1, {
      label: index.label,
      checked: !index.checked,
      id: index.id
    })
    setData(newData)
    onChange(newData.filter((x) => x.checked))
    setFilteredData(newData.filter((x) => x.checked))
  }

  return (
    <>
      <Backdrop onClick={onDismiss} />

      <InputMainContainer>
        <InputHeader>
          {heading && heading}{' '}
          <ClosingImg onClick={onDismiss}>
            <Image src={close} alt='close' />{' '}
          </ClosingImg>{' '}
        </InputHeader>
        <SubText>
          <span>
            <Image src={iicon} alt='empty' />
          </span>
          {subHeading && subHeading}
        </SubText>
        <SelectedData>
          {filterdData
            ? filterdData.map((item, index) => {
              return (
                <SelectedItems key={item.label} onClick={() => toggle(item)}>
                  <ClosingImg>
                    <Image src={Whiteclose} alt='close' />{' '}
                  </ClosingImg>{' '}
                  {item.label}
                </SelectedItems>
              )
            })
            : ''}
        </SelectedData>
        <CheckBoxWrapper>
          {data.map((item, index) => {
            return (
              <>
                <LabelWrapper htmlor={item.label}>
                  <Checkboxstyle>
                    <Checkbox
                      name={item.label}
                      checked={item.checked || false}
                      label={item.label}
                      value={item.label}
                      onClick={() => toggle(item)}
                    />
                  </Checkboxstyle>
                  {item.label}
                </LabelWrapper>
                <br />
              </>
            )
          })}
        </CheckBoxWrapper>
      </InputMainContainer>
    </>
  )
}

export default MultiselectDropDown
