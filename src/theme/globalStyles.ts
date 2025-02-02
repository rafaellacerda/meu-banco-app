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
        overflow: hidden;
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

    input:-internal-autofill-selected {
        appearance: menulist-button;
        background-image: none !important;
        background-color: transparent !important;
        color: transparent !important;
    }

    input[type="search"]::-webkit-search-decoration,
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-results-button,
    input[type="search"]::-webkit-search-results-decoration {
        display: none;
    }


    .main-app {
        display: flex; 
        width: 100%; 
        height: 100%;
    }

    .container-app {
        display: flex;
        flex-direction: column;

        width: 100%;
        height: 100vh;
    }
`;
