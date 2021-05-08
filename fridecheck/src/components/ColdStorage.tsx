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
            <div className="coldItem">
              <span className="coldName">{el.item}</span>
              <span className="coldQuantity">{el.quantity}</span>
            </div>
          </div>
        ))}
      </ColdArea>
    </ColdStorageWrap>
  );
}

export default ColdStorage;

const ColdStorageWrap = styled.div`
  .coldItem {
    margin-bottom: 10px;
  }
  .coldQuantity {
    margin-left: 10px;
  }
`;

const ColdArea = styled.div`
  width: 500px;
  height: 100px;
  border: 1px solid;
  margin-bottom: 10px;
  overflow: scroll;
`;
