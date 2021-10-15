import styled from 'styled-components'

export const Content = styled.div`
max-width: 1120px;
display: flex;
margin: 0 auto;
align-items: center;
justify-content: center;
flex-wrap: wrap;

.contentLoading {
    margin-top: 25%;
    
}
`

export const ContentSearch = styled.div`
display: flex;
background-color: ${props => props.theme.colors.primary};

input {
    margin: 0 auto;
    width: 15rem;
    height: 2rem;
    margin-bottom: 1rem;
    border: none;
    border-radius: 5px;
    padding-left: 1rem;
    padding-right: 1rem;
}
`

export const ContentList = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
margin: 0 auto;
background: ${props => props.theme.colors.background};
padding-top: 1rem;

.listBody {
    width: 650px;
    margin: 0 auto;
    display: flex;
    padding-bottom: 1rem;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.backgroundcard};
    border-radius: 5px;
    margin-bottom: 1rem;

    img {
        width: 84px;
        height: 90px;
        background-image: cover;
        margin-top: 2rem;
        margin-left: 1.5rem;
        border-radius: 50%;
    } 

    section {
        width: 100%;
        margin-left: 1rem;
        display: flex;
        justify-content: space-between;
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