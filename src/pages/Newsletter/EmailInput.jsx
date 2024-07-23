import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
`;

const EmailInputBox = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 5px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const EmailInput = () => {
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSelectChange = (e) => {
    const value = e.target.value;

    if (value === "0") {
      setEmail2("");
      setIsDisabled(true);
    } else if (value === "9") {
      setEmail2("");
      setIsDisabled(false);
    } else {
      setEmail2(value);
      setIsDisabled(true);
    }
  };

  return (
    <Container>
      <EmailInputBox>
        <Input
          type="text"
          name="email1"
          value={email1}
          onFocus={() => setEmail1("")}
          onChange={(e) => setEmail1(e.target.value)}
          placeholder="아이디"
        />
        @
        <Input
          type="text"
          name="email2"
          value={email2}
          onChange={(e) => setEmail2(e.target.value)}
          disabled={isDisabled}
        />
        {email2 === "" && (
          <Select name="email" onChange={handleSelectChange}>
            <option value="0">선택</option>
            <option value="9">직접입력</option>
            <option value="naver.com">naver.com</option>
            <option value="gmail.com">gmail.com</option>
            <option value="daum.net">daum.net</option>
            <option value="hanmail.net">hanmail.net</option>
          </Select>
        )}
      </EmailInputBox>
    </Container>
  );
};

export default EmailInput;
