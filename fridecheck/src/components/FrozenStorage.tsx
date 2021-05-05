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
            <div>
              <span>{el.item}</span>
              <span>{el.quantity}</span>
            </div>
          </div>
        ))}
      </FrozenArea>
    </FrozenStorageWrap>
  );
}
export default FrozenStorage;

const FrozenStorageWrap = styled.div``;

const FrozenArea = styled.div`
  width: 500px;
  height: 100px;
  border: 1px solid;
`;
