import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface props {
  frozenItems: any;
}

function FrozenStorage({ frozenItems }: props) {
  return (
    <FrozenStorageWrap>
      <FrozenArea>
        <div className="frozenHead">
          <div className="frozenHeadName">이름</div>
          <div className="frozenHeadQuantity">양</div>
          <div className="frozenHeadDate">날짜</div>
        </div>
        {frozenItems.map((el: any) => (
          <div>
            <div className="frozenItem">
              <span className="frozenName">{el.item}</span>
              <span className="frozenQU">
                <span className="frozenQuantity">{el.quantity}</span>
                <span className="frozenUnit">{el.unit}</span>
              </span>
              <span className="frozenDate">{el.date}</span>
            </div>
          </div>
        ))}
      </FrozenArea>
    </FrozenStorageWrap>
  );
}
export default FrozenStorage;

const FrozenStorageWrap = styled.div`
  .frozenItem {
    margin-bottom: 10px;
  }
  .frozenQuantity {
    margin-left: 10px;
  }
  .frozenDate {
    margin-left: 10px;
  }
`;

const FrozenArea = styled.div`
  width: 500px;
  height: 100px;
  border: 1px solid;
  overflow: scroll;
`;
