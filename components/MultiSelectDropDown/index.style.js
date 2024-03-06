import styled from 'styled-components'

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  height: 100vh;
  width: 100vw;
  z-index: 333;
  position: fixed;
  top: 0%;
  left: 0%;
`

export const InputMainContainer = styled.div`
  background-color: #fff;
  position: fixed;
  bottom: 0%;
  left: 0%;
  border-radius: 16px 16px 0px 0px;
  width: 100vw;
  z-index: 999;
  max-height: 70vh;
  overflow:  auto;
  padding-bottom: 20px;
`

export const InputHeader = styled.h2`
  font-size: ${(props) => props.theme.fontSize.xl2};
  padding: 1.5rem 1.5rem 1.5rem;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: ${(props) => props.theme.color.mineShaft};
  background: #F5F5F5;
  border-radius: 16px 16px 0px 0px;
  
`

export const SubText = styled.h4`
font-family: 'Mulish';
font-style: normal;
font-weight: 700;
font-size: 10px;
line-height: 12px;
letter-spacing: 0.02em;
color: #999999;
padding: 1rem 1rem 1rem;
display: flex;
gap: 5px;
`

export const CheckBoxWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px 16px;
`

export const LabelWrapper = styled.label`
display: flex;
padding : 1rem 1rem 1rem;
font-size:13px;
`

export const Checkboxstyle = styled.div`
padding-right: 30px;
margin: -4px;
`
export const ClosingImg = styled.span`
float: right;
width: 16px;
height: 16px;
`

export const SelectedData = styled.div`
display: flex;
gap: 20px;
padding: 10px;
overflow-x: auto
`

export const SelectedItems = styled.div`
background-color: #B49600;
border-radius: 16px;
padding: 10px 9px 5px 14px;
color: #FFFFFF;
min-width: 10rem;
`
