import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: #3a5a9a;
  padding: 1.5rem 0; /* 패딩을 늘려서 세로 길이를 더 크게 만듭니다 */
`;

const Logo = styled.img`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
`;

const NavMenu = styled.div`
  position: absolute;
  left: 80%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
`;

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  font-size: 1rem;
`;

const LoginButton = styled(Link)`
  position: absolute;
  right: 0.5rem; /* 오른쪽 여백을 줄여서 간격을 좁힙니다 */
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
  color: white;
  border: 1px solid white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  text-decoration: none;


  &:hover {
    background-color: white;
    color: #3a5a9a;
  }
`;

const NoLoginHeader = () => {
  return (
    <HeaderContainer>
      <Logo src="/assets/logo/LogoWhite.png" alt="Logo" />
      <NavMenu>
        <NavItem to="/letter">휴~레터</NavItem>
        <NavItem to="/custom-scent">맞춤형 쉼</NavItem>
        <NavItem to="/emotion-record">감정 기록</NavItem>
      </NavMenu>
      <LoginButton to="/login">log in</LoginButton>
    </HeaderContainer>
  );
};

export default NoLoginHeader;
