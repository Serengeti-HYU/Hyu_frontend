import React from "react";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const days = ["월", "화", "수", "목", "금", "토", "일"];
const dayMapping = {
  월: "MONDAY",
  화: "TUESDAY",
  수: "WEDNESDAY",
  목: "THURSDAY",
  금: "FRIDAY",
  토: "SATURDAY",
  일: "SUNDAY",
};
const username = localStorage.getItem("username");

const Letter = ({ toggleLetter, email, isConsentChecked }) => {
  const [selectedDay, setSelectedDay] = useState(null);

  const handleClick = (day) => {
    const mappedDay = dayMapping[day];
    setSelectedDay(mappedDay);
    console.log("선택한 요일:", mappedDay);
  };

  const handleSubscribeClick = async () => {
    // 이메일 유효성 검사용 정규식
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      alert("이메일을 입력해주세요.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("올바른 이메일 형식을 입력해주세요.");
      return;
    }
    if (!isConsentChecked) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }

    if (!selectedDay) {
      alert("요일을 선택해주세요.");
      return;
    }

    console.log("구독하기 버튼 클릭됨");

    try {
      const response = await axios.post(`/subscribe/${username}`, {
        email: email,
        dayOfWeek: selectedDay,
        status: "ACTIVE",
      });
      if (response.status === 200) {
        toggleLetter(email, selectedDay);
      }
    } catch (error) {
      console.error("구독 요청 실패:", error);

      // 500 에러인 경우 axios.put으로 요청 다시 보내기
      if (error.response && error.response.status === 500) {
        try {
          const putResponse = await axios.put(`/subscribe/${username}`, {
            email: email,
            dayOfWeek: selectedDay,
            status: "ACTIVE",
          });
          if (putResponse.status === 200) {
            console.error("구독 요일 수정 완료");
            toggleLetter(email, selectedDay);
          }
        } catch (putError) {
          console.error("구독 요일 수정 요청 실패:", putError);
        }
      }
    }
  };

  return (
    <Container>
      <Text>
        ∙ 휴~레터는 요일 미 설정 시 매주 금요일에 발송됩니다. <br />∙
        <span id="bluetext">
          {" "}
          매주 금요일 00:00에 새로운 휴~레터 내용이 업로드
        </span>
        됩니다. <br />∙ 휴~레터는 설정한 요일{" "}
        <span id="bluetext">오전 09:00에 발송</span>됩니다.
      </Text>
      <DayContainer>
        {days.map((day, index) => (
          <DayButton
            key={index}
            selected={selectedDay === dayMapping[day]}
            onClick={() => handleClick(day)}
          >
            {day}
          </DayButton>
        ))}
      </DayContainer>
      <SubscribeBtn onClick={handleSubscribeClick}>구독하기</SubscribeBtn>
    </Container>
  );
};

export default Letter;

const Container = styled.div`
  position: relative;
  width: 967px;
  height: 583px;
  border-radius: 25px;
  background: #fff;
  box-shadow: 0px -4px 25.8px 0px rgba(0, 0, 0, 0.25);
  margin-top: 3rem;
`;
const Text = styled.div`
  padding-top: 3rem;
  padding-left: 6rem;
  color: #35648c;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-align: left;
  #bluetext {
    color: #35648c;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
const DayContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  margin-top: 1.5rem;
`;
const DayButton = styled.button`
  background: ${(props) => (props.selected ? "#35648c" : "white")};
  color: ${(props) => (props.selected ? "white" : "black")};
  display: flex;
  width: 104.568px;
  height: 61.132px;
  padding: 20.109px 0px 21.023px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 36.197px;
  border: none;
  box-shadow: 0px 0px 7.239px 2px rgba(53, 100, 140, 0.35);
  &:hover {
    border: 2px solid #35648c;
  }
  font-size: 16.087px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const SubscribeBtn = styled.button`
  cursor: pointer;
  margin: auto;
  margin-top: 2rem;
  display: flex;
  width: 350px;
  padding: 18px 0px 17px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: #35648c;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  z-index: 10; /* 버튼이 최상위에 위치하도록 설정 */
  position: relative; /* 버튼이 다른 요소보다 위에 위치하도록 설정 */
`;
