import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;
`;

export const IconWrapper = styled.div``;

export const Title = styled.div`
    font-size: 36px;
    font-weight: 700;
`;

export const SubTitle = styled.div`
    text-align: center;
    color: #b3b1ad;
    font-size: 14px;
`;

export const Header = styled.div``;

export const BoldText = styled.div`
    font-weight: 700;
`

export const SubText = styled.div`
    color: #b3b1ad;
    font-size: 12px;
`;

export const Section = styled.div`
    display: flex;
    gap: 40px;
`;

export const Column = styled.div`
    width: ${props => props.width};
`;

export const InfoContainer = styled.div`
    display: flex;
`;

export const Row = styled.div`
    display: flex;
`;

export const SendMessage = styled.div`

    display: flex;
    gap: 8px;
    margin-top: 8px;
    border-radius: 8px;
    background: #f9660b;
    padding: 8px;
    color: #FFF;
    width: 200px;
    height: 50px;
    margin-left: 12px;
    justify-content: center;
    align-items: center;
`;