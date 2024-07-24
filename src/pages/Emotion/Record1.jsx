import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import LoginHeader from "../../components/LoginHeader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const TextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 왼쪽 정렬 */
  padding: 2.5rem;
  width: 100%;
  max-width: 47.5rem;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1.25rem;
    max-width: 100%;
    align-items: center; /* 중앙 정렬 */
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 43.75rem;
  margin: 0 auto;
  margin-top: 0;
  
  @media (max-width: 768px) {
    padding: 1.25rem;
    max-width: 100%;
  }
`;

const Header = styled.div`
  color: #35648c;
  font-size: 1.375rem;
  font-weight: 700;
  margin: 1.25rem 0;
  text-align: center;
  margin-bottom: 3.75rem;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 2rem;
  }
`;

const DateSelector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.125rem;
  color: #35648c;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const DateInput = styled.select`
  width: 4rem; /* Increase width to prevent text from being hidden */
  margin: 0 0.3125rem;
  text-align: center;
  border: none;
  background-color: transparent;
  font-size: 1.125rem;
  color: #35648c;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  
  @media (max-width: 768px) {
    width: 3.5rem;
    font-size: 1rem;
  }
`;

const Line = styled.div`
  width: 100%;
  max-width: 69.125rem;
  height: 0.1875rem;
  background: linear-gradient(to right, #f2e8c9, #35648c 50%, #f2e8c9);
  margin: 1.25rem 0;
  margin-top: -2.375rem;
  
  @media (max-width: 768px) {
    margin-top: -2.5rem;
  }
`;

const TopContainer = styled.div`
  width: 100%;
  max-width: 64rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.25rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MemoContainer = styled.div`
  width: 100%;
  max-width: 31.25rem;
  margin-bottom: 1.25rem;
  align-items: center;
  border-radius: 1.25rem;
  border: 0.1875rem solid #35648C;
  background: #FFF;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const MemoInput = styled.textarea`
  width: 100%;
  height: 10rem; /* Increase height */
  padding: 1.525rem;
  font-size: 1rem;
  border-radius: 1.25rem;
  border: none;
  resize: none;
  outline: none;

  &:focus {
    outline: none;
  }
`;

const CircleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 1.25rem;
  
  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 0.625rem;
    margin-right: 0;
  }
`;

const Circle = styled.div`
  width: 6.25rem;
  height: 6.25rem;
  border: 0.125rem solid #35648c;
  border-radius: 50%;
  margin-right: 1.25rem;
  margin-left: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    width: 4rem;
    height: 4rem;
    margin-right: 0.625rem;
    margin-left: 0.625rem;
    font-size: 1.25rem;
  }
`;

const Circle1 = styled.div`
  width: 3.75rem;
  height: 3.75rem;
  border: 0.125rem solid #35648c;
  border-radius: 50%;
  margin-top: 0.1875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  background-color: #fff; /* Ensure circle remains white */
`;

const Button = styled.button`
  background-color: #35648c;
  color: #ffffff;
  padding: 0.625rem 1.25rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  align-self: flex-end; /* 오른쪽 정렬 */

  &:hover {
    background-color: #0056b3;
  }
  margin-right: 1.525rem;
  margin-bottom: 1.25rem;
  margin-top: -1.875rem;
  
  @media (max-width: 768px) {
    align-self: center;
    margin-right: 0;
  }
`;

const BottomContainer = styled.div`
  align-items: center;
  margin-top: 1.25rem;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 43.75rem;
  margin-top: 1.25rem;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 0.3125rem; /* Adjust margin to be closer to the date display */
`;

const LeftNavButton = styled(NavButton)`
  background-image: url("../../assets/buttons/left.png");
`;

const RightNavButton = styled(NavButton)`
  background-image: url("../../assets/buttons/right.png");
`;

const DayContainerWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 1.25rem;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const DayContainer = styled.div`
  display: flex;
  justify-content: flex-start; /* Align items to the start (top-left) */
  align-items: flex-start; /* Align items to the start (top-left) */
  padding: 0.5rem;
  width: 5rem;
  height: 6.25rem;
  margin: 0 0.3125rem;
  border-radius: 1.052rem;
  border: 0.0625rem solid #35648c;
  margin-bottom: 0.625rem;
  background-color: ${(props) => (props.selected ? '#35648c' : 'transparent')};
  color: ${(props) => (props.selected ? '#fff' : '#000')}; /* Change text color when selected */
  
  @media (max-width: 768px) {
    width: 4rem;
    height: 5rem;
  }
`;

const DayItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align items to the start (top-left) */
  justify-content: flex-start; /* Align items to the start (top-left) */
  font-size: 0.875rem;
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 1.052rem;
`;

const Record1 = () => {
  const navigate = useNavigate();
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
  const [selectedDay, setSelectedDay] = useState(selectedDate.getDate());

  const handleDateChange = (year, month, day) => {
    const newDate = new Date(year, month - 1, day);
    setSelectedDate(newDate);
    setSelectedDay(day);
  };

  const handlePreviousWeek = () => {
    setSelectedDate((prevDate) => {
      const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate() - 7);
      setSelectedDay(newDate.getDate());
      return newDate;
    });
  };

  const handleNextWeek = () => {
    const weekDays = getWeekDays(selectedDate);
    const isLastDaySelected = selectedDay === weekDays[weekDays.length - 1].getDate();
    if (!isLastDaySelected) {
      setSelectedDate((prevDate) => {
        const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate() + 7);
        setSelectedDay(newDate.getDate());
        return newDate;
      });
    }
  };

  const handleManualDateChange = (type, value) => {
    const newDate = new Date(selectedDate);
    if (type === 'year') {
      newDate.setFullYear(value);
    } else if (type === 'month') {
      newDate.setMonth(value - 1);
    } else if (type === 'day') {
      newDate.setDate(value);
    }
    setSelectedDate(newDate);
    setSelectedDay(newDate.getDate());
  };

// Generate year, month, day options
const generateOptions = (start, end) => {
  const options = [];
  for (let i = start; i <= end; i++) {
    options.push(<option key={i} value={i}>{i}</option>);
  }
  return options;
};

  const getWeekDays = (date) => {
    const weekDays = [];
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay() + 1); // Start from Monday

    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      weekDays.push(day);
    }
    return weekDays;
  };

  const weekDays = getWeekDays(selectedDate);

  return (
    <Container>
      <LoginHeader />
      <TextContent>
        <Header>00님의 감정 기록</Header>
        <DateSelector>
          <DateInput 
            value={selectedDate.getFullYear()} 
            onChange={(e) => handleManualDateChange('year', e.target.value)}
          >
            {generateOptions(2000, 2030)}
          </DateInput>
          .
          <DateInput 
  value={selectedDate.getMonth() + 1} 
  onChange={(e) => handleManualDateChange('month', e.target.value)}
>
  {generateOptions(1, 12)}
</DateInput>
          .
          <DateInput 
            value={String(selectedDate.getDate()).padStart(2, "0")} 
            onChange={(e) => handleManualDateChange('day', e.target.value)}
          >
            {generateOptions(1, 31)}
          </DateInput>
        </DateSelector>
      </TextContent>
      <Content>
        <Line />
        <TopContainer>
          <CircleContainer>
            <Circle>{emotions[selectedDay] || "😐"}</Circle>
          </CircleContainer>
          <MemoContainer>
            <MemoInput placeholder="memo" />
          </MemoContainer>
        </TopContainer>
        <Button onClick={() => navigate("/Record2")}>기록하기</Button>
        <BottomContainer>
          <Navigation>
            <LeftNavButton onClick={handlePreviousWeek} />
            <DateSelector>
              <DateInput 
                value={selectedDate.getFullYear()} 
                onChange={(e) => handleManualDateChange('year', e.target.value)}
              >
                {generateOptions(2000, 2030)}
              </DateInput>
              .
              <DateInput 
  value={selectedDate.getMonth() + 1} 
  onChange={(e) => handleManualDateChange('month', Number(e.target.value))}
>
  {generateOptions(1, 12)}
</DateInput>
              .
              <DateInput 
                value={String(selectedDate.getDate()).padStart(2, "0")} 
                onChange={(e) => handleManualDateChange('day', e.target.value)}
              >
                {generateOptions(1, 31)}
              </DateInput>
            </DateSelector>
            <RightNavButton onClick={handleNextWeek} />
          </Navigation>
          <DayContainerWrapper>
            {weekDays.map((day, index) => (
              <DayContainer
                key={day.getDate()}
                selected={day.getDate() === selectedDay}
                onClick={() => handleDateChange(day.getFullYear(), day.getMonth() + 1, day.getDate())}
              >
                <DayItem selected={day.getDate() === selectedDay}>
                  <div>{`${String(day.getMonth() + 1).padStart(2, "0")}.${String(day.getDate()).padStart(2, "0")}`}</div>
                  <Circle1>{emotions[day.getDate()] || "😐"}</Circle1>
                </DayItem>
              </DayContainer>
            ))}
          </DayContainerWrapper>
        </BottomContainer>
      </Content>
      <Footer />
    </Container>
  );
};

export default Record1;
