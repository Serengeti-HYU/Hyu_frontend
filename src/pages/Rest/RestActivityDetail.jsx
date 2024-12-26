import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import LoginHeader from "../../components/LoginHeader";
import Footer from "../../components/footer";
import CopyComplete from "./CopyComplete";
import axios from "axios";

const RestActivityDetail = () => {
  const { restId } = useParams();
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrabbed, setScrabbed] = useState(false);
  const [showCopyComplete, setShowCopyComplete] = useState(false);

  // 임시
  const token = localStorage.getItem("access_token");
  const username = localStorage.getItem("username");

  const navigate = useNavigate();
  const gotoBack = () => {
    navigate(-1);
  };

  const toggleScrab = async () => {
    try {
      const response = await axios.post(
        `/hue-activity/${restId}/bookmark`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Bookmark response:", response.data);
      alert("쉼 활동이 저장되었습니다.");
      setScrabbed(!scrabbed); // 버튼 색깔 변경. 사전에 스크랩 유무 받아올 수 없으면 아예 빼는 것도 ㄱㅊ을듯
    } catch (error) {
      // 500에러 뜨면(이미 스크랩 상태니까) 스크랩 취소 요청
      if (error.response && error.response.status === 500) {
        try {
          const unbookmarkResponse = await axios.delete(
            `/hue-activity/${restId}/bookmark`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("Unbookmark response:", unbookmarkResponse.data);
          alert("쉼활동 저장이 취소되었습니다.");
          setScrabbed(!scrabbed);
        } catch (unbookmarkError) {
          console.error(unbookmarkError);
        }
      } else {
        console.error(error);
      }
    }
  };

  const toggleShare = async () => {
    try {
      const response = await axios.get(`/hue-activity/${restId}/share`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const shareLink = response.data;
      if (shareLink) {
        // 클립보드에 공유 링크 복사
        navigator.clipboard
          .writeText(shareLink)
          .then(() => {
            alert(
              shareLink +
                "\n링크가 클립보드에 복사되었습니다.\n쉼활동을 공유해보세요!"
            );
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        console.warn("링크 없음");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const toggleCopy = () => {
    if (post.link) {
      navigator.clipboard
        .writeText(post.link)
        .then(() => {
          setShowCopyComplete(true);
          setTimeout(() => setShowCopyComplete(false), 3000);
        })
        .catch((err) => console.error(err));
    } else {
      console.warn("복사할 링크 없음");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/hue-activity/${restId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });
        setPost(response.data);
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
          width={"60px"}
          id="logo"
        />
        <Title>{username}님의 휴식을 위한 맞춤형 쉼입니다.</Title>
        <ActivityHeader>
          <span id="wrapper" onClick={gotoBack}>
            <img
              id="backbtn"
              src={`${process.env.PUBLIC_URL}/assets/newsletter/left.svg`}
            />
            <ActivityTitle>{post.restName}</ActivityTitle>
          </span>
          <Category>({post.category})</Category>
        </ActivityHeader>
        <Line />
        <Content>
          <Image src={post.image} />
          <DescriptionWrapper>
            <Description>{post.description}</Description>
            <LinksWrapper>
              <LinkBox>
                <LinkIcon
                  src={`${process.env.PUBLIC_URL}/assets/icons/link-one.svg`}
                  alt="link icon"
                  onClick={toggleCopy}
                />
                <span id="link">{post.link}</span>
              </LinkBox>
              <BtnWrapper>
                <Btn
                  src={
                    scrabbed
                      ? `${process.env.PUBLIC_URL}/assets/buttons/scrabok.svg`
                      : `${process.env.PUBLIC_URL}/assets/buttons/scrab.svg`
                  }
                  alt="scrab"
                  onClick={toggleScrab}
                />
                <Btn
                  src={`${process.env.PUBLIC_URL}/assets/buttons/linkcopy.svg`}
                  alt="share"
                  onClick={toggleShare}
                />
              </BtnWrapper>
            </LinksWrapper>
          </DescriptionWrapper>
        </Content>
        {showCopyComplete && <CopyComplete />}
      </Main>
      <Footer />
    </Container>
  );
};

export default RestActivityDetail;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin-top: 3rem;
  text-align: left;
  margin-bottom: 5rem;
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
  #backbtn {
    cursor: pointer;
  }
`;

const Line = styled.hr`
  width: 100%;
  height: 0.2rem; /* 5px to rem */
  border: none;
  background-color: rgba(53, 100, 140, 0.35);
`;

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
  width: 85%;
  margin-top: 3rem;
  height: 35rem;
`;
const Image = styled.img`
  width: 30.625rem;
  height: 23rem;
  background: lightgray;
  border-radius: 10px;
`;

const DescriptionWrapper = styled.div`
  width: 45%;
`;
const Description = styled.div`
  width: 100%;
  height: 15rem;
  font-size: 1rem;
  color: #000;
  margin-top: 1rem;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LinkBox = styled.div`
  display: flex;
  display: flex;
  width: 32.5rem;
  height: 60px;
  padding: 18px 32px;
  align-items: center;
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
  cursor: pointer;
`;
const Btn = styled.img`
  cursor: pointer;
`;
const BtnWrapper = styled.div`
  display: flex;
  margin-bottom: 20rem;
  margin-left: 18rem;
`;
