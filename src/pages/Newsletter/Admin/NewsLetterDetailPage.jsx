import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import LoginHeader from "../../../components/LoginHeader";
import Footer from "../../../components/footer";

const NewsLetterDetailPage = () => {
  const navigate = useNavigate();
  const { newsId } = useParams();
  const [news, setNews] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    link: "",
  });

  useEffect(() => {
    axios
      .get(`/admin/news-letter/${newsId}`)
      .then((response) => {
        setNews(response.data);
        setFormData({
          title: response.data.title,
          content: response.data.content,
          link: response.data.link,
        });
      })
      .catch((error) => {
        console.error("뉴스 상세 조회 실패:", error);
      });
  }, [newsId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await axios.patch(`/admin/news-letter/${newsId}`, formData);
      setIsEditing(false);
      setNews({
        ...news, // 기존 뉴스 데이터
        ...formData, // 수정된 데이터
      });
      alert("수정이 완료되었습니다.");
    } catch (error) {
      console.error("수정 실패:", error);
      alert("수정 중 오류가 발생했습니다.");
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData({
      title: news.title,
      content: news.content,
      link: news.link,
    });
  };

  const handleDelete = async () => {
    const confirmation = window.confirm("정말로 삭제하시겠습니까?");
    if (confirmation) {
      try {
        await axios.delete(`/admin/news-letter/${newsId}`);
        alert("뉴스레터가 삭제되었습니다.");
        navigate("/admin-newslist-page");
      } catch (error) {
        console.error("삭제 실패:", error);
        alert("삭제 중 오류가 발생했습니다.");
      }
    }
  };
  if (!news) {
    return <Loading>로딩 중...</Loading>;
  }

  return (
    <Container>
      <LoginHeader />
      <Main>
        {isEditing ? (
          <>
            <InputLabel>
              제목
              <Input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </InputLabel>
            <InputLabel>
              내용
              <Textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
              />
            </InputLabel>
            <InputLabel>
              링크
              <Input
                type="text"
                name="link"
                value={formData.link}
                onChange={handleChange}
              />
            </InputLabel>
            <ButtonContainer>
              <Button onClick={handleSave}>저장</Button>
              <Button onClick={handleCancel}>취소</Button>
            </ButtonContainer>
          </>
        ) : (
          <>
            <Title>{news.title}</Title>
            <Date>{news.date}</Date>
            <Content>{news.content}</Content>
            <LinkButton
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              링크 이동
            </LinkButton>
            <ButtonContainer>
              <Button onClick={() => setIsEditing(true)}>수정</Button>
              <Button onClick={handleDelete}>삭제</Button>
            </ButtonContainer>
          </>
        )}
      </Main>
      <Footer />
    </Container>
  );
};
export default NewsLetterDetailPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: #fff;
`;

const Main = styled.div`
  margin: 3rem 1rem;
  padding: 2rem;
  width: 100%;
  max-width: 800px;
  background: #f9f9f9;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #35648c;
  margin-bottom: 1rem;
`;

const Date = styled.p`
  font-size: 14px;
  color: #888;
  margin-bottom: 1.5rem;
`;

const Content = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 2rem;
`;

const LinkButton = styled.a`
  display: inline-block;
  padding: 0.2rem 1rem;
  background: lightgray;
  color: white;
  font-size: 16px;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background: #294b72;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background: #35648c;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #294b72;
  }
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 1rem;
  font-size: 16px;
  color: #4a6fa5;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Loading = styled.p`
  font-size: 20px;
  color: #888;
  text-align: center;
  margin-top: 2rem;
`;
