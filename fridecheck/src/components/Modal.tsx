import React from "react";
import styled from "styled-components";

interface props {
  modalContents: string;
  setModalContents: (value: string) => void;
  isModal: boolean;
  setIsModal: (value: boolean) => void;
}

function Modal({
  modalContents,
  setModalContents,
  isModal,
  setIsModal,
}: props) {
  const handlecloseModal = () => {
    setIsModal(false);
    setModalContents("");
  };
  return isModal ? (
    <ModalArea>
      <ModalWrap>
        <ModalTextArea>{modalContents}</ModalTextArea>
        <ModalButtonArea>
          <button id="checkButton" onClick={handlecloseModal}>
            확인
          </button>
        </ModalButtonArea>
      </ModalWrap>
    </ModalArea>
  ) : (
    <div></div>
  );
}

export default Modal;

const ModalArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const ModalWrap = styled.div`
  position: relative;
  margin: 40px auto;
  width: 30vw;
  height: 40vh;
  background: white;
`;

const ModalTextArea = styled.div``;

const ModalButtonArea = styled.div`
  #checkButton {
    ${({ theme }) => theme.common.defaultButton}
  }
`;
