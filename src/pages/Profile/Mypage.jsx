import React from "react";
import styled from "styled-components";
import Profile from "./Profile";
import EmotionRecords from "./EmotionRecords";
import Storage from "./Storage";
import LoginHeader from "../../components/LoginHeader";
import Footer from "../../components/footer";

const Container = styled.div`
  background-color: #fff;
  color: #333;
`;
const Main = styled.main`
  padding: 2rem;
`;

const SectionTitle = styled.h2`
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #35648c;
  font-family: SUIT;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Line = styled.div`
  margin: auto;
  background-image: url(${process.env.PUBLIC_URL}/assets/icons/line.svg);
  width: 70rem;
  height: 3px;
  background-size: cover;
  margin-bottom: 2rem;
`;
const WhiteBtn = styled.button`
  border: none;
  display: inline-flex;
  padding: 6px 51px 6px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    0px 0px 14.9px 0px rgba(53, 100, 140, 0.35);
  color: #35648c;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const MyPage = () => {
  return (
    <Container>
      <LoginHeader />
      <Main>
        <SectionTitle>내 정보</SectionTitle>
        <WhiteBtn>내 정보 수정</WhiteBtn>
        <Line />
        <Profile />
        <SectionTitle>최근 감정 기록</SectionTitle>
        <WhiteBtn>감정 기록 더보기</WhiteBtn>
        <Line />
        <EmotionRecords />
        <SectionTitle>저장 한 쉼</SectionTitle>
        <Line />
        <Storage />
      </Main>
      <Footer />
    </Container>
  );
};

export default MyPage;
