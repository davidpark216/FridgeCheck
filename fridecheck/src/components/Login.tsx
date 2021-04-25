import React, { useState } from "react";
import styled from "styled-components";

interface props {
  loginPage: boolean;
}

function Login({ loginPage }: props) {
  return loginPage ? (
    <LoginWrap>
      <div>여기는 로그인 구간입니다</div>
      <div>x</div>
    </LoginWrap>
  ) : (
    <div></div>
  );
}

export default Login;

const LoginWrap = styled.div``;
