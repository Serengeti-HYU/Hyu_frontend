import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.div`
  background: ${(props) => props.theme.color.blue};
  font-size: ${(props) => props.theme.fontSize.small};
  color: white;
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  padding-left: 5.94rem;

  @media (max-width: 768px) {
    padding-left: 1rem;
    height: auto;
    flex-direction: column;
    align-items: flex-start;
  }

  #container {
    display: flex;
    gap: 1rem; /* 간격을 조절하여 화면 크기에 맞게 조절 */
    padding-left: 68rem; /* 좌우 여백 조절 */
    align-items: center;
    flex-wrap: wrap; /* 버튼들이 줄어들면서 줄 바꿈되도록 설정 */
  }

  button {
    background: none;
    border: none;
    color: white;
    font-size: inherit;
    cursor: pointer;
    white-space: nowrap; /* 버튼 글씨가 줄바꿈되지 않도록 설정 */

    &:focus {
      outline: none;
    }
  }

  #login {
    font-weight: 700;
    font-size: 0.875rem;
    border: 1px solid white;
    border-radius: 50%;
    width: 3.125rem;
    height: 3.125rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      width: auto;
      height: auto;
      padding: 0.5rem 1rem;
      border-radius: 1rem;
    }
  }
`;

function LoginHeader() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <HeaderContainer>
      <img
        src={`${process.env.PUBLIC_URL}/assets/logo/LogoWhite.png`}
        width={"50px"}
        height={"50px"}
        id="logo"
      />
      <div id="container">
        <button onClick={() => navigateTo("/NewletterPage")} id="NewletterPage">
          휴~레터
        </button>
        <button onClick={() => navigateTo("/PersonalityTest")} id="PersonalityTest">
          맞춤형 쉼
        </button>
        <button onClick={() => navigateTo("/Record1")} id="Record1">
          감정 기록
        </button>
        <img
          src={`${process.env.PUBLIC_URL}/assets/logo/FaceLogoWhite.png`}
          width={"50px"}
          height={"50px"}
          id="logo"
        />
      </div>
    </HeaderContainer>
  );
}

export default LoginHeader;
