import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer";
import NoLoginHeader from "../../components/NoLoginHeader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(180deg, #e5e5e5 0%, #ffffff 100%);
`;

const HeaderPlaceholder = styled.div`
  height: 12.5rem; /* Adjust according to the actual header height */
  background: #d3d3d3;
  margin-bottom: 1.25rem;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem;
  flex-grow: 1;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.color.blue};
  font-size: ${(props) => props.theme.fontSize.small};
  margin-bottom: 1.25rem;
  font-weight: lighter;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
`;

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#35648C" : "white")};
  color: ${(props) => (props.primary ? "white" : "#000")};
  border: none;
  padding: 0.625rem 1.25rem;
  border-radius: ${(props) => (props.primary ? "0.3125rem" : "0.3125rem")};
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize.medium};
  box-shadow: 0rem 0.25rem 0.25rem 0rem rgba(0, 0, 0, 0.25);
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  margin-bottom: 2.5rem;
`;

const Card = styled.div`
  background: #f8f9fa;
  border: 0.0625rem solid #ddd;
  border-radius: 0.3125rem;
  padding: 1.25rem;
  text-align: center;
  box-shadow: 0rem 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.div`
  font-size: ${(props) => props.theme.fontSize.medium};
  margin-bottom: 0.625rem;
  color: ${(props) => props.theme.color.darkGray};
`;

const CardContent = styled.div`
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.color.lightGray};
`;

const ViewMoreContainer = styled.div`
  text-align: center;
  margin-bottom: 1.25rem;
`;

const ViewMoreButton = styled.button`
  background-color: #35648C;
  color: white;
  border: none;
  padding: 0.625rem 1.25rem;
  border-radius: 0.3125rem;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize.medium};
`;

const NoLoginMain = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <NoLoginHeader />
      <HeaderPlaceholder />
      <MainContent>
        <img
          src={`${process.env.PUBLIC_URL}/assets/logo/FaceLogoBlue.png`}
          width={"50px"}
          height={"50px"}
          id="logo"
        />
        <Title>
          맞춤형 쉼은 성격 검사 결과를 통해 파악된 맞춤 쉼 활동을<br />
          AI가 카테고리 별, 가까운 장소로 정리해서 보여줍니다.
        </Title>
        <ButtonContainer>
          <Button onClick={() => navigate("/login")}>로그인 하러 가기</Button>
          <Button primary onClick={() => navigate("/register")}>
            회원가입 하러 가기
          </Button>
        </ButtonContainer>
        <GridContainer>
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <Card key={index}>
                <CardTitle>컨텐츠 이름</CardTitle>
                <CardContent>소제목</CardContent>
              </Card>
            ))}
        </GridContainer>
        <ViewMoreContainer>
        <Title>
        휴에서 준비한 맞춤형 쉼을 더 보고싶다면?
        </Title>
          <ViewMoreButton onClick={() => navigate("/more")}>
            더 많은 컨텐츠 보러가기
          </ViewMoreButton>
        </ViewMoreContainer>
      </MainContent>
      <Footer />
    </Container>
  );
};

export default NoLoginMain;
