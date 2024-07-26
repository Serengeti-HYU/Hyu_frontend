import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import LoginHeader from "../../components/LoginHeader";
import Footer from "../../components/footer";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const Main = styled.div`
  margin: auto;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 35rem;
`;

const Logo = styled.img`
  margin: auto;
`;

const Title = styled.h1`
  margin-top: 2rem;
  color: #35648c;
  font-size: 40px;
  font-weight: 700;
`;

const TestResult = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <Container>
      <LoginHeader />
      <Main>
        <Logo
          src={`${process.env.PUBLIC_URL}/assets/logo/LogoGra.png`}
          width="60px"
        />
        <Title>성격 검사 진단</Title>
      </Main>
      <Footer />
    </Container>
  );
};
export default TestResult;
