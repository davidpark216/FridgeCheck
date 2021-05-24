import React from "react";
import styled from "styled-components";

interface props {
  isLogin: boolean;
  handleLogout: () => void;
  handleLoginClick: () => void;
  handleSignupClick: () => void;
  handleOpenCold: () => void;
  handleOpenFrozen: () => void;
}
//메뉴들이 모인 공간
function Nav({
  isLogin,

  handleLogout,
  handleLoginClick,
  handleSignupClick,
  handleOpenCold,
  handleOpenFrozen,
}: props) {
  return (
    <NavWrap>
      <Button onClick={handleOpenCold}>냉장실 추가</Button>
      <Button onClick={handleOpenFrozen}>냉동실 추가</Button>
      {!isLogin ? (
        <Button onClick={handleLoginClick}>로그인</Button>
      ) : (
        <Button onClick={handleLogout}>로그아웃</Button>
      )}

      <Button onClick={handleSignupClick}>회원가입</Button>
    </NavWrap>
  );
}

export default Nav;

const NavWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
  margin-bottom: 20px;
  text-align: right;
`;

const Button = styled.button`
  ${({ theme }) => theme.common.defaultButton}
  margin-left : 10px;
  margin-right: 10px;
`;
