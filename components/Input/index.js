import {InputContainer, InputClass, Label}  from './input.styles'

export default function Input({
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
      />
    </InputContainer>
  )

}