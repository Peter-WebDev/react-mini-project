import styled from "styled-components";
import logotmdb from '../assets/blue_square_2.svg';
import logo from '../assets/popcorn-plus.webp';
import { Url } from "../pages/MoviePage";

const StyledFooter = styled.footer`
    background-color: rgb(44, 44, 44);
    padding: 3em 0;
`;

const StyledFooterWrapper = styled.div`
    width: min(100% - 2rem, 1064px);  
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
`;

const StyledFooterAppContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const StyledFooterTMDBContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
`;

const LogoApp = styled.img`
    width: 5em;
`;

const LogoTMDB = styled.img`
    width: 2.5em;
`;

export default function Footer() {
    return (
      <StyledFooter>
        <StyledFooterWrapper>
            <StyledFooterAppContainer>
                <LogoApp src={logo} alt="" />
                <h2>Popcorn+</h2>
            </StyledFooterAppContainer>
            <StyledFooterTMDBContainer>
                <LogoTMDB src={logotmdb} alt="" />
                <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
            </StyledFooterTMDBContainer>
                <p>Made with ❤️ by Peter Warholm. 2025-02-28. | <Url href="https://github.com/Peter-WebDev/">GitHub</Url></p>
        </StyledFooterWrapper>
      </StyledFooter>
    );
}