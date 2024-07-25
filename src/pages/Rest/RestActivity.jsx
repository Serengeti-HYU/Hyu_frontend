import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginHeader from "../../components/LoginHeader";
import Footer from "../../components/footer";
import data from "./locationdata.json"; // 시/도와 시군구 데이터

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
  font-size: 32px;
  font-weight: 400;
  line-height: normal;
`;

const Subtitle = styled.h2`
  color: #35648c;
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
  margin-top: 1rem;
`;

const Description = styled.p`
  color: #35648c;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  margin-top: 3rem;
  #hyu {
    font-weight: 900;
  }
`;

const SelectContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
`;

const Select = styled.select`
  padding: 0.5rem;
  font-size: 16px;
  border: none;
  width: 7rem;
  color: #35648c;
  font-weight: 300;
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
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
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
  margin-left: 0.5rem;
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
  margin-left: 0.5rem;
`;

const CardCategory = styled.div`
  color: #fff;
  font-size: 11.426px;
  font-weight: 300;
  position: absolute;
  margin-top: -3.2rem;
  margin-left: 13.8rem;
  text-align: right;
  width: 3rem;
`;

// 카드데이터 샘플
const cardData = [
  {
    title: "안녕",
    description: "힐링인데",
    category: "힐링",
    location: "서울",
    district: "강남구",
  },
  {
    title: "가",
    description: "장소 소개",
    category: "휴식 장소",
    location: "부산",
    district: "해운대구",
  },
  {
    title: "나",
    description: "취미활동",
    category: "취미",
    location: "대구",
    district: "수성구",
  },
  {
    title: "다",
    description: "힐링",
    category: "힐링",
    location: "서울",
    district: "강북구",
  },
  {
    title: "라",
    description: "놀이",
    category: "휴식 장소",
    location: "부산",
    district: "금정구",
  },
  {
    title: "마",
    description: "취미",
    category: "취미",
    location: "대구",
    district: "북구",
  },
];

const RestActivity = () => {
  const navigate = useNavigate();

  const gotoRestActivityDetail = () => {
    navigate(`/rest-activity-detail`);
  };
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("전체보기");
  const [filteredCards, setFilteredCards] = useState(cardData);
  const [districtOptions, setDistrictOptions] = useState([]);

  useEffect(() => {
    const locationData = data.find(
      (province) => province.name === selectedLocation
    );
    setDistrictOptions(locationData ? locationData.subArea : []);
    setSelectedDistrict(""); // Reset district when location changes
  }, [selectedLocation]);

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleFilterClick = () => {
    const filtered = cardData.filter((card) => {
      const matchLocation =
        !selectedLocation || card.location === selectedLocation;
      const matchDistrict =
        !selectedDistrict || card.district === selectedDistrict;
      const matchCategory =
        selectedCategory === "전체보기" || card.category === selectedCategory;
      return matchLocation && matchDistrict && matchCategory;
    });
    setFilteredCards(filtered);
  };

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
        <SelectContainer>
          <Select value={selectedLocation} onChange={handleLocationChange}>
            <option value="">시/도</option>
            {data.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </Select>
          <Select value={selectedDistrict} onChange={handleDistrictChange}>
            <option value="">시/구/군</option>
            {districtOptions.map((district, index) => (
              <option key={index} value={district}>
                {district}
              </option>
            ))}
          </Select>
          <Select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="전체보기">전체보기</option>
            <option value="취미">취미</option>
            <option value="휴식 장소">휴식 장소</option>
            <option value="힐링">힐링</option>
          </Select>
        </SelectContainer>
        <Button type="button" onClick={handleFilterClick}>
          조회하기
        </Button>
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
