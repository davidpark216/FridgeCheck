import React from "react";
import styled from "styled-components";
interface props {
  coldItems: any;
}
function ColdStorage({ coldItems }: props) {
  return (
    <ColdStorageWrap>
      <ColdArea>
        {coldItems.map((el: any) => (
          <div>
            <div>
              <span>{el.item}</span>
              <span>{el.quantity}</span>
            </div>
          </div>
        ))}
      </ColdArea>
    </ColdStorageWrap>
  );
}

export default ColdStorage;

const ColdStorageWrap = styled.div``;

const ColdArea = styled.div`
  width: 500px;
  height: 100px;
  border: 1px solid;
  margin-bottom: 10px;
`;
