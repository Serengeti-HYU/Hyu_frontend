import React, { useState, useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import LoginHeader from "../../components/LoginHeader";
import { EmotionContext } from "./EmotionContext";

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
  align-items: center;
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

  @media (max-width: 768px) {
    padding: 1.25rem;
    max-width: 100%;
  }
`;

const DateSelector = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  color: #35648c;
  margin-left: -30rem;
  margin-top: 5rem;
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
  margin-top: -6.375rem;

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
  margin-left: 1.25rem;
  align-items: center;
  border-radius: 1.25rem;
  border: 0.1875rem solid #35648c;
  background: #fff;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-left: 0;
    margin-bottom: 1.25rem;
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  position: relative;

  @media (max-width: 768px) {
    width: 4rem;
    height: 4rem;
    font-size: 1.25rem;
  }
`;

const Face = styled.div`
  width: 6rem;
  height: 6rem;
  position: relative;
`;

const Eye = styled.img`
  position: absolute;
  top: 30%;
  width: 1.5rem;
  height: auto;
`;

const Mouth = styled.img`
  position: absolute;
  bottom: 20%;
  width: 2rem;
  height: auto;
`;

const Etc = styled.img`
  position: absolute;
  width: 1rem;
  height: auto;
`;

const EmotionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  border: 0.125rem solid #e0e0e0;
  border-radius: 1.25rem;
  padding: 1rem;
  margin-bottom: 1.25rem;
  position: relative;
  overflow: hidden;
  max-width: 30rem;
  overflow-x: auto;

  /* Custom scrollbar styles */
  &::-webkit-scrollbar {
    height: 12px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 51px;
    background: linear-gradient(90deg, #35648C 0%, #F2E8C9 100%);
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-button {
    display: none; /* Remove scrollbar arrows */
  }

  padding-left: 1rem; /* Add padding to the left */
`;

const EmotionContainer = styled.div`
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
  width: max-content;
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
    content: "";
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: url("../assets/face_etc/lock_icon.png") no-repeat center;
    background-size: contain;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end; /* 오른쪽 정렬 */
  align-items: center;
  margin-bottom: 1.25rem;
  margin-left: 20rem;
`;

const PreviousButton = styled.button`
  background-color: #ffffff;
  color: #35648c;
  padding: 0.625rem 1.25rem;
  border: 0.125rem solid #ffffff;
  border-radius: 0.25rem;
  cursor: pointer;
  margin: 0 0.625rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); /* 그림자 속성 추가 */
  width: 10rem;
  &:hover {
    background-color: #f2f2f2;
  }

  @media (max-width: 768px) {
    margin: 0.625rem 0;
  }
`;

const ActionButton = styled.button`
  background-color: #35648c;
  color: #ffffff;
  padding: 0.625rem 1.25rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  margin-left: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); /* 그림자 속성 추가 */
  width: 10rem;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    margin-top: 0.625rem;
  }
`;

const CustomEmotionButton = styled.button`
  color: #ffffff;
  padding: 0.625rem 1.25rem;
  border: none;
  border-radius: 10px;
  background: linear-gradient(0deg, #35648c 0%, #f2e8c9 129.17%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  margin-left: 1rem;
  margin-top: 1rem;
  height: 3rem;

  &:hover {
    background-color: #ff8c00;
  }

  @media (max-width: 768px) {
    margin-top: 0.625rem;
  }
`;

const CustomContainer = styled.div`
  display: flex;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
`;

const ModalButton = styled.button`
  background-color: #35648c;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  cursor: pointer;
  border-radius: 0.25rem;
  margin: 0 0.5rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const Record2 = () => {
  const { customEmotion } = useContext(EmotionContext);
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 0, 19));
  const [selectedEmotion, setSelectedEmotion] = useState("😐");
  const [memo, setMemo] = useState("");
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const emotionContainerRef = useRef(null);

  const handleManualDateChange = (type, value) => {
    const newDate = new Date(selectedDate);
    if (type === "year") {
      newDate.setFullYear(value);
    } else if (type === "month") {
      newDate.setMonth(value - 1);
    } else if (type === "day") {
      newDate.setDate(value);
    }
    setSelectedDate(newDate);
  };

  const generateOptions = (start, end) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  const handleLockClick = () => {
    setIsCustomModalOpen(true);
  };

  const handleCustomClick = () => {
    setIsCustomModalOpen(true);
  };

  const closeCustomModal = () => {
    setIsCustomModalOpen(false);
  };

  const handleSaveClick = () => {
    setIsSaveModalOpen(true);
  };

  const closeSaveModal = () => {
    setIsSaveModalOpen(false);
  };

  const handleCustomConfirm = () => {
    navigate("/NoPremium");
  };

  return (
    <Container>
      <LoginHeader />
      <TextContent>
        <DateSelector>
          <DateInput
            value={selectedDate.getFullYear()}
            onChange={(e) => handleManualDateChange("year", e.target.value)}
          >
            {generateOptions(2000, 2030)}
          </DateInput>
          .
          <DateInput
            value={selectedDate.getMonth() + 1}
            onChange={(e) => handleManualDateChange("month", e.target.value)}
          >
            {generateOptions(1, 12)}
          </DateInput>
          .
          <DateInput
            value={String(selectedDate.getDate()).padStart(2, "0")}
            onChange={(e) => handleManualDateChange("day", e.target.value)}
          >
            {generateOptions(1, 31)}
          </DateInput>
        </DateSelector>
      </TextContent>
      <Content>
        <Line />
        <TopContainer>
          <CircleContainer>
            <Circle>
              {customEmotion ? (
                <Face>
                  {customEmotion.selectedEye && <Eye src={customEmotion.selectedEye} alt="Eye" />}
                  {customEmotion.selectedMouth && <Mouth src={customEmotion.selectedMouth} alt="Mouth" />}
                  {customEmotion.selectedEtc && <Etc src={customEmotion.selectedEtc} alt="Etc" />}
                </Face>
              ) : (
                selectedEmotion
              )}
            </Circle>
          </CircleContainer>
          <MemoContainer>
            <MemoInput
              placeholder="memo"
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
            />
          </MemoContainer>
        </TopContainer>
        <CustomContainer>
          <EmotionBox>
            <EmotionContainer ref={emotionContainerRef}>
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
              <LockButton onClick={handleLockClick} />
              <LockButton onClick={handleLockClick} />
            </EmotionContainer>
          </EmotionBox>
          <CustomEmotionButton onClick={handleCustomClick}>
            감정 커스텀 (Premium)
          </CustomEmotionButton>
        </CustomContainer>
        <ButtonContainer>
          <PreviousButton onClick={() => navigate(-1)}>이전으로</PreviousButton>
          <ActionButton onClick={handleSaveClick}>
            저장하기
          </ActionButton>
        </ButtonContainer>
      </Content>
      {isCustomModalOpen && (
        <ModalOverlay onClick={closeCustomModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <p>프리미엄 구독 결제를 하시겠습니까?</p>
            <div>
              <ModalButton onClick={handleCustomConfirm}>확인</ModalButton>
              <ModalButton onClick={closeCustomModal}>취소</ModalButton>
            </div>
          </ModalContent>
        </ModalOverlay>
      )}
      {isSaveModalOpen && (
        <ModalOverlay onClick={closeSaveModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <p>저장하시겠습니까?</p>
            <ModalButton onClick={closeSaveModal}>확인</ModalButton>
          </ModalContent>
        </ModalOverlay>
      )}
      <Footer />
    </Container>
  );
};

export default Record2;
