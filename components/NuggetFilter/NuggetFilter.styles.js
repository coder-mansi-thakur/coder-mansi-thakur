import styled from 'styled-components'

export const Wrapper = styled.div`
    min-height: 500px;
    border: 1px solid #cca48f;
    width: 300px;
    box-shadow: 5px 5px 4px #cca48f;
    border-radius: 20px;
    padding: 10px;
`

export const FilterTag = styled.div`
    color: ${props => props.color};
    background: ${props => props.background};
    border:  ${props => `1px solid ${props.borderColor}`};
    padding: 4px 10px;
    border-radius: 10px;
`

export const UnSelectedTagsContainer = styled.div`
    display: flex;
    gap: 8px;
    flex-flow: wrap;
    padding: 10px;
    font-size: 12px;
`

export const SelectedTagsContainer = styled.div`
    display: flex;
    gap: 8px;
    flex-flow: wrap;
    padding: 10px;
    font-size: 12px;
`

export const Seperator = styled.hr``