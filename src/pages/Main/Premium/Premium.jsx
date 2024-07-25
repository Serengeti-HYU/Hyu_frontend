import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Footer from "../../../components/footer";
import LoginHeader from "../../../components/LoginHeader";

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
  background-color: #f5f5f5;
  padding: 2rem;
`;

const InnerContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 5rem;
`;

const Logo = styled.img`
  width: 150px;
  margin-right: 5rem;
  margin-left: 7rem; /* 로고를 오른쪽으로 이동시키기 위해 margin-left 사용 */
`;

const Line = styled.div`
  width: 150%;
  height: 0.1875rem;
  background: linear-gradient(to right, #f2e8c9, #35648c 50%, #f2e8c9);
  margin: 1.25rem 0;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #35648c;
  margin-bottom: 1rem;
  margin-left: 1rem;
`;

const PremiumInfo = styled.div`
  color: #35648c;
  margin-bottom: 2rem;
  margin-left: 2rem;
`;

const FeaturesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 2rem 0;
  margin-left: 2rem;
  margin-top: -0.5rem;
`;

const Feature = styled.li`
  margin: 0.5rem 0;
  font-size: 1.25rem;
  line-height: 1.5;
`;

const FeatureTitle = styled.div`
  font-weight: bold;
  margin-bottom: 0.25rem;
  color: #35648C;
  position: relative;
  padding-left: 1rem;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #35648C;
    font-size: 1.5rem;
    line-height: 1;
  }
`;

const FeatureDescription = styled.div`
  font-size: 1rem;
  color: #35648c;
`;

const PremiumButton = styled.button`
  background: linear-gradient(180deg, #F2E8C9 0%, #35648C 100%);
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 25px;
  font-size: 1.25rem;
  cursor: pointer;
  box-shadow: 0px 0px 14.9px 0px rgba(53, 100, 140, 0.35);

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: linear-gradient(180deg, #e6d5a8 0%, #2f5579 100%);
  }
`;

const CrownEmoji = styled.span`
  margin-right: 0.5rem; /* 이모지와 텍스트 사이의 간격 조절 */
  width: 1.25rem;
  height: 1.125rem;
  flex-shrink: 0;
`;

const Premium = () => {
  const navigate = useNavigate();

  const handlePremiumClick = () => {
    navigate("/premium/payment");
  };

  return (
    <Container>
      <LoginHeader />
      <Content>
        <InnerContent>
          <Logo src={`${process.env.PUBLIC_URL}/assets/logo/LogoGra.png`} alt="Vector Logo" />
          <TextContainer>
            <Title>휴 premium</Title>
            <PremiumInfo>0,000 원 / 1년</PremiumInfo>
            <Line /> {/* 여기서 가로선을 추가합니다 */}
            <FeaturesList>
              <Feature>
                <FeatureTitle>감정 기록</FeatureTitle>
                <FeatureDescription>다양한 감정 추가가 가능한 감정 커스텀</FeatureDescription>
              </Feature>
              <Feature>
                <FeatureTitle>사용자 맞춤형 쉼 활동 추천</FeatureTitle>
                <FeatureDescription>기존 추천보다 더 많은 쉼 활동 추천</FeatureDescription>
              </Feature>
              <Feature>
                <FeatureTitle>광고 제거</FeatureTitle>
              </Feature>
            </FeaturesList>
          </TextContainer>
        </InnerContent>
        <PremiumButton onClick={handlePremiumClick}>
          <CrownEmoji>
            <img src={`${process.env.PUBLIC_URL}/assets/icons/crown.png`} alt="Crown" width="20rem" />
          </CrownEmoji>
          premium 결제
        </PremiumButton>
      </Content>
      <Footer />
    </Container>
  );
};

export default Premium;
