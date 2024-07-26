import React, { useState } from "react";
import styled from "styled-components";
import LoginHeader from "../../components/LoginHeader";
import Footer from "../../components/footer";

// 데이터
const questions = [
  "휴일이 생기면 바로 약속을 잡는다.",
  "휴일에는 근무일에 비해 연락 확인 빈도가 줄어든다.",
  "운동, 모임 등 사람들과 함께 휴식을 즐긴다.",
  "휴일에도 업무를 하는 경우가 많다.",
  "외출을 하면 제대로 쉬었다는 기분이 들지 않는다.",
  "평소 일터에 클래스를 즐긴다.",
  "남들보다 조용한 취미를 갖고있다.",
  "휴일에 도시보다 자연을 찾는다.",
  "휴일에는 평소 못 해본 경험을 찾는다.",
  "집에 혼자 있을 때 외로움을 잘 느낀다.",
];

const options = ["매우 그렇다", "그렇다", "그렇지 않다", "매우 그렇지 않다"];
const optionSizes = [5, 3.6, 3.6, 5];

// 항목 별 유형 데이터
const results = [
  [2, 4, 3, 1],
  [1, 3, 4, 2],
  [2, 4, 3, 1],
  [3, 4, 1, 2],
  [1, 3, 4, 2],
  [4, 2, 3, 1],
  [3, 1, 4, 2],
  [3, 4, 2, 1],
  [4, 2, 3, 1],
  [2, 4, 3, 1],
];

const PersonalityTest = () => {
  const [responses, setResponses] = useState(
    Array(questions.length).fill(null)
  );

  const handleChange = (questionIndex, value) => {
    const newResponses = [...responses];
    newResponses[questionIndex] = value;
    setResponses(newResponses);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const frequency = [0, 0, 0, 0]; // 1, 2, 3, 4

    responses.forEach((response, index) => {
      if (response !== null) {
        const answerType = results[index][response];
        frequency[answerType - 1] += 1;
      }
    });

    const maxFrequency = Math.max(...frequency);
    const mostFrequentOptions = frequency
      .map((count, index) => (count === maxFrequency ? index + 1 : null))
      .filter((index) => index !== null);

    console.log("가장 많이 선택된 유형:", mostFrequentOptions);
    console.log("선택 결과 배열: ", responses);
    console.log("유형 결과 배열: ", frequency);
  };

  return (
    <Container>
      <LoginHeader />
      <Main>
        <Logo
          src={`${process.env.PUBLIC_URL}/assets/logo/LogoGra.png`}
          width="60px"
        />
        <Title>성격 검사 진단</Title>
        <SubTitle>
          00님의 맞춤형 쉼터를 위해 성격 검사로 휴 유형을 진단해드릴게요.
        </SubTitle>
        <Form onSubmit={handleSubmit}>
          {questions.map((question, index) => (
            <Question key={index}>
              <QuestionText>{question}</QuestionText>
              <RadioGroup>
                {options.map((option, optionIndex) => (
                  <RadioContainer key={optionIndex}>
                    <RadioInput
                      type="radio"
                      id={`q${index}a${optionIndex}`}
                      name={`q${index}`}
                      value={optionIndex}
                      checked={responses[index] === optionIndex}
                      onChange={() => handleChange(index, optionIndex)}
                    />
                    <RadioLabel
                      htmlFor={`q${index}a${optionIndex}`}
                      size={optionSizes[optionIndex]}
                    />
                    <OptionLabel>{option}</OptionLabel>
                  </RadioContainer>
                ))}
              </RadioGroup>
            </Question>
          ))}
          <Button type="submit">진단 결과 보기</Button>
        </Form>
      </Main>
      <Footer />
    </Container>
  );
};

export default PersonalityTest;

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

const SubTitle = styled.h2`
  margin: 3rem 0;
  color: #35648c;
  font-size: 20px;
  font-weight: 400;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5rem 0;
  max-width: 29rem;
`;

const Question = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

const QuestionText = styled.div`
  margin: 0 0 2rem 0;
  color: #35648c;
  font-size: 22px;
  font-weight: 700;
`;

const RadioGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
  min-width: 5rem;
  height: 7rem;
  justify-content: flex-end;
`;

const RadioInput = styled.input`
  display: none;
  &:checked + label {
    background: linear-gradient(180deg, #f2e8c9 0%, #35648c 100%);
    filter: drop-shadow(0px 0px 7.6px #35648c);
    color: white;
  }
`;

const RadioLabel = styled.label`
  border: 1px solid #4a6fa5;
  border-radius: 50%;
  width: ${(props) => props.size}rem;
  height: ${(props) => props.size}rem;
  line-height: ${(props) => props.size}rem;
  text-align: center;
  cursor: pointer;
  color: #4a6fa5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const OptionLabel = styled.span`
  color: #35648c;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0;
`;

const Button = styled.button`
  margin: auto;
  border: none;
  cursor: pointer;
  display: flex;
  width: 21.875rem;
  padding: 1.125rem 7.3125rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.9375rem;
  background: #35648c;
  box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  color: #fff;
  font-size: 1.25rem;
  font-weight: 500;
`;
