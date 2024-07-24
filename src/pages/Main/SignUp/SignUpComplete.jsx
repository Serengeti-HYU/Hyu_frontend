import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Footer from "../../../components/footer";
import NoLoginHeader from "../../../components/NoLoginHeader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  margin-top: 10rem;
  p {
    margin: 0;
  }
  #message {
    color: ${(props) => props.theme.color.blue};
    font-size: ${(props) => props.theme.fontSize.middle};
  }
`;

const SignUpComplete = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <NoLoginHeader />
      <div>
        <Header>
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo/FaceLogoBlue.png`}
            width={"100px"}
            height={"100px"}
          />
          <p id="message">휴~ 하고 한숨 돌리러 가볼까요?</p>
        </Header>
      </div>
      <Footer />
    </Container>
  );
};

export default SignUpComplete;
