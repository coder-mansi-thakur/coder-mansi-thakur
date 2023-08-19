import styled from 'styled-components'
export const NuggetWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
`;

export const Row = styled.div`
    display: flex;
    justify-content: center;
    gap: ${props => props.gap || '0px'};
`

export const EmptyNuggetContainer = styled.div`
    width: 800px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;

`

export const NothingFoundText = styled.div`
    font-size: 12px;
    text-align: center;
`