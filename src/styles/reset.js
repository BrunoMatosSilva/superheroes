import { createGlobalStyle } from 'styled-components';

export const ResetStyle = createGlobalStyle`
@media (max-width: 1080px) {
    html{
        font-size: 93.75%;
    }
}
@media (max-width: 720px) {
    html{
        font-size: 87.5%;
    }
}
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        height: calc(100vh - 52px);
    }
    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
    }
    a {
        text-decoration: none;
    }
    button {
        cursor: pointer;
    }
`