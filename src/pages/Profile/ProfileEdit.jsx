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

  const [formData, setFormData] = useState({
    name: "",
    birth: "",
    username: "",
    password: "",
    phoneNumber: "",
    email: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [domain, setDomain] = useState("");
  const [domainInput, setDomainInput] = useState("");
  const [error, setError] = useState("");

  const token = localStorage.getItem("access_token");

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

  const validateForm = (data) => {
    const { name, birth, username, password, phoneNumber, email } = data;

    if (!name || !birth || !username || !password || !phoneNumber || !email) {
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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("유효한 이메일 주소를 입력해주세요.");
      return false;
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(birth)) {
      setError("생년월일은 YYYY-MM-DD 형식으로 입력해주세요.");
      return false;
    }

    setError("");
    return true;
  };

  const handleBirthChange = (e, part) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setFormData((prev) => {
      const birthParts = prev.birth.split("-");
      if (birthParts.length !== 3) {
        birthParts[0] = "";
        birthParts[1] = "";
        birthParts[2] = "";
      }
      if (part === "year") birthParts[0] = value.slice(0, 4);
      if (part === "month") birthParts[1] = value.slice(0, 2);
      if (part === "day") birthParts[2] = value.slice(0, 2);

      return { ...prev, birth: birthParts.join("-") };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = `${formData.email}@${
      domain === "type" ? domainInput : domain
    }`;
    const updatedFormData = { ...formData, email };

    if (!validateForm(updatedFormData)) return;
    try {
      const response = await axios.patch(`/user/info-modify`, updatedFormData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("response:", response.data);
      navigate("/mypage");
    } catch (error) {
      console.error("수정 실패:", error);
      setError("수정 중 문제가 발생했습니다. 다시 시도해주세요.");
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
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <p className="label">• 생년월일</p>
            <input
              type="text"
              maxLength="4"
              placeholder="YYYY"
              value={formData.birth.split("-")[0] || ""}
              onChange={(e) => handleBirthChange(e, "year")}
              required
            />
            <input
              type="text"
              maxLength="2"
              placeholder="MM"
              value={formData.birth.split("-")[1] || ""}
              onChange={(e) => handleBirthChange(e, "month")}
              required
            />
            <input
              type="text"
              maxLength="2"
              placeholder="DD"
              value={formData.birth.split("-")[2] || ""}
              onChange={(e) => handleBirthChange(e, "day")}
              required
            />
          </div>

          <div className="input">
            <p className="label">• 아이디</p>
            <input
              id="username"
              type="text"
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
            <select onChange={handleDomainChange} value={domain}>
              <option value="type">직접 입력</option>
              <option value="naver.com">naver.com</option>
              <option value="gmail.com">gmail.com</option>
              <option value="daum.net">daum.net</option>
              <option value="hanmail.net">hanmail.net</option>
            </select>
          </div>
          {error && <div style={{ color: "red" }}>{error}</div>}
          <button id="goLogin" type="submit">
            수정하기
          </button>
        </form>
      </Sec>
      <Footer />
    </Container>
  );
};

export default ProfileEdit;
