import React from "react";
import styled from "styled-components";

interface props {
  signupPage: boolean;
  setSignupPage: (value: boolean) => void;
}
function Signup({ signupPage, setSignupPage }: props) {
  const handleClose = () => {
    setSignupPage(false);
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
        <h3 id="signupHead">회원가입</h3>
        <InputBox>
          <div className="inputId">
            <input type="text" placeholder="아이디" />
          </div>
          <div className="inputPassword">
            <input type="password" placeholder="비밀번호" />
          </div>
          <div className="inputPasswordCheck">
            <input type="password" placeholder="비밀번호 확인" />
          </div>
        </InputBox>
        <ConfirmArea>
          <Button>회원가입</Button>
        </ConfirmArea>
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
`;

const CloseArea = styled.div`
  float: right;
`;

const Button = styled.button`
  ${({ theme }) => theme.common.defaultButton}
`;

const InputBox = styled.div``;

const ConfirmArea = styled.div``;
