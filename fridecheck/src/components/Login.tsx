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
    <LoginModal>
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
    </LoginModal>
  ) : (
    <div></div>
  );
}

export default Login;

const LoginModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.background};
`;

const LoginWrap = styled.div`
  position: relative;
  margin: 40px auto;
  width: 30vw;
  height: 40vh;
  background: white;
`;

const CloseLogin = styled.div`
  float: right;
`;
