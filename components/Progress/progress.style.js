import { styled } from "styled-components";

export const Conatiner = styled.div`
      color: #f9660b;
    display: flex;
    font-size: 10px;
    align-items: baseline;
    .mainDiv {
      height: 3px;
    width: 100px;
    background-color: whitesmoke;
    border-radius: 12px;
  }
.childDiv {
   height: 100%;
   width: ${props=> `${props.percenatge}%`};
   background-color: #f9660b;
   border-radius: 12px;
   text-align: left;
}
.text {
   padding-left: 5px;
   font-size: 12px;
   font-weight: 700;
}
`