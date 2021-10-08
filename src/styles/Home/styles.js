import styled from 'styled-components'

export const Content = styled.div`
display: grid;
margin: 0 auto;
grid-template-columns: repeat(1, 1fr);
align-items: center;
justify-content: center;


.sectionAcess {
    z-index: 1;
    margin: 0 auto;
    background-color: #ffffff;
}

.logotipo {
    z-index: 999;
    max-width: 500px;
    margin: 0 auto;
}

section {
    display: flex;
    flex-direction: column;
    margin-top: 15rem;
}

.sectionImg {
    z-index: 1;
    background-color: #EC1D24;
    margin-top: -10rem;
    height: calc(100vh - 321px);

    section {
        display: flex;
        flex-direction: column;
        align-items: center;

        p{
            color: #DADADA;
            font-size: 2rem;
            margin-bottom: 5rem;
        }

        a {
            background-color: #E3E3E5;
            color: #000000;
            font-size: 0.8rem;
            text-align: center;
            padding-top: 0.5rem;
            width: 200px;
            height: 30px;
            border-radius: 5px;
            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.8);
            }
        }
    }
}
`