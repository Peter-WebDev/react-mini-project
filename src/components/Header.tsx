import { NavLink } from "react-router";
import styled from "styled-components";
import logo from '../assets/popcorn-plus.webp';

const StyledHeader = styled.header`
    background-color: #2C2C2C;
`;

const StyledHeaderDiv = styled.div`
    width: min(100% - 2rem, 1064px);  
    margin-inline: auto;
    display: flex;
    gap: 2rem;
    align-items: center;
    padding: 1.5em 0;

    @media (width <= 40rem) {
      flex-direction: column;
      justify-content: center;
    }
`;

const StyledUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    list-style: none;

    @media (width <= 26.875rem) {
      flex-direction: column;
      align-items: center;
    }
`;

const StyledLink = styled(NavLink)`
    font-weight: 600;
    padding: 0.5em 1.75em;
    border: 0;
    border-radius: 0.5em;
    background-color: #262727;
    color: #d6dce2;
    text-decoration: none;
    transition: background-color 0.2s, color 0.2s;

    &:hover,
    &:focus-visible {
      background-color: #d6dce2;
      color: #262727;
    }

    &.active {
      background-color: white;
      color: black;
    }
`;

const Logo = styled.img`
    height: 50px;
`;

export default function Header() {
    return (
      <StyledHeader>
        <StyledHeaderDiv>
          <Logo src={logo} alt="" />
          <nav>
            <StyledUl>
              <li><StyledLink to='/'>Home</StyledLink></li>
              <li><StyledLink to='/popular'>Popular</StyledLink></li>
              <li><StyledLink to='/my-list'>My list</StyledLink></li>
            </StyledUl>
          </nav>
        </StyledHeaderDiv>
      </StyledHeader>
    );
}