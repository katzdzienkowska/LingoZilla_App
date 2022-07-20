import React from "react";
import styled from "styled-components";
import cutezilla from "../images/cutezilla.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  background: #fcda7c;
`;

const Heading = styled.h1`
  font-size: 10rem;
  margin-top: 50px;
`;

const Header = () => {
  return (
    <Container>
      <img src={cutezilla} alt="LingoZilla logo" width={300} />
      <Heading>LingoZilla</Heading>
    </Container>
  );
};

export default Header;
