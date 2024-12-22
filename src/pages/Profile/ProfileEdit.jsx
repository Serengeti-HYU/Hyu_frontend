import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  const [domain, setDomain] = useState("");
  const [domainInput, setDomainInput] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    id: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    email: "",
  });
  const [success, setSuccess] = useState(null);

  const token = localStorage.getItem("access_token");

  const handleDomainChange = (e) => {
    setDomain(e.target.value);
    if (e.target.value !== "type") setDomainInput("");
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    const completeEmail =
      domain === "type"
        ? `${formData.email}@${domainInput}`
        : `${formData.email}@${domain}`;
    const birthDate = `${formData.birthYear}-${formData.birthMonth.padStart(
      2,
      "0"
    )}-${formData.birthDay.padStart(2, "0")}`;

    const requestData = {
      name: formData.name,
      birth: birthDate,
      username: formData.username,
      password: formData.password,
      phoneNumber: formData.phoneNumber,
      email: completeEmail,
    };

    try {
      const response = await axios.post("/user/info-modify", requestData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        setSuccess(true);
        navigate("/mypage");
      } else {
        setSuccess(false);
      }
    } catch (error) {
      console.error(
        "API Request Failed:",
        error.response?.data || error.message
      );
      setSuccess(false);
    }
  };

  return (
    <Container>
      <LoginHeader />
      <Header>
        <img
          src={`${process.env.PUBLIC_URL}/assets/logo/FaceLogoBlue.png`}
          width={"100px"}
          height={"100px"}
        />
        <p id="verify">정보 수정</p>
        <p id="message">정보를 수정하려면 아래 양식을 작성해주세요.</p>
      </Header>
      <Sec>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <p className="label">• 이름</p>
            <input
              id="name"
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
              id="username"
              value={formData.username}
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
              id="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <p className="label">• 전화번호</p>
            <input
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <p className="label">• 이메일</p>
            <input
              id="email"
              value={formData.email}
              onChange={handleChange}
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
            <select onChange={handleDomainChange} value={domain}>
              <option value="type">직접 입력</option>
              <option value="naver.com">naver.com</option>
              <option value="gmail.com">gmail.com</option>
              <option value="daum.net">daum.net</option>
              <option value="hanmail.net">hanmail.net</option>
            </select>
          </div>
          <button type="submit" id="goLogin">
            수정하기
          </button>
        </form>
        {success !== null && (
          <p id="warn">{success ? "" : "수정에 실패했습니다."}</p>
        )}
      </Sec>
      <Footer />
    </Container>
  );
};

export default ProfileEdit;
