import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LoginHeader from "../../components/LoginHeader";
import Footer from "../../components/footer";

// Styled components
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

// 시/도와 시군구 데이터
const data = [
  {
    name: "서울",
    subArea: [
      "강남구",
      "강동구",
      "강북구",
      "강서구",
      "관악구",
      "광진구",
      "구로구",
      "금천구",
      "노원구",
      "도봉구",
      "동대문구",
      "동작구",
      "마포구",
      "서대문구",
      "서초구",
      "성동구",
      "성북구",
      "송파구",
      "양천구",
      "영등포구",
      "용산구",
      "은평구",
      "종로구",
      "중구",
      "중랑구",
    ],
  },
  {
    name: "부산",
    subArea: [
      "강서구",
      "금정구",
      "남구",
      "동구",
      "동래구",
      "부산진구",
      "북구",
      "사상구",
      "사하구",
      "서구",
      "수영구",
      "연제구",
      "영도구",
      "중구",
      "해운대구",
      "기장군",
    ],
  },
  {
    name: "대구",
    subArea: [
      "남구",
      "달서구",
      "동구",
      "북구",
      "서구",
      "수성구",
      "중구",
      "달성군",
    ],
  },
  {
    name: "인천",
    subArea: [
      "강화군",
      "계양구",
      "미추홀구",
      "남동구",
      "남구",
      "동구",
      "부평구",
      "서구",
      "중구",
    ],
  },
  {
    name: "광주",
    subArea: ["광산구", "남구", "동구", "북구", "서구"],
  },
  {
    name: "대전",
    subArea: ["대덕구", "동구", "서구", "유성구", "중구"],
  },
  {
    name: "울산",
    subArea: ["남구", "동구", "북구", "중구", "울주군"],
  },
  {
    name: "경기",
    subArea: [
      "가평군",
      "고양시 덕양구",
      "고양시 일산동구",
      "고양시 일산서구",
      "과천시",
      "광명시",
      "광주시",
      "구리시",
      "군포시",
      "김포시",
      "남양주시",
      "동두천시",
      "부천시",
      "성남시 분당구",
      "성남시 수정구",
      "성남시 중원구",
      "수원시 권선구",
      "수원시 영통구",
      "수원시 장안구",
      "수원시 팔달구",
      "시흥시",
      "안산시 단원구",
      "안산시 상록구",
      "안성시",
      "안양시 동안구",
      "안양시 만안구",
      "양주시",
      "양평군",
      "여주시",
      "연천군",
      "오산시",
      "용인시 기흥구",
      "용인시 수지구",
      "용인시 처인구",
      "의왕시",
      "의정부시",
      "이천시",
      "파주시",
      "평택시",
      "포천시",
      "하남시",
      "화성시",
    ],
  },
  {
    name: "강원",
    subArea: [
      "강릉시",
      "고성군",
      "동해시",
      "삼척시",
      "속초시",
      "양구군",
      "양양군",
      "영월군",
      "원주",
      "정선군",
      "철원군",
      "춘천시",
      "태백시",
      "평창군",
      "홍천군",
      "화천군",
      "횡성군",
    ],
  },
  {
    name: "충북",
    subArea: [
      "괴산군",
      "단양군",
      "보은군",
      "영동군",
      "옥천군",
      "음성군",
      "증평군",
      "진천군",
      "청주시 상당구",
      "청주시 서원구",
      "청주시 흥덕구",
      "청주시 청원구",
      "충주시",
    ],
  },
  {
    name: "충남",
    subArea: [
      "계룡시",
      "공주시",
      "금산군",
      "논산시",
      "보령시",
      "부여군",
      "서산시",
      "서천군",
      "아산시",
      "당진시",
      "천안시 동남구",
      "천안시 서북구",
      "홍성군",
      "예산군",
      "청양군",
    ],
  },
  {
    name: "전북",
    subArea: [
      "고창군",
      "군산시",
      "김제시",
      "남원시",
      "익산시",
      "전주시 덕진구",
      "전주시 완산구",
      "정읍시",
      "진안군",
      "무주군",
      "장수군",
      "임실군",
      "순창군",
      "장성군",
      "완주군",
    ],
  },
  {
    name: "전남",
    subArea: [
      "강진군",
      "광양시",
      "구례군",
      "곡성군",
      "담양군",
      "목포시",
      "무안군",
      "보성군",
      "순천시",
      "신안군",
      "여수시",
      "영광군",
      "영암군",
      "장흥군",
      "진도군",
      "해남군",
    ],
  },
  {
    name: "경북",
    subArea: [
      "경산시",
      "경주시",
      "구미시",
      "김천시",
      "문경시",
      "상주시",
      "안동시",
      "영주",
      "영천시",
      "울릉군",
      "울진군",
      "포항시 남구",
      "포항시 북구",
      "봉화군",
      "청도군",
      "청송군",
      "칠곡군",
      "영양군",
      "군위군",
    ],
  },
  {
    name: "경남",
    subArea: [
      "거제시",
      "거창군",
      "김해시",
      "마산시",
      "밀양시",
      "사천시",
      "산청군",
      "양산시",
      "의령군",
      "진주시",
      "창녕군",
      "창원시 마산합포구",
      "창원시 마산회원구",
      "창원시 성산구",
      "창원시 의창구",
      "창원시 진해구",
      "통영시",
      "함안군",
      "함양군",
      "하동군",
      "합천군",
    ],
  },
  {
    name: "제주",
    subArea: ["서귀포시", "제주시", "남제주군", "북제주군"],
  },
];

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
        !selectedDistrict ||
        (card.location === selectedLocation &&
          card.district === selectedDistrict);
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
        <Button type="button" onClick={handleFilterClick}>
          조회하기
        </Button>
        <Cards>
          {filteredCards.map((card, index) => (
            <Card key={index}>
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
