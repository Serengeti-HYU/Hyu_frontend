import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 1440px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
`;
const LetterInfo = styled.div``;
const Title = styled.div`
  color: #35648c;
  font-family: SUIT;
  font-size: 48px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;
const Content = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
const LetterInfo2 = styled.div``;
const RoundText = styled.div``;
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
      {/* 추후 컴포넌트로 빼기 */}
      <LetterInfo>
        <Title>휴~ 레터</Title>
        <Content>
          매주 쉬는 날 뭐하지? 하는 고민을 덜어주기 위해서 한 주에 한번
          휴~레터가 쉼 활동을 추천해 줍니다.
        </Content>
      </LetterInfo>
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
    </Container>
  );
};

export default NewsletterPage;
