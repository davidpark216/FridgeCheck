import React, { useState } from "react";
import styled from "styled-components";
import { Login, Signup } from "../components";

interface props {
  handleLoginClick: () => void;
  handleOpenCold: () => void;
  handleOpenFrozen: () => void;
}
//메뉴들이 모인 공간
function Nav({ handleLoginClick, handleOpenCold, handleOpenFrozen }: props) {
  return (
    <NavWrap>
      <Button onClick={handleLoginClick}>로그인</Button>
      <Button>회원가입</Button>
      <Button onClick={handleOpenCold}>냉장실 추가</Button>
      <Button onClick={handleOpenFrozen}>냉동실 추가</Button>
    </NavWrap>
  );
}

export default Nav;

const NavWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
`;

const Button = styled.button`
  ${({ theme }) => theme.common.defaultButton}
`;
