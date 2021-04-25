import React, { useState } from "react";
import styled from "styled-components";
import { Login, Signup } from "../components";

interface props {
  handleLoginClick: () => void;
}
//메뉴들이 모인 공간
function Nav({ handleLoginClick }: props) {
  return (
    <NavWrap>
      <button onClick={handleLoginClick}>로그인</button>
      <button>회원가입</button>
      <button>유통기한 팁</button>
    </NavWrap>
  );
}

export default Nav;

const NavWrap = styled.div``;
