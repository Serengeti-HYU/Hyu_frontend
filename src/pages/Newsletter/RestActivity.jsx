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
const AdZone = styled.div`
  width: 100%;
  display: flex;
  height: 479px;
  padding-bottom: 53.5px;
  justify-content: center;
  align-items: center;
  background: #eaeaea;
`;
const Main = styled.main`
  width: 100%;
  max-width: 967px;
  margin-top: 3rem;
  text-align: center;
  #two {
    margin-top: 9rem;
  }
`;
const Logo = styled.img``;
const Title = styled.h1`
  color: #35648c;
  font-family: SUIT;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Subtitle = styled.h2`
  color: #35648c;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
  margin-top: 1rem;
`;
const Description = styled.p`
  color: #35648c;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 3rem;
  #hyu {
    font-weight: 900;
  }
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 4rem;
`;

const Select = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
`;

const Button = styled.button`
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 5rem;
  display: flex;
  width: 230px;
  padding: 16px 0px 17px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #35648c;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  color: #fff;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;
`;
const Card = styled.div`
  border-radius: 21.973px;
  background: linear-gradient(180deg, #f2e8c9 0%, #35648c 100%);
  box-shadow: 0px 3.516px 3.516px 0px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  text-align: left;
`;

const CardImage = styled.div`
  width: 100%;
  height: 150px;
  background: lightgray;
  border-radius: 10px;
  margin-bottom: 1rem;
`;
const CardTitle = styled.h3`
  color: #fff;
  font-family: SUIT;
  font-size: 17.579px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const CardDescription = styled.span`
  color: #fff;
  font-family: SUIT;
  font-size: 14.063px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const CardCategoty = styled.span`
  color: #fff;
  font-family: SUIT;
  font-size: 11.426px;
  font-style: normal;
  font-weight: 300;
  width: 100px;
  line-height: normal;
  position: absolute;
  margin-top: -2.2rem;
  margin-left: 8rem;
  text-align: right;
`;

const RestActivity = () => {
  return (
    <Container>
      <LoginHeader />
      <AdZone>광고 배너</AdZone>
      <Main>
        <Title>00님의 휴식을 위한 맞춤형 쉼입니다.</Title>
        <Logo
          src={`${process.env.PUBLIC_URL}/assets/logo/FaceLogoBlue.png`}
          width={"101px"}
          id="logo"
        />
        <Subtitle>성격 검사 재진단 받기</Subtitle>
        <Description>
          맞춤형 쉼은 성격 검사 결과를 통해 파악된 00님 맞춤 쉼 활동을 <br />
          AI가 카테고리 별, 00님과 가까운 장소로 정렬해서 보여드립니다.
        </Description>
        <Form>
          <Select>
            <option value="">시/도</option>
          </Select>
          <Select>
            <option value="">시/구/군</option>
          </Select>
          <Select>
            <option value="">전체보기</option>
          </Select>
        </Form>
        <Button>조회하기</Button>
        <Cards>
          <Card>
            <CardImage />
            <CardTitle>쉼 활동 이름</CardTitle>
            <CardDescription>소개글</CardDescription>
            <CardCategoty>분류 카테고리</CardCategoty>
          </Card>
          <Card>
            <CardImage />
            <CardTitle>쉼 활동 이름</CardTitle>
            <CardDescription>소개글</CardDescription>
            <CardCategoty>카테고리</CardCategoty>
          </Card>
          <Card>
            <CardImage />
            <CardTitle>쉼 활동 이름</CardTitle>
            <CardDescription>소개글</CardDescription>
            <CardCategoty>카테고리</CardCategoty>
          </Card>
          <Card>
            <CardImage />
            <CardTitle>쉼 활동 이름</CardTitle>
            <CardDescription>소개글</CardDescription>
            <CardCategoty>카테고리</CardCategoty>
          </Card>
          <Card>
            <CardImage />
            <CardTitle>쉼 활동 이름</CardTitle>
            <CardDescription>소개글</CardDescription>
            <CardCategoty>카테고리</CardCategoty>
          </Card>
          <Card>
            <CardImage />
            <CardTitle>쉼 활동 이름</CardTitle>
            <CardDescription>소개글</CardDescription>
            <CardCategoty>카테고리</CardCategoty>
          </Card>
        </Cards>
        <Description id="two">
          <span id="hyu">휴</span>에서 00님을 위해 준비한 맞춤형 쉼을 더
          보고싶다면?
        </Description>
        <Button style={{ marginTop: "2rem" }}>
          더 많은 맞춤형 쉼 보러가기
        </Button>
      </Main>
      <Footer />
    </Container>
  );
};

export default RestActivity;
