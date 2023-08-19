import {InputContainer, InputClass, Label}  from './input.styles'

export default function Input({
  name,
  label,
  placeholder,
  onChangeHandler,
}){

  return(
    <InputContainer>
    <Label>
      {label}
    </Label>
      <InputClass
      name={name}
      onChange={onChangeHandler}
      placeholder={placeholder}
      />
    </InputContainer>
  )

}