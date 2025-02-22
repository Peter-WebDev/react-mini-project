import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* Basic resets and global styling */
    body {
        background-color: #5A5A5A;
        font-family: system-ui, sans-serif;
        margin: 0;
        padding: 0;
    }
    main {
        width: min(100% - 2rem, 1400px);
        margin-inline: auto;
    }
`;

export default GlobalStyle;