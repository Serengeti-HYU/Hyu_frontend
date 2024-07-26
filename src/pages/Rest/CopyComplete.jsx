import React from "react";
import styled from "styled-components";

const CompleteBtn = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: #fff;
  box-shadow: 0px 0px 15.4px 0px rgba(53, 100, 140, 0.35);
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  width: 27rem;
  height: 3rem;
  padding: 0 1rem;
  text-align: center;
  white-space: nowrap;
`;

const Container = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 12rem;
`;

const CopyComplete = () => {
  return (
    <Container>
      <CompleteBtn>링크가 복사되었습니다.</CompleteBtn>
    </Container>
  );
};

export default CopyComplete;
