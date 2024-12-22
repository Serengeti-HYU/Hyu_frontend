import React, { useState } from "react";
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
  #message {
    color: ${(props) => props.theme.color.blue};
    font-size: ${(props) => props.theme.fontSize.middle};
    margin-top: 0.94rem;
  }
`;

const Sec = styled.div`
  position: relative;
  form {
    margin-top: 2.81rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .input {
    width: 45rem;
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
  #at {
    font-size: ${(props) => props.theme.fontSize.small};
    color: ${(props) => props.theme.color.blue};
    font-weight: 300;
    margin: 0 0.5rem;
  }
  .email {
    width: 11.375rem;
  }
  #warn {
    position: absolute;
    font-size: ${(props) => props.theme.fontSize.middle};
    margin: 0;
    bottom: 23rem;
    left: 50%;
    transform: translate(-50%);
  }
  #go {
    display: flex;
    width: 21.875rem;
    padding: 1.125rem 0rem 1.0625rem 0rem;
    justify-content: center;
    border-radius: 0.9375rem;
    border: none;
    background: ${(props) => props.theme.color.blue};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin-top: 6rem;
    margin-bottom: 17.87rem;
    color: #fff;
    font-size: ${(props) => props.theme.fontSize.middle};
    font-weight: 500;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
`;

const VerifyBeforeEdit = () => {
  const navigate = useNavigate();
  const [domain, setDomain] = useState("");
  const [domainInput, setDomainInput] = useState("");
  const [success, setSuccess] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    pw: "",
    email: "",
  });

  const token = localStorage.getItem("access_token"); //토큰 가져오기
  console.log("Token: ", token);

  const handleDomainChange = (e) => {
    setDomain(e.target.value);
    if (e.target.value !== "type") {
      setDomainInput("");
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const completeEmail =
      domain === "type"
        ? `${formData.email}@${domainInput}`
        : `${formData.email}@${domain}`;

    const requestData = {
      username: formData.name,
      password: formData.pw,
      email: completeEmail,
    };

    try {
      const response = await axios.post("/user/info-auth", requestData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Response:", response.data);

      // 성공
      if (response.data.success) {
        setSuccess(true);
        navigate("/profile-edit"); // 성공하면면 프로필 수정 페이지로 이동
      } else {
        setSuccess(false);
      }
    } catch (error) {
      console.error("API 요청 실패:", error);
      setSuccess(false);
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
          <p id="message">개인 정보 수정을 위해서 본인 확인이 필요합니다.</p>
        </Header>
        <Sec>
          <form method="post" onSubmit={handleSubmit}>
            <div className="input">
              <p className="label">• 이름</p>
              <input
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input">
              <p className="label">• 비밀번호</p>
              <input
                id="pw"
                type="password"
                value={formData.pw}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input">
              <p className="label">• 이메일</p>
              <input
                className="email"
                id="email"
                type="text"
                value={formData.email}
                onChange={handleInputChange}
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
            <button type="submit" id="go">
              수정하기
            </button>
          </form>
          {success !== null && (
            <p id="warn">{success ? "" : "회원 정보가 일치하지 않습니다."}</p>
          )}
        </Sec>
      </div>
      <Footer />
    </Container>
  );
};

export default VerifyBeforeEdit;
