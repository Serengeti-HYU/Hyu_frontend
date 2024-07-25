import React from "react";
import { useNavigate } from "react-router-dom";
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
  margin-bottom: 12rem;
`;
const SectionTitle = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #35648c;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Line = styled.div`
  margin: auto;
  width: 87%;
  height: 0.1875rem;
  background: linear-gradient(to right, #f2e8c9, #35648c 50%, #f2e8c9);
  margin-bottom: 3rem;

  @media (max-width: 768px) {
  }
`;
const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 60%;
  margin-bottom: 0.5rem;
  margin-top: 5rem;
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
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  height: 2rem;
  margin-top: 2.2rem;
  cursor: pointer;
`;

const MyPage = () => {
  const navigate = useNavigate();

  const gotoUpdateProfile = () => {
    navigate(`/update-profile`);
  };
  const gotoRecordEmotion = () => {
    navigate(`/record1`);
  };

  return (
    <Container>
      <LoginHeader />
      <Main>
        <TitleBar>
          <SectionTitle>내 정보</SectionTitle>
          <WhiteBtn onClick={gotoUpdateProfile}>내 정보 수정</WhiteBtn>
        </TitleBar>
        <Line />
        <Profile />
        <TitleBar>
          <SectionTitle>최근 감정 기록</SectionTitle>
          <WhiteBtn onClick={gotoRecordEmotion}>감정 기록 더보기</WhiteBtn>
        </TitleBar>
        <Line />
        <EmotionRecords />
        <TitleBar>
          <SectionTitle>저장 한 쉼</SectionTitle>
        </TitleBar>
        <Line />
        <Storage />
      </Main>
      <Footer />
    </Container>
  );
};

export default MyPage;
