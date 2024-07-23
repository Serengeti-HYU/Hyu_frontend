import React from "react";
import styled from "styled-components";
import LetterInfo from "./LetterInfo";
import NoLoginHeader from "../../components/NoLoginHeader";
import Footer from "../../components/footer";

const Container = styled.div`
  display: flex;
  width: 1440px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
`;
const LetterInfo2 = styled.div``;
const RoundText = styled.div`
  display: inline-flex;
  height: 98.696px;
  padding: 0px 49.844px 0px 49.348px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 89.724px;
  background: #35648c;
  box-shadow: 0px 3.589px 3.589px 0px rgba(0, 0, 0, 0.25),
    0px 0px 6.819px 1.794px rgba(53, 100, 140, 0.35);
  color: #fff;
  font-family: SUIT;
  font-size: 21.534px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const SendSetting = styled.div``;
const Logo = styled.div``;
const SubTitle = styled.div``;
const EmailInput = styled.div``;
const CollectPersonalInfo = styled.div``;
const Envelope = styled.div``;
const Letter = styled.div``;
// const Title = styled.div``;

const NewsletterPage = () => {
  return (
    <Container>
      <NoLoginHeader />
      {/* 추후 컴포넌트로 빼기 */}
      <LetterInfo></LetterInfo>
      <LetterInfo2>
        <RoundText>휴일에 할 쉼, 힐링 활동</RoundText>
        <RoundText>
          쉬면서 보기 좋은 추천 Vlog, ASMR, 힐링 플레이리스트
        </RoundText>
        <RoundText>한 주를 마무리해주는 문구</RoundText>
      </LetterInfo2>
      <SendSetting>
        <Logo></Logo>
        <SubTitle></SubTitle>
        <EmailInput></EmailInput>
        <CollectPersonalInfo></CollectPersonalInfo>
      </SendSetting>
      <Envelope>
        <Letter></Letter>
      </Envelope>
      <Footer />
    </Container>
  );
};

export default NewsletterPage;
