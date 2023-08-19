import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 800px;
    padding: 20px 16px;
    border: 1px solid #FCF3EE;
    height: fit-content;

    &:hover{
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

`

export const Tag = styled.div`
    padding: 4px 8px;
    font-size: 12px;
    color: ${props => props.color};
    background: ${props => props.background};
    width: fit-content;
    border: 1px solid ${props => props.borderColor};
    border-radius: 4px;
`

export const Title = styled.div`
        font-size: 18px;

`

export const TagWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 16px 0px;
`;

export const Description = styled.div`
    font-size: 12px;
    color: darkgrey;
    margin-top: 12px;
    line-height: 23px;
    text-align: justify;
`

export const ReadMoreText = styled.span`
    color: #f9660b;
`

export const LinksWrapper = styled.div`
    width: 400px;
    border-left: 1px solid #f9660b;
    margin-left: 20px;
`