import styled from "styled-components";
import logo from '../assets/popcorn-plus.webp';

const StyledHeader = styled.header`
    display: flex;
    background-color: #2C2C2C;
    padding: 1.5em;
`;

const StyledUl = styled.ul`
    display: flex;
    gap: 1rem;
    list-style: none;
`;

const Logo = styled.img`
    height: 50px;
    margin-right: 1rem;
`;

export default function Header() {
    return (
        <StyledHeader>
          <Logo src={logo} alt="" />
          <nav>
            <StyledUl>
              <li><a href="#">Home</a></li>
              <li><a href="#">Movies</a></li>
              <li><a href="#">Series</a></li>
              <li><a href="#">Popular</a></li>
              <li><a href="#">My list</a></li>
            </StyledUl>
          </nav>
        </StyledHeader>
    );
}