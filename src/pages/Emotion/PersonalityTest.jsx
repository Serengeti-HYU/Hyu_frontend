import React, { useState } from "react";
import styled from "styled-components";
import LoginHeader from "../../components/LoginHeader";
import Footer from "../../components/footer";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const Main = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  max-width: 26rem;
  background: pink;
`;
const Title = styled.div`
  margin-top: 5rem;
  font-size: 24px;
`;
const SubTitle = styled.div`
  margin: 0;
  font-size: 14px;
  margin-bottom: 5rem;
`;

// form 으로 수정
const Form = styled.form`
  margin: 20px 0;
`;

const Question = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const QuestionText = styled.div`
  font-size: 16px;
  margin: 0 0 10px 0;
`;

const RadioGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  line-height: ${(props) => props.size}px;
  text-align: center;
  cursor: pointer;
  color: #4a6fa5;
  margin-bottom: 5px;
`;

const OptionLabel = styled.span`
  font-size: 12px;
  color: #4a6fa5;
`;

const Button = styled.button`
  margin: auto;
  border: none;
  cursor: pointer;
  display: flex;
  width: 350px;
  padding: 18px 117px 17px 118px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: #35648c;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

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

const optionSizes = [33, 25, 25, 33];

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
    console.log("Responses:", responses);
  };

  return (
    <Container>
      <LoginHeader />
      <Main>
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
