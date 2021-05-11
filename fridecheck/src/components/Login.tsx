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
      <CloseLogin>
        <button onClick={closeLogin}>x</button>
      </CloseLogin>

      <h3 id="loginHead">로그인</h3>
      <div id="inputBox">
        <div id="inputId">
          <span>아이디 : </span>
          <input type="text" />
        </div>
        <div id="inputPassword">
          <span>비밀번호 : </span>
          <input type="password" />
        </div>
        <div id="loginButton">
          <button>로그인</button>
        </div>
      </div>
    </LoginWrap>
  ) : (
    <div></div>
  );
}

export default Login;

const LoginWrap = styled.div`
  width: 30vw;
`;

const CloseLogin = styled.div`
  float: right;
`;
