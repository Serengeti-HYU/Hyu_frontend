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
const Title = styled.div`
  color: #35648c;
  font-family: SUIT;
  font-size: 48px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;

const NewsletterPage = () => {
  return (
    <Container>
      <LetterInfo>
        <Title></Title>
        <Content></Content>
      </LetterInfo>
      <LetterInfo2></LetterInfo2>
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
