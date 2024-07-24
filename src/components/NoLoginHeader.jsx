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
  justify-content: space-between;

  @media (max-width: 768px) {
    padding-left: 1rem;
    height: auto;
    flex-direction: column;
    align-items: flex-start;
  }

  #container {
    display: flex;
    gap: 4.3rem;
    align-items: center;

    @media (max-width: 768px) {
      padding-left: 0;
      gap: 1rem;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
    }
  }

  button {
    background: none;
    border: none;
    color: white;
    font-size: inherit;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  #loginNav {
    font-weight: 700;
    font-size: 0.875rem;
    border: 1px solid white;
    border-radius: 50%;
    width: 3.125rem;
    height: 3.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 4.56rem;

    @media (max-width: 768px) {
      width: auto;
      height: auto;
      padding: 0.5rem 1rem;
      border-radius: 1rem;
    }
  }
`;

function NoLoginHeader() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <HeaderContainer>
      <img
        src={`${process.env.PUBLIC_URL}/assets/logo/FaceLogoWhite.png`}
        width={"50px"}
        height={"50px"}
        id="logo"
      />
      <div id="container">
        <button
          onClick={() => navigateTo("/newsletter-page")}
          id="newsletter-page"
        >
          휴~레터
        </button>
        <button
          onClick={() => navigateTo("/PersonalityTest")}
          id="PersonalityTest"
        >
          맞춤형 쉼
        </button>
        <button onClick={() => navigateTo("/Record1")} id="Record1">
          감정 기록
        </button>
        <div id="loginNav">log in</div>
      </div>
    </HeaderContainer>
  );
}

export default NoLoginHeader;
