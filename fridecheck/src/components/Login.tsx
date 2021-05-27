import React, { useState } from "react";
import styled from "styled-components";

interface props {
  loginPage: boolean;
  setLoginPage: any;
  handleLogin: () => void;
}
function Login({ loginPage, setLoginPage, handleLogin }: props) {
  const closeLogin = () => {
    setLoginPage(false);
  };

  const [loginInfo, setLoginInfo] = useState({ userId: "", password: "" });

  const handleInput = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setLoginInfo({ ...loginInfo, [key]: value });
  };

  return loginPage ? (
    <LoginModal>
      <LoginWrap>
        <CloseLogin>
          <Button onClick={closeLogin}>x</Button>
        </CloseLogin>
        <LoginContent>
          <h3 id="loginHead">로그인</h3>
          <div id="inputBox">
            <div id="inputId">
              <Input
                type="text"
                placeholder="아이디"
                onChange={(e) => handleInput("userId", e)}
              />
            </div>
            <div id="inputPassword">
              <Input
                type="password"
                placeholder="비밀번호"
                onChange={(e) => handleInput("password", e)}
              />
            </div>
            <div id="loginButton">
              <Button onClick={() => handleLogin()}>로그인</Button>
            </div>
          </div>
        </LoginContent>
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
  text-align: center;
`;

const LoginContent = styled.div`
  padding-top: 20px;
`;

const CloseLogin = styled.div`
  float: right;
`;

const Button = styled.button`
  ${({ theme }) => theme.common.defaultButton}
`;

const Input = styled.input`
  margin-bottom: 20px;
`;
