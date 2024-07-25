import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Footer from "../../components/footer";
import LoginHeader from "../../components/LoginHeader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.div`
  margin-top: 10rem;
  p {
    margin: 0;
  }
  #verify {
    font-size: ${(props) => props.theme.fontSize.xl};
    font-weight: 700;
    margin-top: 1.63rem;
  }
`;

const Sec = styled.div`
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

const ProfileEdit = () => {
  const navigate = useNavigate();
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [domain, setDomain] = useState("");
  const [domainInput, setDomainInput] = useState("");
  const [success, setSuccess] = useState(null);
  const validatePassword = (password) => {
    const minLength = 8;
    const maxLength = 12;
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,12}$/;
    if (password.length < minLength || password.length > maxLength) {
      return false;
    }
    return regex.test(password);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validatePassword(password)) {
      console.log("비밀번호 규칙 틀림");
      return;
    } else if (password !== confirmPassword) {
      console.log("비밀번호 다름");
      return;
    }
    navigate("/sign-up-complete");
  };

  const handleDomainChange = (e) => {
    setDomain(e.target.value);
    if (e.target.value !== "type") {
      setDomainInput("");
    }
  };
  const handlePhone2Change = (e) => {
    if (e.target.value.length >= e.target.maxLength) {
      inputRef2.current.focus();
    }
  };

  return (
    <Container>
      <LoginHeader />
      <div>
        <Header>
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo/FaceLogoBlue.png`}
            width={"100px"}
            height={"100px"}
          />
          <p id="verify">개인 정보 수정</p>
        </Header>
        <Sec>
          <form method="post" onSubmit={handleSubmit}>
            <div className="input">
              <p className="label">• 이름</p>
              <input id="name" type="text" required />
            </div>
            <div className="input">
              <p className="label">• 생년월일</p>
              <select id="birth-year" required>
                <option value="">년</option>
                {Array.from({ length: 100 }, (_, i) => (
                  <option key={i} value={2024 - i}>
                    {2024 - i}
                  </option>
                ))}
              </select>
              <select id="birth-month" required>
                <option value="">월</option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <select id="birth-day" required>
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
              <input id="id" type="text" required />
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
              <select className="phone">
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
              />
              <p className="hypen">-</p>
              <input
                className="phone"
                type="tel"
                maxLength="4"
                ref={inputRef2}
              />
            </div>

            <div className="input">
              <p className="label">• 이메일 </p>
              <input className="email" type="text" required />
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

            <button type="submit" id="goLogin">
              저장하기
            </button>
          </form>
          {success !== null && (
            <p id="warn">{success ? "" : "회원 정보가 맞지 않습니다."}</p>
          )}
        </Sec>
      </div>
      <Footer />
    </Container>
  );
};

export default ProfileEdit;
