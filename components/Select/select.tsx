import { SelectContainer, OptionContainer } from "./select.style"

function Select({
  options = []
}) {
  return (
    <SelectContainer>
      {
        options.map(({ label, value }) => {
          return (
            <OptionContainer key={value} value={value}>
              {label}
            </OptionContainer>
          )
        })
      }
    </SelectContainer>
  )
}

export default Select