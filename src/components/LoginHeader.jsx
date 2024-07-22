import styled from "styled-components";

const HeaderContainer = styled.div`
  img#logo {
  }

  #container {
  }

  #letter,
  #custiom,
  #emotion {
  }

  #letter {
  }

  #custiom {
  }

  #emotion {
  }

  img#facelogo {
  }
`;

function LoginHeader() {
  return (
    <HeaderContainer>
      <img
        src={`${process.env.PUBLIC_URL}/assets/logo/LogoWhite.png`}
        id="logo"
      />
      <div id="container">
        <div id="letter">휴~레터</div>
        <div id="custiom">맞춤형 쉼</div>
        <div id="emotion">감정 기록</div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/logo/FaceLogoWhite.png`}
          id="facelogo"
        />
      </div>
    </HeaderContainer>
  );
}

export default LoginHeader;
