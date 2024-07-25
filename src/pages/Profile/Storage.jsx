import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  width: 100%;
  max-width: 967px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const Filter = styled.select`
  padding: 0.5rem;
  font-size: 16px;
  border: none;
  width: 7rem;
  color: #35648c;
  font-weight: 300;
`;

const Cards = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;
  justify-items: center;
`;

const Card = styled.div`
  border-radius: 21.973px;
  background: linear-gradient(180deg, #f2e8c9 0%, #35648c 100%);
  box-shadow: 0px 3.516px 3.516px 0px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  text-align: left;
  width: 19.5rem;
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
  font-weight: 500;
  margin-left: 1rem;
  width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardDescription = styled.div`
  position: relative;
  color: #fff;
  font-size: 14.063px;
  font-weight: 400;
  width: 95%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: -0.3rem;
  margin-left: 1rem;
`;

const CardCategory = styled.div`
  color: #fff;
  font-size: 11.426px;
  font-weight: 300;
  position: absolute;
  margin-top: -3.2rem;
  margin-left: 14.5rem;
  text-align: right;
`;

const cardData = [
  {
    title: "안녕gkgkgkgkgkgkgkgkgk",
    description: "힐링인데",
    category: "힐링",
  },
  {
    title: "가",
    description:
      "장소 소개하려고요가나다아라라라라라ㅏㄹ라라라라라라라라라라라라라라라랄라라라라라라라랄랄라라라라라라ㅏㅏㄹ라",
    category: "휴식 장소",
  },
  { title: "나", description: "카테고리 한국어로 뜨게 할래", category: "취미" },
  { title: "다", description: "ㅎㅇ", category: "휴식 장소" },
  { title: "다", description: "ㅃㅇ", category: "휴식 장소" },
  { title: "다", description: "내용", category: "휴식 장소" },
];

const Storage = () => {
  const navigate = useNavigate();

  const gotoRestActivityDetail = () => {
    navigate(`/rest-activity-detail`);
  };

  const [selectedCategory, setSelectedCategory] = useState("전체보기");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredCards = cardData.filter((card) =>
    selectedCategory === "전체보기" ? true : card.category === selectedCategory
  );

  return (
    <Container>
      <FilterContainer>
        <Filter onChange={handleCategoryChange} value={selectedCategory}>
          <option value="전체보기">전체보기</option>
          <option value="취미">취미</option>
          <option value="휴식 장소">휴식 장소</option>
          <option value="힐링">힐링</option>
        </Filter>
      </FilterContainer>
      <Cards>
        {filteredCards.map((card, index) => (
          <Card key={index} onClick={gotoRestActivityDetail}>
            <CardImage />
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
            <CardCategory>{card.category}</CardCategory>
          </Card>
        ))}
      </Cards>
    </Container>
  );
};

export default Storage;
