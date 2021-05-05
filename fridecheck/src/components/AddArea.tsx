import React, { useState } from "react";
import styled from "styled-components";

interface props {
  addCold: boolean;
  addFrozen: boolean;
  setAddCold: any;
  setAddFrozen: any;
}
function AddArea({ addCold, addFrozen, setAddCold, setAddFrozen }: props) {
  return (
    <AddAreaWrap>
      {addCold ? (
        <InputArea>
          <div className="upperArea">
            <span>냉장칸 추가 물품</span>
            <span
              className="close"
              onClick={() => {
                setAddCold(false);
              }}
            >
              x
            </span>
          </div>

          <input type="text" />
        </InputArea>
      ) : (
        <div />
      )}
      {addFrozen ? (
        <InputArea>
          <div className="upperArea">
            <span>냉동칸 추가 물품</span>
            <span
              className="close"
              onClick={() => {
                setAddFrozen(false);
              }}
            >
              x
            </span>
          </div>

          <input type="text" />
        </InputArea>
      ) : (
        <div />
      )}
    </AddAreaWrap>
  );
}

export default AddArea;

const AddAreaWrap = styled.div``;

const InputArea = styled.div``;
