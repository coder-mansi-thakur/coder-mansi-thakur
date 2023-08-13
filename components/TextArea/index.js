import {InputContainer, InputClass, Label}  from './text.styles'

export default function Input({
  rows,
  label,
  placeholder,
  name,
}){

  return(
    <InputContainer>
    <Label>
      {label}
    </Label>
      <InputClass
      name={name}
      placeholder={placeholder}
      rows={rows}
      />
    </InputContainer>
  )

}