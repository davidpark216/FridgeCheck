import React, { useState } from "react";
import styled from "styled-components";

interface props {
  loginPage: boolean;
  setLoginPage?: any;
}
function Login({ loginPage, setLoginPage }: props) {
  const closeLogin = () => {
    setLoginPage(false);
  };

  return loginPage ? (
    <LoginWrap>
      <div>여기는 로그인 구간입니다</div>
      <button onClick={closeLogin}>x</button>
    </LoginWrap>
  ) : (
    <div></div>
  );
}

export default Login;

const LoginWrap = styled.div``;

const CloseLogin = styled.div``;
