// EmotionRecords.js
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  width: 100%;
  max-width: 900px;
`;
const EmotionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EmotionCard = styled.div`
  width: 16.5rem;
  height: 15.7rem;
  border-radius: 14.265px;
  border: 0.848px solid #35648c;
  background: #fff;
  #date {
    color: #35648c;
    font-size: 13.695px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  #today-date {
    color: #fff;
    font-size: 13.695px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
const TodayEmotionCard = styled.div`
  width: 16.5rem;
  height: 15.8rem;
  border-radius: 14.265px;
  background: #35648c;
`;
const TodayMark = styled.div`
  position: absoluute;
  color: #fff;
  font-size: 13.695px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const EmotionMemo = styled.p`
  margin-top: 1rem;
  color: #000;
  font-size: 13.564px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const EmotionFace = styled.div`
  width: 84.776px;
  height: 84.776px;
  flex-shrink: 0;
  fill: #fff;
  stroke-width: 2.543px;
  stroke: #35648c;
`;

const EmotionRecords = () => {
  return (
    <Container>
      <EmotionContainer>
        <EmotionCard>
          <div id="date">01.18</div>
          <EmotionFace />
          <EmotionMemo>memo............</EmotionMemo>
        </EmotionCard>
        <EmotionCard>
          <div id="date">01.19</div>
          <EmotionFace />
          <EmotionMemo>memo............</EmotionMemo>
        </EmotionCard>
        <TodayEmotionCard>
          <div id="today-date">01.20</div>
          <TodayMark>Today</TodayMark>
          <EmotionFace />
          <EmotionMemo>memo............</EmotionMemo>
        </TodayEmotionCard>
      </EmotionContainer>
    </Container>
  );
};

export default EmotionRecords;
