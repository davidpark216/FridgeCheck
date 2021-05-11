import React from "react";
import styled from "styled-components";
interface props {
  coldItems: any;
}
function ColdStorage({ coldItems }: props) {
  return (
    <ColdStorageWrap>
      <ColdArea>
        <div id="coldHead">
          <div id="coldHeadName">이름</div>
          <div id="coldHeadQuantity">양</div>
          <div id="coldHeadDate">날짜</div>
        </div>
        {coldItems.map((el: any) => (
          <div>
            <div id="coldItem">
              <div className="coldName">{el.item}</div>
              <div className="coldQU">
                <span className="coldQuantity">{el.quantity}</span>
                <span className="coldUnit">{el.unit}</span>
              </div>
              <div className="coldDate">{el.date}</div>
            </div>
          </div>
        ))}
      </ColdArea>
    </ColdStorageWrap>
  );
}

export default ColdStorage;

const ColdStorageWrap = styled.div`
  #coldHead {
    display: grid;
    grid-template-columns: 100px 100px 200px;
    border-bottom: 1px solid;
  }
  #coldItem {
    margin-bottom: 10px;
    display: grid;
    grid-template-columns: 100px 100px 200px;
  }
`;

const ColdArea = styled.div`
  width: 500px;
  height: 100px;
  border: 1px solid;
  margin-bottom: 10px;
  overflow: scroll;
`;
