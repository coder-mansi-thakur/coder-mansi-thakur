import styled from 'styled-components'

export const  InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FCF3EE;
    padding: 10px;
    border: 0px solid red;
    border-radius: 4px;
    margin: 10px;
    font-size: 12px;
`;

export const InputClass = styled.textarea`
      display: block;
      border: none;
      outline: none;
      background-color: #FCF3EE;
      width: 100%;
      max-width: 100%;

      &:focus{
        border: 0px;
        border: none;
        outline: none;
        background-color:  #FCF3EE;
      }

      &:placeholder{
        background: red
      }
`;

export const Label = styled.div`
    margin-bottom: 12px;
`