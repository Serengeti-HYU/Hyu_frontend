import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 1240px;
  height: 811px;
  background: pink;
`;
const Title = styled.div`
  color: #35648c;
  font-family: SUIT;
  font-size: 48px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-top: 9rem;
  margin-right: 60rem;
`;
const Content = styled.div`
  color: #000;
  font-family: SUIT;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-align: left;
  margin-left: 2rem;
  margin-top: 1rem;
  #hyu {
    color: #35648c;
    font-weight: 600;
  }
`;
const LetterPic = styled.div``;

const LetterInfo = () => {
  return (
    <Container>
      <Title>휴~ 레터</Title>
      <Content>
        매주 쉬는 날 뭐하지? 하는 고민을 덜어주기 위해서 <br />한 주에 한번
        <span id="hyu">휴~레터</span>가 쉼 활동을 추천해 줍니다.
      </Content>
      <LetterPic>여기 편지사진 띄울 예정</LetterPic>
    </Container>
  );
};

export default LetterInfo;
