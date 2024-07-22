import styled from "styled-components";

const HeaderContainer = styled.div`
  background: ${(props) => props.theme.color.blue};
  font-size: ${(props) => props.theme.fontSize.small};
  color: white;
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  padding-left: 5.94rem;

  #container {
    display: flex;
    gap: 4.3rem;
    padding-left: 48.38rem;
    align-items: center;
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
  }
`;

function NoLoginHeader() {
  return (
    <HeaderContainer>
      <img
        src={`${process.env.PUBLIC_URL}/assets/logo/FaceLogoWhite.png`}
        width={"50px"}
        height={"50px"}
        id="logo"
      />
      <div id="container">
        <div id="letter">휴~레터</div>
        <div id="custiom">맞춤형 쉼</div>
        <div id="emotion">감정 기록</div>
        <div id="login">log in</div>
      </div>
    </HeaderContainer>
  );
}

export default NoLoginHeader;
