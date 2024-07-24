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
  height: 14.7rem;
  border-radius: 14.265px;
  border: 0.848px solid #35648c;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const TodayEmotionCard = styled(EmotionCard)`
  height: 14.8rem;
  background: #35648c;
  color: #fff;
`;

const DateText = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  color: ${(props) => (props.today ? "#fff" : "#35648c")};
  font-size: 13.695px;
  font-weight: 700;
`;

const TodayMark = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
  font-size: 13.695px;
  font-weight: 700;
`;

const EmotionMemo = styled.div`
  margin-top: 1rem;
  padding: 0.5rem;
  width: 90%;
  height: 30%;
  text-align: left;
  font-size: 13.564px;
  font-weight: 500;
  border-radius: 8px;
  border: 0.848px solid #35648c;
  background: ${(props) => (props.today ? "#fff" : "transparent")};
  color: ${(props) => (props.today ? "#000" : "#000")};
  #content {
    display: -webkit-box;
    word-break: break-word;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const EmotionFace = styled.div`
  width: 84.776px;
  height: 84.776px;
  background-color: #fff;
  border-radius: 50%;
  border: 2.543px solid #35648c;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
`;

const EmotionRecords = () => {
  return (
    <Container>
      <EmotionContainer>
        <EmotionCard>
          <DateText>01.18</DateText>
          <EmotionFace />
          <EmotionMemo>
            <div id="content">memo............</div>
          </EmotionMemo>
        </EmotionCard>
        <EmotionCard>
          <DateText>01.19</DateText>
          <EmotionFace />
          <EmotionMemo>
            <div id="content">
              memo............ffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaahjshjsahdufhduhfjkhdsjhfjfhhsjghsdjgdhjfgdhsgfyewfgdshjfgyghjsdfgdhjdgsgfyfgs
              dhghjgh
            </div>
          </EmotionMemo>
        </EmotionCard>
        <TodayEmotionCard>
          <DateText today>01.20</DateText>
          <TodayMark>Today</TodayMark>
          <EmotionFace />
          <EmotionMemo today>
            <div id="content">memo............</div>
          </EmotionMemo>
        </TodayEmotionCard>
      </EmotionContainer>
    </Container>
  );
};

export default EmotionRecords;
