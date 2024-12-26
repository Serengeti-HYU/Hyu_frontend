import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import LoginHeader from "../../components/LoginHeader";
import Footer from "../../components/footer";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const Main = styled.div`
  margin: auto;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 35rem;
`;

const Logo = styled.img`
  margin: auto;
`;

const Title = styled.h1`
  margin-top: 2rem;
  color: #35648c;
  font-size: 40px;
  font-weight: 700;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 4.94rem;
  #title {
    padding: 0.9375rem 13.0625rem 0.9375rem 13rem;
    border-radius: 1.5625rem;
    box-shadow: 0px 0px 14.9px 0px rgba(53, 100, 140, 0.35);
    color: #35648c;
    font-size: 1.5rem;
    font-weight: 500;
    #bold {
      font-weight: 700;
    }
  }
  #nav {
    display: flex;
    gap: 2.5rem;
    margin-top: 2.5rem;
    margin-bottom: 24rem;

    button {
      border: none;
      display: flex;
      width: 21.875rem;
      padding: 1.125rem 0rem 1.0625rem 0rem;
      justify-content: center;
      border-radius: 0.9375rem;
      background: #fff;
      box-shadow: 0px 0px 14.9px 0px rgba(53, 100, 140, 0.35),
        0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      color: #35648c;
      font-size: 1.25rem;
      font-weight: 500;
    }
    #goMypage {
      color: white;
      background: #35648c;
    }
  }
`;

const ImgWrapper = styled.div``;

const TestResult = () => {
  const navigate = useNavigate();

  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  // 임시
  const token = localStorage.getItem("access_token");
  const username = localStorage.getItem("username");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/hue-test/result`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });
        setResult(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <LoginHeader />
      <Main>
        <Logo
          src={`${process.env.PUBLIC_URL}/assets/logo/LogoGra.png`}
          width="60px"
        />
        <Title>{username}님의 성격 검사 결과</Title>

        <Content>
          <ImgWrapper>
            <img
              src={
                result.resultType
                  ? `${process.env.PUBLIC_URL}/assets/testResult/${result.resultType}.png`
                  : `${process.env.PUBLIC_URL}/assets/testResult/RESULT_1.png`
              }
              width="300px"
            />
          </ImgWrapper>
          <div id="title">
            <span id="bold">{result.typeName}</span>
          </div>
          <div id="message">{result.description}</div>
          <div id="nav">
            <button id="retry" onClick={() => navigate("/personality-test")}>
              재진단
            </button>
            <button id="goMypage" onClick={() => navigate("/mypage")}>
              마이페이지로 이동
            </button>
          </div>
        </Content>
      </Main>
      <Footer />
    </Container>
  );
};
export default TestResult;
