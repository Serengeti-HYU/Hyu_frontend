import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Footer from "../../../components/footer";
import NoLoginHeader from "../../../components/LoginHeader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
`;

const Login = () => {
  return (
    <Container>
      <NoLoginHeader />
      <Content />
      <Footer />
    </Container>
  );
};

export default Login;
