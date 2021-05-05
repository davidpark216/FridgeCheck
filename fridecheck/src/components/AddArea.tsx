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
    <div>
      {addCold ? (
        <div>
          <div>이 곳은 냉장고추가 영역입니다</div>
          <span
            onClick={() => {
              setAddCold(false);
            }}
          >
            x
          </span>
        </div>
      ) : (
        <div />
      )}
      {addFrozen ? (
        <div>
          <div> 냉동고 추가영역입니다</div>
          <span
            onClick={() => {
              setAddFrozen(false);
            }}
          >
            x
          </span>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

export default AddArea;
