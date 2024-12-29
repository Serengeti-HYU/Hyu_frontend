import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import LoginHeader from "../../components/LoginHeader";
import axios from "axios";

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
  align-items: flex-start;
  width: 100%;
  max-width: 47.5rem;
  margin: 0 auto;
  margin-top: 2.5rem;
  padding-left: 2rem;

  @media (max-width: 768px) {
    padding: 1.25rem;
    max-width: 100%;
    align-items: center;
    padding-left: 1.25rem;
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
  margin-bottom: 3rem;
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

const DateDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.125rem;
  color: #35648c;
  margin-bottom: rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const DateInput = styled.select`
  width: 5rem;
  margin: 0 0.625rem;
  text-align: center;
  border: none;
  background-color: transparent;
  font-size: 1.125rem;
  color: #35648c;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  position: relative;

  &::-ms-expand {
    display: none;
  }

  &::after {
    content: "";
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    border: 0.375rem solid transparent;
    border-top-color: #35648c;
  }

  &:hover {
    border-color: #35648c;
  }

  option {
    background-color: #ffffff;
    color: #35648c;
  }

  @media (max-width: 768px) {
    width: 4rem;
    font-size: 1rem;
  }
`;

const TopLine = styled.div`
  width: 100%;
  max-width: 69.125rem;
  height: 0.1875rem;
  background: linear-gradient(to right, #f2e8c9, #35648c 50%, #f2e8c9);
  margin: 0.625rem 0;
  margin-top: 1.25rem; /* 간격을 줄이기 위해 수정된 부분 */
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    margin-top: -10rem;
  }
`;

const Line = styled.div`
  width: 100%;
  max-width: 69.125rem;
  height: 0.1875rem;
  background: linear-gradient(to right, #f2e8c9, #35648c 50%, #f2e8c9);
  margin: 0.625rem 0;
  margin-bottom: 2rem;
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
  border: 0.1875rem solid #35648c;
  background: #fff;

  @media (max-width: 768px) {
    max-width: 100%;
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
  background-color: #fff;
`;

const Button = styled.button`
  background-color: #35648c;
  color: #ffffff;
  padding: 0.625rem 1.25rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  align-self: flex-end;

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
  margin-top: -2rem;
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
  margin: 0 0.625rem;
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
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.5rem;
  width: 5rem;
  height: 6.25rem;
  margin: 0 0.3125rem;
  border-radius: 1.052rem;
  border: 0.0625rem solid #35648c;
  margin-bottom: 0.625rem;
  background-color: ${(props) => (props.selected ? "#35648c" : "transparent")};
  color: ${(props) => (props.selected ? "#fff" : "#000")};

  @media (max-width: 768px) {
    width: 4rem;
    height: 5rem;
  }
`;

const DayItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 0.875rem;
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 1.052rem;
`;

const Weekdays = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  color: #35648c;
  font-family: SUIT;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-top: 3.25rem;
  margin-bottom: 1.25rem;

  div {
    margin: 0 0.3125rem;
  }
`;

const DateSelector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.125rem;
  color: #35648c;
  margin-bottom: 0.625rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Record1 = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date()); // 오늘 날짜 설정
  const [selectedDay, setSelectedDay] = useState(selectedDate.getDate());
  const [weeklyRecords, setWeeklyRecords] = useState([]);
  const [dailyRecord, setDailyRecord] = useState(null);

  // 선택한 날짜를 기준으로 해당 주의 월요일부터 일요일까지 데이터 조회
  useEffect(() => {
    const startOfWeek = new Date(selectedDate);
    startOfWeek.setDate(selectedDate.getDate() - selectedDate.getDay() + 1); // 월요일 날짜 계산
    const recordDate = `${startOfWeek.getFullYear()}-${String(
      startOfWeek.getMonth() + 1
    ).padStart(2, "0")}-${String(startOfWeek.getDate()).padStart(2, "0")}`;

    axios
      .get(`/hue-records?date=${recordDate}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((response) => {
        setWeeklyRecords(response.data || []);
        console.log("Weekly Records:", response.data);
      })
      .catch((error) => {
        if (error.response?.status === 401) {
          alert("세션이 만료되었습니다. 다시 로그인해주세요.");
          navigate("/login");
        } else {
          console.error("Error fetching weekly data:", error);
        }
      });
  }, [selectedDate, navigate]);

  // 선택된 날짜의 데이터를 개별적으로 조회
  useEffect(() => {
    const recordDate = `${selectedDate.getFullYear()}-${String(
      selectedDate.getMonth() + 1
    ).padStart(2, "0")}-${String(selectedDay).padStart(2, "0")}`;

    axios
      .get(`/hue-records/${recordDate}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((response) => {
        setDailyRecord(response.data || null);
        console.log("Daily Record:", response.data);
      })
      .catch((error) => {
        if (error.response?.status === 401) {
          alert("세션이 만료되었습니다. 다시 로그인해주세요.");
          navigate("/login");
        } else {
          console.error("Error fetching daily data:", error);
        }
      });
  }, [selectedDay, selectedDate, navigate]);

  const getWeekDays = (date) => {
    const weekDays = [];
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay() + 1); // 월요일부터 시작

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
        <DateDisplay>
          {`${selectedDate.getFullYear()}.${String(
            selectedDate.getMonth() + 1
          ).padStart(2, "0")}.${String(selectedDay).padStart(2, "0")}`}
        </DateDisplay>
      </TextContent>
      <Content>
        <TopLine />
        <TopContainer>
          <CircleContainer>
            <Circle>
              {dailyRecord?.emotionImg ? (
                <img
                  src={`/assets/sampleFace/${dailyRecord.emotionImg}.png`}
                  alt="Emotion"
                  style={{ width: "100%", height: "100%" }}
                />
              ) : null}
            </Circle>
          </CircleContainer>
          <MemoContainer>
            <MemoInput
              placeholder="memo"
              value={dailyRecord?.content || ""}
              readOnly
            />
          </MemoContainer>
        </TopContainer>
        <Button onClick={() => navigate("/Record2")}>기록하기</Button>
        <Weekdays>
          <div>MON</div>
          <div>TUE</div>
          <div>WED</div>
          <div>THU</div>
          <div>FRI</div>
          <div>SAT</div>
          <div>SUN</div>
        </Weekdays>
        <Line />
        <BottomContainer>
          <DayContainerWrapper>
            {weekDays.map((day) => {
              const record = weeklyRecords.find(
                (record) =>
                  new Date(record.recordDate).getDate() === day.getDate() &&
                  new Date(record.recordDate).getMonth() === day.getMonth() &&
                  new Date(record.recordDate).getFullYear() ===
                    day.getFullYear()
              );
              return (
                <DayContainer
                  key={day.getDate()}
                  selected={day.getDate() === selectedDay}
                  onClick={() => {
                    setSelectedDay(day.getDate());
                  }}
                >
                  <DayItem selected={day.getDate() === selectedDay}>
                    <div>{`${String(day.getMonth() + 1).padStart(
                      2,
                      "0"
                    )}.${String(day.getDate()).padStart(2, "0")}`}</div>
                    <Circle1>
                      {record?.emotionImg && (
                        <img
                          src={`/assets/sampleFace/${record.emotionImg}.png`}
                          alt="Emotion"
                          style={{ width: "100%", height: "100%" }}
                        />
                      )}
                    </Circle1>
                  </DayItem>
                </DayContainer>
              );
            })}
          </DayContainerWrapper>
        </BottomContainer>
      </Content>
      <Footer />
    </Container>
  );
};

export default Record1;