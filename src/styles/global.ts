import { createGlobalStyle } from "styled-components";

interface IThemeProps {
    backgroundColor: string;
    textColor: string;
}

export const GlobalStyle = createGlobalStyle<IThemeProps>`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ backgroundColor }) => backgroundColor};
        color: ${({ textColor }) => textColor};

        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }

    button {
        cursor: pointer;
    }
`;
