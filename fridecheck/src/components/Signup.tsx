import React, { useState } from "react";
import styled from "styled-components";
import { isPasswordCorrect, isPasswordCheck } from "../asset/Validation";

interface props {
  signupPage: boolean;
  setSignupPage: (value: boolean) => void;
}
function Signup({ signupPage, setSignupPage }: props) {
  const handleClose = () => {
    setSignupPage(false);
  };

  const [signupInfo, setSignupInfo] = useState({
    userName: "",
    password: "",
    passwordCheck: "",
  });

  const handleInput = (key: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSignupInfo({ ...signupInfo, [key]: value });
  };

  const handleConfirm = () => {
    if (
      isPasswordCorrect(signupInfo.password) &&
      isPasswordCheck(signupInfo.password, signupInfo.passwordCheck)
    ) {
      setSignupPage(false);
    }
  };

  return signupPage ? (
    <SignupModal>
      <SignupWrap>
        <CloseArea>
          <Button
            onClick={() => {
              handleClose();
            }}
          >
            x
          </Button>
        </CloseArea>
        <SignupContent>
          <h3 id="signupHead">회원가입</h3>
          <InputBox>
            <div className="inputId">
              <Input
                type="text"
                placeholder="아이디"
                onChange={(e) => {
                  handleInput("userName", e);
                }}
              />
            </div>
            <div className="inputPassword">
              <Input
                type="password"
                placeholder="비밀번호"
                onChange={(e) => {
                  handleInput("password", e);
                }}
              />
            </div>
            <div className="inputPasswordCheck">
              <Input
                type="password"
                placeholder="비밀번호 확인"
                onChange={(e) => {
                  handleInput("passwordCheck", e);
                }}
              />
            </div>
          </InputBox>
          <ConfirmArea>
            <Button onClick={() => handleConfirm()}>회원가입</Button>
          </ConfirmArea>
        </SignupContent>
      </SignupWrap>
    </SignupModal>
  ) : (
    <div></div>
  );
}

export default Signup;

const SignupModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.background};
`;

const SignupWrap = styled.div`
  position: relative;
  margin: 40px auto;
  width: 30vw;
  height: 40vh;
  background: white;
  text-align: center;
`;

const CloseArea = styled.div`
  float: right;
`;

const Button = styled.button`
  ${({ theme }) => theme.common.defaultButton}
`;

const InputBox = styled.div``;

const ConfirmArea = styled.div``;

const SignupContent = styled.div`
  padding-top: 20px;
`;

const Input = styled.input`
  margin-bottom: 20px;
`;
