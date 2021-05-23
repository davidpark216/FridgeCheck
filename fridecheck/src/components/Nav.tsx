import React, { useState } from "react";
import styled from "styled-components";
import { Login, Signup } from "../components";

interface props {
  handleLoginClick: () => void;
  handleSignupClick: () => void;
  handleOpenCold: () => void;
  handleOpenFrozen: () => void;
}
//메뉴들이 모인 공간
function Nav({
  handleLoginClick,
  handleSignupClick,
  handleOpenCold,
  handleOpenFrozen,
}: props) {
  return (
    <NavWrap>
      <Button onClick={handleLoginClick}>로그인</Button>
      <Button onClick={handleSignupClick}>회원가입</Button>
      <Button onClick={handleOpenCold}>냉장실 추가</Button>
      <Button onClick={handleOpenFrozen}>냉동실 추가</Button>
    </NavWrap>
  );
}

export default Nav;

const NavWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
  margin-bottom: 20px;
`;

const Button = styled.button`
  ${({ theme }) => theme.common.defaultButton}
  margin-left : 10px;
  margin-right: 10px;
`;
