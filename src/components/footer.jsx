import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: linear-gradient(to right, #365b86, #e9ebdb);
  color: white;
  font-family: Arial, sans-serif;
  height: 100px;
`;

const Links = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: #365b86;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <img
        src={`${process.env.PUBLIC_URL}/assets/logo/LogoWhite.png`}
        width={"50px"}
        height={"50px"}
        id="logo"
      />
      <Links>
        <a href="#privacy-policy">개인정보처리방침</a>
        <a href="#terms-of-use">이용약관</a>
      </Links>
    </FooterContainer>
  );
}

export default Footer;
