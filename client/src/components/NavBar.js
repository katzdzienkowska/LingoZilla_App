import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background: #fcda7c;
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
`;

const StyledLink = styled(Link)`
  & {
    color: Blue;
    text-decoration: none;
    margin: 1rem;
    position: relative;
    font-size: 2rem;
    transition: all 150ms ease-in-out;
  }
  &:hover {
    color: red;
  }
`;

const NavBar = () => {
  return (
    <Container>
      <NavLinks>
        <li>
          <StyledLink to="/"> Home </StyledLink>
        </li>
        <NavLinks>
          <StyledLink to="/lesson1"> Lesson 1 </StyledLink>
        </NavLinks>
        <NavLinks>
          <StyledLink to="/lesson2"> Lesson 2 </StyledLink>
        </NavLinks>
        <NavLinks>
          <StyledLink to="/lesson3"> Lesson 3 </StyledLink>
        </NavLinks>
        <NavLinks>
          <StyledLink to="/quiz"> Quiz </StyledLink>
        </NavLinks>
        <li>
          <StyledLink to="/testimonies"> Testimonies </StyledLink>
        </li>
      </NavLinks>
    </Container>
  );
};

export default NavBar;
