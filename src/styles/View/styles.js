import styled from 'styled-components'

export const Content = styled.div`
display: flex;
flex-direction: column;
height: calc(100vh - 9.52rem);
margin: 0 auto;
background: ${props => props.theme.colors.background};
padding-top: 1rem;

.button {
    background-color: ${props => props.theme.colors.primary};
    border-radius: 5px;
    border: none;
    padding: 1rem;
    width: 5rem;
    margin-left:5rem;
    color: ${props => props.theme.colors.text};
    transition: all 0.2s;

    &:hover {
        filter: brightness(0.8);
    }

    a{
        text-decoration: none;
        font-weight: 300;
        font-size: 1rem;
        color: ${props => props.theme.colors.text};
    }
}

section {
    max-width: 1130px;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    padding: 1rem;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.backgroundcard};
    border-radius: 5px;

    img {
        border-radius: 5px;
    }

    div{
        margin-left: 1rem;

        h1{
            padding-top: 4.5rem;
            color: ${props => props.theme.colors.background};
        }

        h2{
            padding-top: 2rem;
            font-size: 1.2rem;
        }
    }

    button {
        background: transparent;
        border: 0;
        height: 84px;

    .btStar {
        width: 34px;
        height: 34px;
        margin-right: 1.5rem;
        border-radius: 0;
        filter: brightness(0.4);
        transition: all 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
}
}
`