// EmotionRecords.js
import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const EmotionRecords = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  const [recentRecords, setRecentRecords] = useState([]);
  // 임시
  const username = localStorage.getItem("username");
  console.log(username);
  const token = localStorage.getItem("tempToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/${username}/hue-records`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });
        setRecentRecords(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <EmotionContainer>
        {[...recentRecords].reverse().map((record, index) => {
          const recordDate = record.recordDate;
          return recordDate === formattedDate ? (
            <TodayEmotionCard key={index}>
              <DateText $isToday>{recordDate}</DateText>
              <TodayMark>Today</TodayMark>
              <EmotionFace src={record.emotionImg} />
              <EmotionMemo $isToday>
                <div id="content">{record.memo || "todaymemo..."}</div>
              </EmotionMemo>
            </TodayEmotionCard>
          ) : (
            <EmotionCard key={index}>
              <DateText>{recordDate}</DateText>
              <EmotionFace src={record.emotionImg} />
              <EmotionMemo>
                <div id="content">{record.memo || "memo..."}</div>
              </EmotionMemo>
            </EmotionCard>
          );
        })}
      </EmotionContainer>
    </Container>
  );
};
export default EmotionRecords;

const Container = styled.div`
  margin: auto;
  width: 100%;
  max-width: 850px;
`;

const EmotionContainer = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
`;

const EmotionCard = styled.div`
  width: 30.5%;
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
  color: ${(props) => (props.$isToday ? "#fff" : "#35648c")};
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
  background: ${(props) => (props.$isToday ? "#fff" : "transparent")};
  color: #000;
  #content {
    display: -webkit-box;
    word-break: break-word;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const EmotionFace = styled.img`
  width: 84.776px;
  height: 84.776px;
  background-color: #fff;
  border-radius: 50%;
  border: 2.543px solid #35648c;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
`;
