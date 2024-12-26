import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Footer from "../../../components/footer";
import NoLoginHeader from "../../../components/NoLoginHeader";
import axios from "axios";

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

  const [formData, setFormData] = useState({
    name: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    id: "",
    password: "",
    phoneNumber: "",
    email: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [domain, setDomain] = useState("");
  const [domainInput, setDomainInput] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleDomainChange = (e) => {
    setDomain(e.target.value);
    if (e.target.value !== "type") setDomainInput("");
  };

  const handlePhoneChange = (e, part) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setFormData((prev) => {
      const phoneParts = prev.phoneNumber.split("-");
      phoneParts[part] = value;
      return { ...prev, phoneNumber: phoneParts.join("-") };
    });
  };

  const validateForm = () => {
    const {
      name,
      birthYear,
      birthMonth,
      birthDay,
      id,
      password,
      phoneNumber,
      email,
    } = formData;

    if (
      !name ||
      !birthYear ||
      !birthMonth ||
      !birthDay ||
      !id ||
      !password ||
      !phoneNumber ||
      !email
    ) {
      setError("모든 필드를 입력해주세요.");
      return false;
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,12}$/;
    if (!passwordRegex.test(password)) {
      setError("비밀번호는 8~12자, 영문+숫자 조합이어야 합니다.");
      return false;
    }

    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return false;
    }

    const phoneRegex = /^\d{3}-\d{3,4}-\d{4}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setError("유효한 전화번호를 입력해주세요. (예: 010-1234-5678)");
      return false;
    }

    if (!email.includes("@") || email.split("@").length !== 2) {
      setError("유효한 이메일 주소를 입력해주세요.");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post(`/user/signup`, formData);
      console.log("response:", response.data);
      navigate("/sign-up-complete");
    } catch (error) {
      console.error("회원가입 실패:", error);
      setError("회원가입 중 문제가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <Container>
      <NoLoginHeader />
      <div>
        <Header>
          <p id="message">휴~ 하고 한숨 돌리고 싶지 않으신가요?</p>
          <p id="login">회원가입</p>
        </Header>
        <Social>
          <p>카카오계정 회원가입</p>
        </Social>
        <SignupSec>
          <form onSubmit={handleSubmit}>
            <div className="input">
              <p className="label">• 이름</p>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input">
              <p className="label">• 생년월일</p>
              <input
                id="birthYear"
                type="text"
                value={formData.birthYear}
                onChange={handleChange}
                required
              />
              <input
                id="birthMonth"
                type="text"
                value={formData.birthMonth}
                onChange={handleChange}
                required
              />
              <input
                id="birthDay"
                type="text"
                value={formData.birthDay}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input">
              <p className="label">• 아이디</p>
              <input
                id="id"
                type="text"
                value={formData.id}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input">
              <p className="label">• 비밀번호</p>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input">
              <p className="label">• 비밀번호 확인</p>
              <input
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
            </div>
            <div className="input">
              <p className="label">• 전화번호</p>
              <select onChange={(e) => handlePhoneChange(e, 0)}>
                <option value="">선택</option>
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
              </select>
              <p className="hypen">-</p>
              <input
                className="phone"
                type="tel"
                maxLength="4"
                onChange={(e) => handlePhoneChange(e, 1)}
              />
              <p className="hypen">-</p>
              <input
                className="phone"
                type="tel"
                maxLength="4"
                onChange={(e) => handlePhoneChange(e, 2)}
              />
            </div>

            <div className="input">
              <p className="label">• 이메일 </p>
              <input
                id="email"
                type="text"
                value={formData.email}
                onChange={handleChange}
                placeholder="example"
                required
              />
              <p id="at">@</p>
              <input
                type="text"
                value={domain === "type" ? domainInput : domain}
                onChange={(e) => setDomainInput(e.target.value)}
                disabled={domain !== "type"}
                required
              />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button id="goLogin" type="submit">
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
