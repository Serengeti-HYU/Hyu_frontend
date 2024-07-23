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
  width: 23rem;
  height: 3.75rem;
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

const SignupSec = styled.div`
  #line {
    width: 60.9375rem;
    height: 1.5625rem;
    margin-top: 4rem;
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

const SignUp = () => {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    navigate("/");
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
          <p id="message">휴~ 하고 한숨 돌리고 싶지 않으신가요?</p>
          <p id="login">회원가입</p>
        </Header>
        <Social>
          <img
            src={`${process.env.PUBLIC_URL}/assets/login/TalkIcon.png`}
            width={"24px"}
            height={"22.6px"}
          />
          <p>카카오계정 회원가입</p>
        </Social>
        <SignupSec>
          <img
            src={`${process.env.PUBLIC_URL}/assets/login/Line.png`}
            id="line"
          />
          <form method="post" onSubmit={handleSubmit}>
            <div className="input">
              <p>• 이름</p>
              <input id="name"></input>
            </div>
            <div className="input">
              <p>• 생년월일</p>
              <input id="birth" type="password"></input>
            </div>
            <div className="input">
              <p>• 아이디</p>
              <input id="id" type="password"></input>
            </div>
            <div className="input">
              <p>• 비밀번호</p>
              <input id="pw" type="password"></input>
            </div>
            <div className="input">
              <p>• 전화번호</p>
              <input id="phone" type="password"></input>
            </div>
            <div className="input">
              <p>• 이메일</p>
              <input id="email" type="password"></input>
            </div>
            <button type="submit" id="goLogin">
              회원가입 완료
            </button>
          </form>
        </SignupSec>
      </div>
      <Footer />
    </Container>
  );
};

export default SignUp;
