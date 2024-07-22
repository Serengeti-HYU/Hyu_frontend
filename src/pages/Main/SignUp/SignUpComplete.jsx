import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Temp = styled.div`
  // 글자색과 글자크기는 theme에 설정해둠
  // 밑과 같이 사용하면 됩니다
  color: ${(props) => props.theme.color.blue};
  font-size: ${(props) => props.theme.fontSize.large};
`;

const SignUpComplete = () => {
  return <Temp>테스트</Temp>;
};

export default SignUpComplete;
