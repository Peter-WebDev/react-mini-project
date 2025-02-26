import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* Basic resets and global styling */
    /* @link https://utopia.fyi/type/calculator?c=320,16,1.2,1064,20,1.333,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */
    :root {
    --step--2: clamp(0.6944rem, 0.6906rem + 0.0194vw, 0.7035rem);
    --step--1: clamp(0.8333rem, 0.7884rem + 0.2245vw, 0.9377rem);
    --step-0: clamp(1rem, 0.8925rem + 0.5376vw, 1.25rem);
    --step-1: clamp(1.2rem, 0.9995rem + 1.0027vw, 1.6663rem);
    --step-2: clamp(1.44rem, 1.104rem + 1.6798vw, 2.2211rem);
    --step-3: clamp(1.728rem, 1.1978rem + 2.6511vw, 2.9607rem);
    --step-4: clamp(2.0736rem, 1.268rem + 4.0281vw, 3.9467rem);
    --step-5: clamp(2.4883rem, 1.2958rem + 5.9626vw, 5.2609rem);
    }

    *, *:before, *:after {
        box-sizing: border-box;
    }
    * {
        margin: 0;
        padding: 0;
    
    }
    body {
        background-color: rgb(35, 35, 35);
        color: rgb(214, 220, 226);
        font-family: system-ui, sans-serif;
        margin: 0;
        padding: 0;
    }

    main {
        width: min(100% - 4rem, 1064px);
        margin-inline: auto;
        margin-block: 2rem;
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
    
    h1 {
        font-size: var(--step-4);
        font-weight: 800;
    }
    
    h2 {
        font-size: var(--step-3);
    }

    h3 {
        font-size: var(--step-2);
    }

    h4 {
        font-size: var(--step-1);
    }

    p {
        font-size: var(--step-0);
        line-height: 1.5;
    }
`;

export default GlobalStyle;