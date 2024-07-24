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
  align-items: center; /* 중앙 정렬로 수정 */
  padding: 2.5rem;
  width: 100%;
  max-width: 47.5rem;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1.25rem;
    max-width: 100%;
    align-items: center;
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
  font-family: SUIT;
  font-size: 1.375rem;
  font-weight: 700;
  margin: 1.25rem 0;
  text-align: center;
  margin-bottom: 1.5rem; /* margin 수정 */
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 1rem; /* margin 수정 */
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
  width: 4rem;
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
  flex-direction: row; /* row로 수정 */
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
  margin-left: 1.25rem; /* 추가: Circle과의 간격 조정 */
  align-items: center;
  border-radius: 1.25rem;
  border: 0.1875rem solid #35648C;
  background: #FFF;
  
  @media (max-width: 768px) {
    max-width: 100%;
    margin-left: 0; /* 모바일에서는 원래대로 */
    margin-bottom: 1.25rem; /* 모바일에서 아래로 공간 추가 */
  }
`;

const MemoInput = styled.textarea`
  width: 100%;
  height: 10rem;
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
  justify-content: center;
  align-items: center;
  margin-right: 1.25rem; /* margin 수정 */
  
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    width: 4rem;
    height: 4rem;
    font-size: 1.25rem;
  }
`;

const EmotionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.125rem solid #e0e0e0; /* 연한 회색 테두리 */
  border-radius: 1.25rem;
  padding: 1rem;
  margin-bottom: 1.25rem;
`;

const EmotionButton = styled.div`
  width: 3rem;
  height: 3rem;
  border: 0.125rem solid #35648c;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  margin: 0 0.5rem;
  cursor: pointer;
`;

const LockButton = styled(EmotionButton)`
  background: linear-gradient(135deg, #3a5a9a, #e0e0e0 50%, #f5f5f5);
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: url('../assets/face_etc/lock_icon.png') no-repeat center;
    background-size: contain;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.25rem;
`;

const Button = styled.button`
  background-color: #35648c;
  color: #ffffff;
  padding: 0.625rem 1.25rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  margin: 0 0.625rem;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    margin: 0.625rem 0;
  }
`;

const Record2 = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 0, 19));
  const [selectedEmotion, setSelectedEmotion] = useState("😐");
  const [memo, setMemo] = useState("");

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
  };

  const generateOptions = (start, end) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
  };

  const handleLockClick = () => {
    alert('프리미엄 서비스를 사용하시겠습니까?');
  };

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
            <Circle>{selectedEmotion}</Circle>
          </CircleContainer>
          <MemoContainer>
            <MemoInput 
              placeholder="memo"
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
            />
          </MemoContainer>
        </TopContainer>
        <EmotionBox>
          {["😴", "😐", "😊", "😆", "😢"].map((emotion, index) => (
            <EmotionButton 
              key={index}
              onClick={() => setSelectedEmotion(emotion)}
            >
              {emotion}
            </EmotionButton>
          ))}
          <LockButton onClick={handleLockClick} />
          <LockButton onClick={handleLockClick} />

        </EmotionBox>
        <ButtonContainer>
          <Button onClick={() => navigate(-1)}>이전으로</Button>
          <Button onClick={() => alert('저장하기')}>저장하기</Button>
        </ButtonContainer>
      </Content>
      <Footer />
    </Container>
  );
};

export default Record2;
