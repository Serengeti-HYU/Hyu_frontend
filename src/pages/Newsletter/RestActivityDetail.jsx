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
const Main = styled.main`
  width: 100%;
  max-width: 1200px;
  margin-top: 3rem;
  text-align: left;
`;
const Logo = styled.img`
  position: absolute;
  margin-top: 2rem;
  margin-left: 1rem;
`;
const Title = styled.div`
  color: #35648c;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 7rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
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

const LinkBox = styled.div`
  display: flex;
  display: flex;
  width: 32.5rem;
  height: 60px;
  padding: 18px 379px 17px 32px;
  align-items: flex-start;
  gap: 5px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #fff;
  box-shadow: 0px 0px 15.4px 0px rgba(53, 100, 140, 0.35);
  #link {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 430px;
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
`;

const LinkIcon = styled.img`
  margin-right: 0.5rem;
`;
const Btn = styled.img``;
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
              <LinkBox>
                <LinkIcon
                  src={`${process.env.PUBLIC_URL}/assets/icons/link-one.svg`}
                  alt="link icon"
                />
                <span id="link">
                  관련 링크
                  https://www.figma.com/design/50vfzSJ9uv3DBIDO5x9BKb/%ED%9C%B4?node-id=52-212&m=dev
                </span>
              </LinkBox>
              <BtnWrapper>
                <Btn
                  src={`${process.env.PUBLIC_URL}/assets/buttons/scrab.svg`}
                  alt="scrab"
                />
                <Btn
                  src={`${process.env.PUBLIC_URL}/assets/buttons/linkcopy.svg`}
                  alt="copy"
                />
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
