import styled from "styled-components";

const HeaderContainer = styled.div`
  background: ${(props) => props.theme.color.blue};
  font-size: ${(props) => props.theme.fontSize.middle};
  color: white;
  width: 100%;
  height: 126px;
  display: flex;
  align-items: center;
  padding-left: 4.44rem;

  #container {
    display: flex;
    gap: 4.81rem;
    padding-left: 41.81rem;
    align-items: center;
  }

  #login {
    font-weight: 700;
    border: 1px solid white;
    border-radius: 50%;
    width: 4.6875rem;
    height: 4.6875rem;
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
        width={"70px"}
        height={"70px"}
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
