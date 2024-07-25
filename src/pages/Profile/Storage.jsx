// Storage.js
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  width: 100%;
  max-width: 967px;
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
  font-size: 17.579px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const CardDescription = styled.span`
  color: #fff;
  font-size: 14.063px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const CardCategoty = styled.span`
  color: #fff;
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

const Storage = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Storage;
