import React, { useRef, useState } from "react";
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
    width: 70vw;
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
    width: 50rem;
    display: flex;
    position: relative;
    margin-top: 1rem;
  }
  .label {
    margin-right: 8rem;
    width: 8rem;
    text-align: left;
  }
  select {
    width: 9.25rem;
    border: none;
    border-bottom: 1px solid rgba(53, 100, 140, 0.35);
    height: 3rem;
    outline: none;
    margin-right: 1.6rem;
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
  #pwGuide {
    color: ${(props) => props.theme.color.blue};
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: -0.00825rem;
    margin-left: 0.91rem;
  }
  #warn {
    position: absolute;
    color: red;
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: -0.00825rem;
    margin: 0;
    top: 3rem;
    left: 16rem;
  }
  .phone {
    width: 6rem;
  }
  .hypen,
  #at {
    font-size: ${(props) => props.theme.fontSize.small};
    color: ${(props) => props.theme.color.blue};
    font-weight: 300;
    margin: 0 0.5rem;
  }
  .email {
    width: 11.375rem;
  }
  #warn2 {
    color: red;
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: -0.00825rem;
    margin: 0;
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
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
`;

const SignUp = () => {
  const navigate = useNavigate();
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const [domain, setDomain] = useState("type");
  const [domainInput, setDomainInput] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [phone3, setPhone3] = useState("");

  const handleInputChange = (e, nextRef) => {
    if (e.target.value.length >= e.target.maxLength) {
      nextRef.current.focus();
    }
  };

  const handleDomainChange = (event) => {
    const value = event.target.value;
    setDomain(value);
    if (value === "type") {
      setDomainInput("");
    }
  };

  const validatePassword = (password) => {
    const minLength = 8;
    const maxLength = 12;
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,12}$/;
    return regex.test(password);
  };

  const handlePhone2Change = (e) => {
    setPhone2(e.target.value);
    handleInputChange(e, inputRef2);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (!validatePassword(password)) {
      alert("비밀번호는 8자 이상 12자 이하의 영문과 숫자 조합이어야 합니다.");
      return;
    }
    navigate("/");
  };

  const isFormValid = () => {
    return (
      name &&
      birthYear &&
      birthMonth &&
      birthDay &&
      id &&
      password &&
      confirmPassword &&
      phone1 &&
      phone2 &&
      phone3 &&
      email &&
      domainInput &&
      password === confirmPassword &&
      validatePassword(password)
    );
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
            alt="Logo"
          />
          <p id="message">휴~ 하고 한숨 돌리고 싶지 않으신가요?</p>
          <p id="login">회원가입</p>
        </Header>
        <Social>
          <img
            src={`${process.env.PUBLIC_URL}/assets/login/TalkIcon.png`}
            width={"24px"}
            height={"22.6px"}
            alt="Kakao Icon"
          />
          <p>카카오계정 회원가입</p>
        </Social>
        <SignupSec>
          <img
            src={`${process.env.PUBLIC_URL}/assets/login/Line.png`}
            id="line"
            alt="Line Separator"
          />
          <form method="post" onSubmit={handleSubmit}>
            <div className="input">
              <p className="label">• 이름</p>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input">
              <p className="label">• 생년월일</p>
              <select
                id="birth-year"
                value={birthYear}
                onChange={(e) => setBirthYear(e.target.value)}
                required
              >
                <option value="">년</option>
                {Array.from({ length: 100 }, (_, i) => (
                  <option key={i} value={2024 - i}>
                    {2024 - i}
                  </option>
                ))}
              </select>
              <select
                id="birth-month"
                value={birthMonth}
                onChange={(e) => setBirthMonth(e.target.value)}
                required
              >
                <option value="">월</option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <select
                id="birth-day"
                value={birthDay}
                onChange={(e) => setBirthDay(e.target.value)}
                required
              >
                <option value="">일</option>
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="input">
              <p className="label">• 아이디</p>
              <input
                id="id"
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
              />
            </div>
            <div className="input">
              <p className="label">• 비밀번호</p>
              <input
                id="pw"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <p id="pwGuide">
                8자~12자 이내 영문과 숫자 조합으로 입력해주세요.
              </p>
            </div>
            <div className="input">
              <p className="label">• 비밀번호 확인</p>
              <input
                id="pw-confirm"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <p
                id="warn"
                style={{
                  visibility:
                    password !== confirmPassword || !validatePassword(password)
                      ? "visible"
                      : "hidden",
                }}
              >
                {password !== confirmPassword
                  ? "비밀번호가 일치하지 않습니다."
                  : "비밀번호는 8자 이상 12자 이하의 영문과 숫자 조합이어야 합니다."}
              </p>
            </div>
            <div className="input">
              <p className="label">• 전화번호</p>
              <select
                className="phone"
                onChange={(e) => setPhone1(e.target.value)}
              >
                <option value="">선택</option>
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
                <option value="017">017</option>
                <option value="018">018</option>
                <option value="019">019</option>
              </select>
              <p className="hypen">-</p>
              <input
                className="phone"
                type="tel"
                maxLength="4"
                ref={inputRef1}
                onChange={handlePhone2Change}
              ></input>
              <p className="hypen">-</p>
              <input
                className="phone"
                type="tel"
                maxLength="4"
                ref={inputRef2}
                onChange={(e) => setPhone3(e.target.value)}
              ></input>
            </div>

            <div className="input">
              <p className="label">• 이메일 </p>
              <input
                className="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <p id="at">@</p>
              <input
                className="email"
                type="text"
                value={domain === "type" ? domainInput : domain}
                onChange={(e) => setDomainInput(e.target.value)}
                disabled={domain !== "type"}
                required
              />
              <select onChange={handleDomainChange} value={domain}>
                <option value="type">직접 입력</option>
                <option value="naver.com">naver.com</option>
                <option value="gmail.com">gmail.com</option>
                <option value="daum.net">daum.net</option>
                <option value="hanmail.net">hanmail.net</option>
              </select>
            </div>
            <p
              id="warn2"
              style={{ visibility: isFormValid() ? "hidden" : "visible" }}
            >
              모든 정보를 입력해주세요
            </p>

            <button type="submit" id="goLogin" disabled={!isFormValid()}>
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
