import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

// const cardData = [
//   {
//     title: "안녕gkgkgkgkgk",
//     description: "힐링인데",
//     category: "힐링",
//   },
//   {
//     title: "가",
//     description: "장소 소개하려고요",
//     category: "휴식 장소",
//   },
//   { title: "나", description: "카테고리 한국어로 뜨게 할래", category: "취미" },
//   { title: "다", description: "ㅎㅇ", category: "휴식 장소" },
//   { title: "다", description: "ㅃㅇ", category: "휴식 장소" },
//   { title: "다", description: "내용", category: "휴식 장소" },
// ];

const Storage = () => {
  const navigate = useNavigate();

  const gotoRestActivityDetail = () => {
    navigate(`/rest-activity-detail`);
  };

  const [scrabList, setScrabList] = useState([]);
  const [loading, setLoading] = useState(false);
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("tempToken");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/${username}/hue-activity`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });
        const restList = response.data.map((item) => item.rest);
        setScrabList(restList);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const [selectedCategory, setSelectedCategory] = useState("전체보기");
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  const filteredCards = scrabList.filter((card) =>
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
          <Card
            key={index}
            onClick={() => navigate(`/rest-activity-detail/${card.restId}`)}
          >
            <CardImage src={card.image} />
            <CardTitle>{card.restName}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
            <CardCategory>{card.category}</CardCategory>
          </Card>
        ))}
      </Cards>
    </Container>
  );
};
export default Storage;

const Container = styled.div`
  display: flex;
  margin: auto;
  width: 90%;
  max-width: 967px;
  flex-direction: column;
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
  margin-top: 2rem;
  justify-items: center;
  gap: 1rem;
`;

const Card = styled.div`
  border-radius: 21.973px;
  background: linear-gradient(180deg, #f2e8c9 0%, #35648c 100%);
  box-shadow: 0px 3.516px 3.516px 0px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  text-align: left;
  width: 17rem;
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  background: lightgray;
  border-radius: 10px;
  margin-bottom: 1rem;
  object-fit: cover;
`;

const CardTitle = styled.h3`
  color: #fff;
  font-size: 17.579px;
  font-weight: 500;
  width: 55%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardDescription = styled.div`
  position: relative;
  color: #fff;
  font-size: 14.063px;
  font-weight: 400;
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: -0.3rem;
`;

const CardCategory = styled.div`
  color: #fff;
  font-size: 11.426px;
  font-weight: 300;
  position: absolute;
  margin-top: -3rem;
  margin-left: 11.6rem;
  text-align: right;
  width: 3rem;
`;
