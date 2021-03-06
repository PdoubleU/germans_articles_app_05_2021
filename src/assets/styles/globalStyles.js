import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, *::after, *::before {
        box-sizing: inherit;
    }

    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: all .5s linear;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }

    button {
        font-size: 100%;
        font-family: inherit;
        border: 0;
        padding: 0;
        margin: 0;
    }

    a, a:hover, a:focus, a:active {
        text-decoration: none;
        color: inherit;
    }

    .auth-view {
        display: flex;
        flex-direction: column;
    }

    span.container {
        width: 80vw;
        @media (min-width: 720px){
            width: 40vw;
        }
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .dictionary_container {
        list-style: none;
        padding: 1rem 0 0;
        align-self: center;
        width: 100%;
        @media (min-width: 720px){
            width: 80%;
        }
    }

    .pagination {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: auto;
        grid-template-rows: 1fr;
        list-style: none;
        width: 80%;
        @media (min-width: 720px){
            width: 45%;
        }
        align-self: center;
    }

    .pagination > li {
        cursor: pointer;
    }

`;
