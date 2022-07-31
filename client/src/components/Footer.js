import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
  background: #ffef9f;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 3rem;
`;

const Heading = styled.h1`
  font-size: 19px;
  color: #3d405b
`;

const Footer = () => {
  return (
    <FooterStyled>
      <Heading>
        LingoZilla by Moath Al-Zoubi, Jack Carmichael, Sandy Yu and Kat Zdzienkowska
      </Heading>
    </FooterStyled>
  );
};

export default Footer;
