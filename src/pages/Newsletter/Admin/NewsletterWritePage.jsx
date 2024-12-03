import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import LoginHeader from "../../../components/LoginHeader";
import Footer from "../../../components/footer";

const NewsletterWritePage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = async () => {
    const formData = { title, content, link };

    try {
      const response = await axios.post("/admin/news-letter", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("뉴스레터가 작성되었습니다.");
      console.log("응답 데이터:", response.data);
      setTitle("");
      setContent("");
      setLink("");
    } catch (error) {
      console.error("뉴스레터 작성 실패:", error);
      alert("뉴스레터 작성에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleGoToList = () => {
    navigate("/admin-newslist-page");
  };

  return (
    <Container>
      <LoginHeader />
      <Main>
        <Title>뉴스레터 작성</Title>
        <Label>
          제목
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="뉴스레터 제목을 입력하세요"
            required
          />
        </Label>
        <Label>
          내용
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="뉴스레터 내용을 입력하세요"
            rows="8"
            required
          />
        </Label>
        <Label>
          링크
          <Input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="관련 링크를 입력하세요"
            required
          />
        </Label>
        <ButtonContainer>
          <Button onClick={handleSubmit}>작성</Button>
          <Button onClick={handleGoToList}>목록</Button>
        </ButtonContainer>
      </Main>
      <Footer />
    </Container>
  );
};

export default NewsletterWritePage;

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
  max-width: 600px;
  background: #f9f9f9;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 24px;
  color: #35648c;
  text-align: center;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: #4a6fa5;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  margin-top: 0.5rem;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  margin-top: 0.5rem;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  resize: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 0.75rem;
  background: #35648c;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #294b72;
  }
`;
