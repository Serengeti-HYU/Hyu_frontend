import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const gotoTest = () => {
    navigate(`/personality-test`);
  };
  const gotoPremium = () => {
    navigate(`/premium`);
  };

  const [isPremium, setIsPremium] = useState(true);

  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  // 임시
  localStorage.setItem(
    "tempToken",
    "eyJhbGciOiJIUzI1NiJ9.eyJwaG9uZSI6IjEyMzQ1Njc4OTAiLCJlbWFpbCI6InRlc3RAbmF2ZXIuY29tIiwic3ViIjoic29qZW9uZyIsImlhdCI6MTczMzA1MjI5OSwiZXhwIjoxNzMzMDcwMjk5fQ.NZYeqFDd29ITD8Wuq1-47Av1sThjodRV7SoDxLkNTJs"
  );
  localStorage.setItem("username", "sojeong");
  const token = localStorage.getItem("tempToken");
  const username = localStorage.getItem("username");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/${username}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });
        setUserInfo(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <ProfileContainer>
      <ProfileWrapper>
        <ProfilePic></ProfilePic>
        <Wrapper>
          <PremiumBadge onClick={gotoPremium}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/icons/premium.svg`}
              alt="link icon"
            />
            <span id="text">
              {isPremium ? "premium 사용자" : "premium 구독하기"}
            </span>
          </PremiumBadge>
          <InfoText>(이름) {userInfo.name}</InfoText>
          <InfoText>
            <span id="year">(생년){userInfo.birthyear} </span>
            <span id="month">(월){userInfo.birthmonth} </span>
            <span id="day">(일){userInfo.birthday} </span>
            <span id="age">(나이){userInfo.age}</span>
          </InfoText>
        </Wrapper>
      </ProfileWrapper>
      <ResultWrapper>
        <Result>
          {userInfo.name}님은 성격 검사 결과 ({userInfo.characterType}) 입니다.
        </Result>
        <Button onClick={gotoTest}>재검사</Button>
      </ResultWrapper>
    </ProfileContainer>
  );
};

export default Profile;

const ProfileContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProfilePic = styled.div`
  width: 16.5rem;
  height: 16.5rem;
  border-radius: 50px;
  border: 3px solid #35648c;
  background: #fff;
`;
const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6rem;
`;
const Wrapper = styled.div`
  width: 25rem;
  height: 20rem;
  text-align: left;
`;
const PremiumBadge = styled.div`
  display: inline-flex;
  height: 48px;
  padding: 12px 39px 11px 40px;
  justify-content: center;
  align-items: flex-start;
  gap: 9px;
  border-radius: 25px;
  background: linear-gradient(180deg, #f2e8c9 0%, #35648c 100%);
  box-shadow: 0px 0px 14.9px 0px rgba(53, 100, 140, 0.35);
  margin-bottom: 0rem;
  margin-top: 3rem;
  cursor: pointer;
  #text {
    color: #fff;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.2;
  }
`;
const InfoText = styled.div`
  margin: 0.5rem 0;
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 3rem;
  #age {
    margin-left: 3rem;
  }
`;
const ResultWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;
`;
const Button = styled.button`
  display: flex;
  width: 186px;
  padding: 7px 0px 8px 0px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 25px;
  background: #35648c;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    0px 0px 14.9px 0px rgba(53, 100, 140, 0.35);
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
`;
const Result = styled.span`
  display: inline-flex;
  padding: 17px 135px 18px 135px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background: #fff;
  box-shadow: 0px 0px 14.9px 0px rgba(53, 100, 140, 0.35);
`;
