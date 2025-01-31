import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        font-size: 16px;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
    }

    *, button, input{
        border: 0;
        outline: 0;
        font-family: "Lato";
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }
`;
