import styled from 'styled-components'

export const Content = styled.div`
display: flex;
background-color: ${props => props.theme.colors.primary};

section {
    width: 1120px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
}

.headerLogo {
    width: 250px;
}
`