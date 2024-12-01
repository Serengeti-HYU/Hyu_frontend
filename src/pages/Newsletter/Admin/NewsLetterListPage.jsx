import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginHeader from "../../../components/LoginHeader";
import Footer from "../../../components/footer";
import axios from "axios";

const NewsLetterListPage = () => {
  const navigate = useNavigate();

  const [newsletters, setNewsletters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsletters = async () => {
      try {
        const response = await axios.get(`/admin/news-letter`);
        setNewsletters(response.data);
      } catch (err) {
        console.error(err);
        setError("뉴스레터를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchNewsletters();
  }, []);

  if (loading) return <Message>로딩 중...</Message>;
  if (error) return <Message>{error}</Message>;

  return (
    <Container>
      <LoginHeader />
      <Content>
        <Title>뉴스레터 리스트</Title>
        {newsletters.length === 0 ? (
          <Message>등록된 뉴스레터가 없습니다.</Message>
        ) : (
          <List>
            {newsletters.map((newsletter) => (
              <ListItem
                key={newsletter.newsId}
                onClick={() =>
                  navigate(`/admin-newsdetail-page/${newsletter.newsId}`)
                }
              >
                <ItemTitle>{newsletter.title}</ItemTitle>
                <ItemContent>{newsletter.content}</ItemContent>
                <ItemDate>{newsletter.date}</ItemDate>
                <ItemLink href={newsletter.link}>{newsletter.link}</ItemLink>
              </ListItem>
            ))}
          </List>
        )}
        <Button onClick={() => navigate("/admin-newswrite-page")}>
          작성하러 가기
        </Button>
      </Content>
      <Footer />
    </Container>
  );
};

export default NewsLetterListPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #fff;
`;

const Content = styled.div`
  min-height: 75vh;
  width: 80%;
  max-width: 800px;
  margin: 2rem auto;
`;

const Title = styled.h1`
  text-align: center;
  color: #35648c;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  background: #f8f9fa;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const ItemTitle = styled.h2`
  color: #35648c;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ItemContent = styled.p`
  color: #555;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const ItemDate = styled.div`
  color: #999;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const ItemLink = styled.a`
  color: #35648c;
  font-size: 1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Message = styled.div`
  text-align: center;
  color: #999;
  font-size: 1.2rem;
  margin: 2rem 0;
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
