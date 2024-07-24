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

const Content = styled.div`
  margin-top: 6.63rem;
  margin-bottom: 9.81rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: 0;
  }
  #message {
    margin: 0;
    margin-top: 5.69rem;
    font-weight: 300;
    font-size: ${(props) => props.theme.fontSize.middle};
  }
  #bolder {
    color: ${(props) => props.theme.color.blue};
    font-weight: 700;
  }
  #bold {
    color: ${(props) => props.theme.color.blue};
    font-weight: 500;
  }
  #warn {
    margin-top: 1.75rem;
    font-size: ${(props) => props.theme.fontSize.small};
    font-weight: 300;
  }
`;
const Buttons = styled.div`
  margin-top: 3.19rem;
  display: flex;
  flex-direction: row;
  gap: 3.44rem;
  .button {
    display: flex;
    width: 16.9375rem;
    padding: 1.125rem 0rem;
    justify-content: center;
    border-radius: 0.9375rem;
    background: ${(props) => props.theme.color.blue};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #fff;
    font-size: ${(props) => props.theme.fontSize.middle};
  }
`;

const SignUpComplete = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

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
        <Content>
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo/LogoGra.png`}
            width={"131px"}
            height={"147px"}
          />
          <p id="message">
            ‘<span id="bolder">휴</span>’는 00님의 맞춤형 쉼을 추천드리기 위해서{" "}
            <p>00님의 성격을 파악해보려고 합니다!</p>
            <p id="bold">
              성격 검사 진단을 통해 맞춤형 쉼을 추천받아 보실까요?
            </p>
          </p>
          <Buttons>
            <div className="button" onClick={() => navigateTo("/-test")}>
              건너뛰기
            </div>
            <div
              className="button"
              onClick={() => navigateTo("/personality-test")}
            >
              성격 검사 진단받기
            </div>
          </Buttons>
          <p id="warn">
            성격 검사 진단을 받지 않은 사용자는 맞춤형 쉼을 추천받지 못 합니다.
          </p>
        </Content>
      </div>
      <Footer />
    </Container>
  );
};

export default SignUpComplete;
