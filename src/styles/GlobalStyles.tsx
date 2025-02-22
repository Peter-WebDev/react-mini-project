import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* Basic resets and global styling */
    *, *:before, *:after {
        box-sizing: border-box;
    }
    * {
        margin: 0;
        padding: 0;
    }
    body {
        background-color: #5A5A5A;
        font-family: system-ui, sans-serif;
        margin: 0;
        padding: 0;
    }
    main {
        width: min(100% - 2rem, 1064px);
        margin-inline: auto;
    }
    
    img {
        max-width: 100%;
        height: auto;
        display: block;
        object-fit: cover;
        aspect-ratio: auto;
        -webkit-tap-highlight-color: transparent;
    }
    h1, h2, h3, h4, h5, h6 {
        text-wrap: balance;
        line-height: 1.1;
    }
`;

export default GlobalStyle;