import React, { useState } from "react";
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
  #login {
    font-size: ${(props) => props.theme.fontSize.xl};
    font-weight: 700;
  }
`;

const Social = styled.div`
  display: flex;
  height: 3.75rem;
  width: 24rem;
  padding: 1.125rem 5.375rem 1.0625rem 5.375rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.9375rem;
  background: #fee500;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  margin-top: 4.62rem;
  img {
    margin-right: 0.56rem;
  }
  p {
    font-size: ${(props) => props.theme.fontSize.middle};
    font-weight: 500;
  }
`;

const LoginSec = styled.div`
  #line {
    width: 70%;
    margin-top: 2.7rem;
  }
  form {
    margin-top: 2.81rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  .input {
    width: 30rem;
    display: flex;
    justify-content: space-between;
  }
  p {
    font-size: ${(props) => props.theme.fontSize.middle};
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: -0.01375rem;
  }
  input {
    width: 17.53125rem;
    border: none;
    border-bottom: 1px solid rgba(53, 100, 140, 0.35);
    height: 3rem;
  }
  input:focus {
    outline: none;
  }
  #goLogin {
    display: flex;
    width: 21.875rem;
    padding: 1.125rem 0rem 1.0625rem 0rem;
    justify-content: center;
    border-radius: 0.9375rem;
    border: none;
    background: ${(props) => props.theme.color.blue};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-top: 3.69rem;
    margin-bottom: 17.87rem;
    color: #fff;
    font-size: ${(props) => props.theme.fontSize.middle};
    font-weight: 500;
  }
`;
const Warn = styled.div`
  position: absolute;
  top: 9rem;
  color: red;
  font-size: ${(props) => props.theme.fontSize.small};
`;

const Nav = styled.div`
  display: flex;
  gap: 3.31rem;
  margin-top: 3rem;
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.color.blue};
  height: 1.75rem;

  p {
    box-sizing: border-box;
    padding: 0 2px;
    margin: 0;
  }

  p:hover {
    box-sizing: border-box;
    padding-bottom: 2px;
    border-bottom: 2px solid ${(props) => props.theme.color.blue};
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [showWarn, setShowWarn] = useState(true);

  const navigateTo = (path) => {
    navigate(path);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  const handleFocus = () => {
    setShowWarn(false);
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
          <p id="message">힘들었으니 오늘 휴~ 쉬어볼까요?</p>
          <p id="login">로그인</p>
        </Header>
        <Social>
          <img
            src={`${process.env.PUBLIC_URL}/assets/login/TalkIcon.png`}
            width={"24px"}
            height={"22.6px"}
          />
          <p>카카오계정 로그인</p>
        </Social>
        <LoginSec>
          <img
            src={`${process.env.PUBLIC_URL}/assets/login/Line.png`}
            id="line"
          />
          <form method="post" onSubmit={handleSubmit}>
            <div className="input">
              <p>• 아이디</p>
              <input id="id"></input>
            </div>
            <div className="input">
              <p>• 비밀번호</p>
              <input id="pw" type="password"></input>
            </div>
            {showWarn && (
              <Warn onClick={handleFocus}>아이디 / 비밀번호를 확인하세요</Warn>
            )}
            <Nav>
              <p onClick={() => navigateTo("/find-id")}>아이디 찾기</p>
              <p onClick={() => navigateTo("/find-password")}>비밀번호 찾기</p>
              <p onClick={() => navigateTo("/sign-up")}>회원가입</p>
            </Nav>
            <button type="submit" id="goLogin">
              로그인
            </button>
          </form>
        </LoginSec>
      </div>
      <Footer />
    </Container>
  );
};

export default Login;
