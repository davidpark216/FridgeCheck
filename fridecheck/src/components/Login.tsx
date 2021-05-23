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
          <Button onClick={closeLogin}>x</Button>
        </CloseLogin>

        <h3 id="loginHead">로그인</h3>
        <div id="inputBox">
          <div id="inputId">
            <input type="text" placeholder="아이디" />
          </div>
          <div id="inputPassword">
            <input type="password" placeholder="비밀번호" />
          </div>
          <div id="loginButton">
            <Button>로그인</Button>
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

const Button = styled.button`
  ${({ theme }) => theme.common.defaultButton}
`;
