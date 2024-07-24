import React from "react";
import styled from "styled-components";
import LoginHeader from "../../components/LoginHeader";
import Footer from "../../components/footer";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Logo = styled.img``;
const Main = styled.main`
  width: 100%;
  max-width: 1200px;
  margin-top: 3rem;
  text-align: left;
`;
const Title = styled.span`
  color: #35648c;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const ActivityHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  #wrapper {
    width: 35rem;
  }
  #wrapper img {
    position: relative;
    top: 11px;
  }
`;
const Line = styled.hr``;
const ActivityTitle = styled.span`
  color: #000;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 2;
`;

const Category = styled.span`
  color: #7a7a7a;
  font-size: 1rem;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
`;

const ImageWrapper = styled.div`
  width: 50%;
`;

const Image = styled.div`
  width: 100%;
  height: 300px;
  background: lightgray;
  border-radius: 10px;
`;

const Description = styled.div`
  width: 45%;
  font-size: 1rem;
  color: #000;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

const LinkButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background: #f1f1f1;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const LinkIcon = styled.img`
  margin-right: 0.5rem;
`;
const Btn = styled.button``;
const BtnWrapper = styled.div`
  margin-bottom: 20rem;
`;

const RestActivityDetail = () => {
  return (
    <Container>
      <LoginHeader />
      <Main>
        <Logo
          src={`${process.env.PUBLIC_URL}/assets/logo/LogoGra.png`}
          width={"60px"}
          id="logo"
        />
        <Title>00님의 휴식을 위한 맞춤형 쉼입니다.</Title>
        <ActivityHeader>
          <span id="wrapper">
            <img src={`${process.env.PUBLIC_URL}/assets/newsletter/left.svg`} />
            <ActivityTitle>쉼 활동 이름</ActivityTitle>
          </span>
          <Category>(분류 카테고리)</Category>
        </ActivityHeader>
        <Line />
        <Content>
          <ImageWrapper>
            <Image />
          </ImageWrapper>
          <Description>
            쉼 활동 소개 글
            <LinksWrapper>
              <LinkButton>
                <LinkIcon
                  src={`${process.env.PUBLIC_URL}/assets/icons/link.svg`}
                  alt="link icon"
                />
                관련 링크
              </LinkButton>
              <BtnWrapper>
                <Btn>북마크</Btn>
                <Btn>편집</Btn>
              </BtnWrapper>
            </LinksWrapper>
          </Description>
        </Content>
      </Main>
      <Footer />
    </Container>
  );
};

export default RestActivityDetail;
