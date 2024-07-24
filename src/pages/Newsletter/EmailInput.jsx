import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
`;

const EmailInputBox = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  color: #35648c;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.176px;
`;
const TextBox = styled.div`
  color: #1e1e1e;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 362%; /* 72.4px */
  letter-spacing: -0.22px;
  text-align: left;
  width: 7rem;
`;

const Input = styled.input`
  padding: 8px;
  border: none;
  border-bottom: 1px solid rgba(53, 100, 140, 0.35);
  margin-right: 5px;
`;

const Arrow = styled.span`
  position: absolute;
  margin-left: 26.5rem;
  top: 30px;
  border: solid #007bff;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${({ open }) => (open ? "rotate(225deg)" : "rotate(45deg)")};
  cursor: pointer;
`;

const Dropdown = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  position: absolute;
  top: 52px;
  border: 1px solid #ccc;
  background-color: white;
  z-index: 1;
  width: 13%;
  margin-left: 25%;
`;

const Option = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const EmailInput = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [customInput, setCustomInput] = useState("");
  const [email1, setEmail1] = useState("");

  const handleOptionClick = (option) => {
    setCustomInput(option === "직접 입력" ? "" : option);
    setDropdownOpen(false);
  };

  return (
    <Container>
      <EmailInputBox>
        <TextBox>∙ 이메일</TextBox>
        <Input
          type="text"
          name="email1"
          value={email1}
          onFocus={() => setEmail1("")}
          onChange={(e) => setEmail1(e.target.value)}
        />
        @ &nbsp;
        <Input
          type="text"
          value={customInput}
          onChange={(e) => setCustomInput(e.target.value)}
          placeholder="직접 입력"
        />
        <Arrow
          open={dropdownOpen}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        />
        <Dropdown open={dropdownOpen}>
          {[
            "직접 입력",
            "naver.com",
            "gmail.com",
            "daum.net",
            "hanmail.net",
          ].map((option) => (
            <Option key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </Option>
          ))}
        </Dropdown>
      </EmailInputBox>
    </Container>
  );
};

export default EmailInput;
