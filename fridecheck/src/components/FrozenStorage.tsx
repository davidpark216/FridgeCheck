import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface props {
  frozenItems: any;
}

function FrozenStorage({ frozenItems }: props) {
  return (
    <FrozenStorageWrap>
      <FrozenArea>
        {frozenItems.map((el: any) => (
          <div>
            <div className="frozenItem">
              <span className="frozenName">{el.item}</span>
              <span className="frozenQuantity">{el.quantity}</span>
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
`;

const FrozenArea = styled.div`
  width: 500px;
  height: 100px;
  border: 1px solid;
`;
