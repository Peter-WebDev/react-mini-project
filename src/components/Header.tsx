import styled from "styled-components";
import logo from '../assets/popcorn-plus.webp';

const StyledHeader = styled.header`
    background-color: #2C2C2C;
`;

const StyledHeaderDiv = styled.div`
    width: min(100% - 2rem, 1064px);  
    margin-inline: auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 1.5em 0;
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
        <StyledHeaderDiv>
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
        </StyledHeaderDiv>
      </StyledHeader>
    );
}