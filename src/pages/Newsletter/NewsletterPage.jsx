import React from "react";
import { useState } from "react";
import styled from "styled-components";
import LetterInfo from "./LetterInfo";
import EmailInput from "./EmailInput";
import LetterComplete from "./LetterComplete";
import Letter from "./Letter";
import LoginHeader from "../../components/LoginHeader";
import Footer from "../../components/footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #fff;
`;

const LetterInfo2 = styled.div`
  height: 421px;
  #one {
    margin-left: 35px;
    width: 25rem;
  }
  #two {
    margin-left: 600px;
    width: 40rem;
  }
  #three {
    margin-left: 20px;
    width: 30rem;
  }
`;

const RoundText = styled.div`
  display: flex;
  height: 98.696px;
  padding: 0px 19px 0px 19px;
  justify-content: center;
  align-items: center;
  border-radius: 89.724px;
  background: #35648c;
  box-shadow: 0px 3.589px 3.589px 0px rgba(0, 0, 0, 0.25),
    0px 0px 6.819px 1.794px rgba(53, 100, 140, 0.35);
  color: #fff;
  font-size: 21.534px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 5px;
`;
const SendSetting = styled.div``;
const Logo = styled.img``;
const SubTitle = styled.div`
  color: #35648c;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
`;

const ViewTerms = styled.span`
  color: ${(props) => props.theme.color.blue};
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.176px;
  text-decoration-line: underline;
`;

const PrivacyConsent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.176px;
  #text {
    width: 15rem;
    text-align: left;
  }
`;
const Checkbox = styled.input`
  margin-right: 5px;
`;
const LetterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 1200px;
  height: 675px;
  margin: auto;
  margin-top: 8rem;
`;
const Envelope = styled.img`
  position: absolute;
  top: 0;
  z-index: 1;
`;
const LetterStyled = styled.div`
  margin: auto;
  margin-top: -1rem;
  z-index: 2;
`;
const Front = styled.img`
  position: absolute;
  top: 18rem;
  z-index: 3;
  z-index: 999;
  /* z-index를 무시하고 겹쳐있는 영역을 클릭했을때 뒤에 있는 click 이벤트 반응하게 하기 */
  pointer-events: none;
`;
const CollectPersonalInfo = styled.div`
  margin: auto;
  margin-top: 2rem;
  display: flex;
  justify-content: space-evenly;
`;

const NewsletterPage = () => {
  const [isLetterComplete, setIsLetterComplete] = useState(false);

  const toggleLetter = () => {
    setIsLetterComplete((prev) => !prev);
    console.log("상태" + isLetterComplete);
  };
  return (
    <Container>
      <LoginHeader />
      <div>
        <LetterInfo />
        <LetterInfo2>
          <RoundText id="one">휴일에 할 쉼, 힐링 활동</RoundText>
          <RoundText id="two">
            쉬면서 보기 좋은 추천 Vlog, ASMR, 힐링 플레이리스트
          </RoundText>
          <RoundText id="three">한 주를 마무리해주는 문구</RoundText>
        </LetterInfo2>
        <SendSetting>
          <Logo
            src={`${process.env.PUBLIC_URL}/assets/logo/FaceLogoBlue.png`}
            width={"70px"}
            id="logo"
          />
          <SubTitle>휴~레터가 찾아갈게요</SubTitle>
          <EmailInput />
          <CollectPersonalInfo>
            <PrivacyConsent>
              <Checkbox type="checkbox" />
              <span id="text">개인정보 수집 및 이용 동의(필수)</span>
              <ViewTerms>약관보기</ViewTerms>
            </PrivacyConsent>
          </CollectPersonalInfo>
          <LetterContainer>
            <Envelope
              src={`${process.env.PUBLIC_URL}/assets/newsletter/envelope.svg`}
              width={"1170.881px"}
              id="back"
            />
            <LetterStyled>
              {isLetterComplete ? (
                <LetterComplete toggleLetter={toggleLetter} />
              ) : (
                <Letter toggleLetter={toggleLetter} />
              )}
            </LetterStyled>
            <Front
              src={`${process.env.PUBLIC_URL}/assets/newsletter/envelopefront.svg`}
              width={"1170.881px"}
              id="front"
            />
          </LetterContainer>
        </SendSetting>
      </div>
      <Footer />
    </Container>
  );
};

export default NewsletterPage;
