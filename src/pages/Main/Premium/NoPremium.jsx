import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from 'axios'; // axios 임포트
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
  color: #000000; /* 텍스트 색상 변경 */
  margin-left: 2rem; /* 두 칸 정도 들여쓰기 */
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

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 650px; /* 모달창의 가로 사이즈를 늘림 */
  width: 100%;
  position: relative;
  text-align: center; /* Center align the text */
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #35648C;
`;

const ModalPrice = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #35648C;
`;

const KakaoPayButton = styled.button`
  background: #ffeb00;
  color: #3c1e1e;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 25px;
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem auto 0 auto; /* 중앙 정렬 */

  &:hover {
    background: #ffd700;
  }

  img {
    margin-right: 0.5rem;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #000000;
  width: 100%;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
  appearance: none;
  width: 18px; /* 체크박스 크기를 줄임 */
  height: 18px; /* 체크박스 크기를 줄임 */
  border: 2px solid #35648c;
  border-radius: 50%;
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: #35648c;
    border: 2px solid #ffffff;
  }
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const WarningMessage = styled.div`
  color: red;
  font-size: 1rem;
  margin-top: 1rem;
`;

const GroupedCheckboxes = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;

  & > ${CheckboxLabel} {
    margin-left: 0; /* 요소들 간의 간격을 줄임 */
  }
`;

const KakaoLogo = styled.div`
  display: flex;
`;

const NoPremium = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allChecked, setAllChecked] = useState(false);
  const [checkboxes, setCheckboxes] = useState({
    terms: false,
    privacy: false,
    age: false,
    payment: false,
    refund: false,
    all: false,
  });

  const [paymentComplete, setPaymentComplete] = useState(false);
  const [warningMessage, setWarningMessage] = useState('');

  useEffect(() => {
    // Check URL for payment status
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('payment') === 'success') {
      setPaymentComplete(true);
      setIsModalOpen(true);
    }
  }, []);

  const handlePremiumClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleKakaoPay = () => {
    if (!checkboxes.terms || !checkboxes.age || !checkboxes.payment || !checkboxes.refund) {
      setWarningMessage('필수항목 확인 부탁드립니다.');
      return;
    }

    // 여기에 카카오페이 결제 API 연동 코드를 추가합니다.
    // 예시 URL입니다. 실제로는 서버와 통신하여 결제 요청을 처리해야 합니다.
    window.location.href = "https://kakaopay.com/pay?redirectUrl=https://yourwebsite.com/yourpath?payment=success";
  };

  const handleCheckboxChange = (name) => {
    setCheckboxes((prev) => {
      const newCheckboxes = { ...prev, [name]: !prev[name] };
      newCheckboxes.all = Object.values(newCheckboxes).every((val) => val);
      return newCheckboxes;
    });
  };

  const handleAllCheckboxChange = () => {
    const newAllChecked = !allChecked;
    setAllChecked(newAllChecked);
    setCheckboxes({
      terms: newAllChecked,
      privacy: newAllChecked,
      age: newAllChecked,
      payment: newAllChecked,
      refund: newAllChecked,
      all: newAllChecked,
    });
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
            <Line />
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
      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <ModalHeader>
              <ModalTitle>휴 premium 결제</ModalTitle>
              <ModalPrice>0,000원</ModalPrice>
            </ModalHeader>
            {!paymentComplete ? (
              <>
                <CheckboxLabel>
                  <div>
                    <Checkbox type="checkbox" checked={checkboxes.terms} onChange={() => handleCheckboxChange("terms")} required />
                    <span style={{ fontSize: "1rem", color: "#000000" }}>이용 약관 동의(필수)</span>
                  </div>
                  <a href="#" style={{ fontSize: "0.875rem", color: "#35648C", textDecoration: "underline" }}>약관보기</a>
                </CheckboxLabel>
                <CheckboxLabel>
                  <div>
                    <Checkbox type="checkbox" checked={checkboxes.privacy} onChange={() => handleCheckboxChange("privacy")} />
                    <span style={{ fontSize: "1rem", color: "#000000" }}>개인정보 수집 / 이용 동의(선택)</span>
                  </div>
                  <a href="#" style={{ fontSize: "0.875rem", color: "#35648C", textDecoration: "underline" }}>약관보기</a>
                </CheckboxLabel>
                <ModalTitle style={{ fontSize: "1.2rem", textAlign: 'left', marginLeft: '3rem', color: "#000000" }}>결제 동의</ModalTitle>
                <GroupedCheckboxes>
                  <CheckboxLabel>
                    <div>
                      <Checkbox type="checkbox" checked={checkboxes.age} onChange={() => handleCheckboxChange("age")} required />
                      <span style={{ fontSize: "1rem", color: "#000000" }}>만 14세 이상입니다.</span>
                    </div>
                    <div style={{ marginRight: "3rem" }}>
                      <Checkbox type="checkbox" checked={checkboxes.payment} onChange={() => handleCheckboxChange("payment")} required />
                      <span style={{ fontSize: "1rem", color: "#000000" }}>결제 정보를 확인하였으며 결제에 동의합니다.</span>
                    </div>
                  </CheckboxLabel>
                  <CheckboxLabel>
                    <div>
                      <Checkbox type="checkbox" checked={checkboxes.refund} onChange={() => handleCheckboxChange("refund")} required />
                      <span style={{ fontSize: "1rem", color: "#000000" }}>환불 규정 동의</span>
                      <a href="#" style={{ fontSize: "0.875rem", color: "#35648C", textDecoration: "underline", marginLeft: "0.5rem" }}>약관보기</a>
                    </div>
                  </CheckboxLabel>
                </GroupedCheckboxes>
                <CheckboxLabel>
                  <div>
                    <Checkbox type="checkbox" checked={checkboxes.all} onChange={handleAllCheckboxChange} required />
                    <BoldText style={{ fontSize: "1rem", color: "#000000" }}>전체 동의</BoldText>
                  </div>
                </CheckboxLabel>
                <div style={{ textAlign: "center", width: "100%", fontSize: "0.875rem", color: "#35648C", marginBottom: "1rem" }}>
                  25.00.00 까지 premium 사용자로 이용 가능합니다.
                </div>
                {warningMessage && <WarningMessage>{warningMessage}</WarningMessage>}
                <KakaoPayButton onClick={handleKakaoPay}>
                <img src={`${process.env.PUBLIC_URL}/assets/icons/kako_img.png`} alt="kakao_logo" width="20rem" />
                  kakao pay
                </KakaoPayButton>
              </>
            ) : (
              <>
                <ModalTitle>휴 premium 결제 완료</ModalTitle>
                <div style={{ fontSize: "1.25rem", color: "#35648C", marginBottom: "1rem" }}>25.00.00 까지 premium 사용자로 이용 가능합니다.</div>
                <button
                  style={{
                    background: "#35648C",
                    color: "#ffffff",
                    padding: "0.75rem 1.5rem",
                    border: "none",
                    borderRadius: "25px",
                    fontSize: "1.25rem",
                    cursor: "pointer",
                    boxShadow: "0px 0px 14.9px 0px rgba(53, 100, 140, 0.35)",
                    margin: "1.5rem auto 0 auto",
                  }}
                  onClick={() => navigate("/mypage")}
                >
                  마이페이지로 이동
                </button>
              </>
            )}
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default NoPremium;
