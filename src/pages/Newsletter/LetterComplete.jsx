import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 967px;
  height: 583px;
  border-radius: 25px;
  background: #fff;
  box-shadow: 0px -4px 25.8px 0px rgba(0, 0, 0, 0.25);
  margin-top: 3rem;
`;
const Logo = styled.img`
  margin-top: 2rem;
`;
const TextBox = styled.div`
  padding-top: 3rem;
  color: #35648c;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const SubTitle = styled.div`
  color: #35648c;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const UpdateBtn = styled.button`
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
`;

const dayMapping = {
  MONDAY: "월",
  TUESDAY: "화",
  WEDNESDAY: "수",
  THURSDAY: "목",
  FRIDAY: "금",
  SATURDAY: "토",
  SUNDAY: "일",
};

const LetterComplete = ({ toggleLetter, email, selectedDay }) => {
  return (
    <Container>
      <TextBox>
        {email}으로 매주 {dayMapping[selectedDay]}요일 오전 9:00에
      </TextBox>
      <Logo
        src={`${process.env.PUBLIC_URL}/assets/logo/FaceLogoBlue.png`}
        width={"70px"}
        id="logo"
      />
      <SubTitle>휴~레터가 찾아갈게요</SubTitle>
      <UpdateBtn onClick={toggleLetter}>발송요일 수정하기</UpdateBtn>
    </Container>
  );
};
export default LetterComplete;
