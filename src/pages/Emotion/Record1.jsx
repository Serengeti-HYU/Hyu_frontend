import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import LoginHeader from "../../components/LoginHeader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
`;

const Header = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

const DateSelector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  font-size: 18px;
`;

const DateInput = styled.input`
  width: 60px;
  margin: 0 5px;
  text-align: center;
`;

const MemoContainer = styled.div`
  display: flex;
  width: 80%;
  margin-bottom: 20px;
`;

const MemoInput = styled.textarea`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const Circle = styled.div`
  width: 60px;
  height: 60px;
  border: 2px solid #ddd;
  border-radius: 50%;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #0056b3;
  }
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const DayContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin-top: 20px;
`;

const DayItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
`;

const Record1 = () => {
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 0, 19));
  const [emotions, setEmotions] = useState({
    14: "😐",
    15: "😐",
    16: "😐",
    17: "😐",
    18: "😐",
    19: "😊",
    20: "😐",
  });

  const handleDateChange = (year, month, day) => {
    setSelectedDate(new Date(year, month - 1, day));
  };

  const handlePreviousDay = () => {
    setSelectedDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate() - 1));
  };

  const handleNextDay = () => {
    setSelectedDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate() + 1));
  };

  const days = [14, 15, 16, 17, 18, 19, 20];
  const selectedDay = selectedDate.getDate();

  return (
    <Container>
      <LoginHeader />
      <Content>
        <Header>00님의 감정 기록</Header>
        <DateSelector>
          <DateInput type="text" value={selectedDate.getFullYear()} readOnly />.
          <DateInput type="text" value={String(selectedDate.getMonth() + 1).padStart(2, '0')} readOnly />.
          <DateInput type="text" value={String(selectedDate.getDate()).padStart(2, '0')} readOnly />
        </DateSelector>
        <MemoContainer>
          <Circle>{emotions[selectedDay] || "😐"}</Circle>
          <MemoInput placeholder="memo" />
        </MemoContainer>
        <Button>기록하기</Button>
        <Navigation>
          <NavButton onClick={handlePreviousDay}>&lt;</NavButton>
          <DateSelector>
            <DateInput type="text" value={selectedDate.getFullYear()} readOnly />.
            <DateInput type="text" value={String(selectedDate.getMonth() + 1).padStart(2, '0')} readOnly />.
            <DateInput type="text" value={String(selectedDate.getDate()).padStart(2, '0')} readOnly />
          </DateSelector>
          <NavButton onClick={handleNextDay}>&gt;</NavButton>
        </Navigation>
        <DayContainer>
          {days.map(day => (
            <DayItem key={day} onClick={() => handleDateChange(2024, 1, day)}>
              <Circle>{emotions[day]}</Circle>
              <div>01.{String(day).padStart(2, '0')}</div>
            </DayItem>
          ))}
        </DayContainer>
      </Content>
      <Footer />
    </Container>
  );
};

export default Record1;
