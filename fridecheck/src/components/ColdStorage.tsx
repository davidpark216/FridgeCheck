import React from "react";
import styled from "styled-components";
interface props {
  coldItems: any;
  handleColdDelete: (id: string) => void;
}
function ColdStorage({ coldItems, handleColdDelete }: props) {
  return (
    <ColdStorageWrap>
      <ColdArea>
        <div id="coldHead">
          <div id="coldHeadName">이름</div>
          <div id="coldHeadQuantity">양</div>
          <div id="coldHeadDate">날짜</div>
        </div>
        {coldItems.map((el: any) => (
          <div key={el.id}>
            <div id="coldItem">
              <div className="coldName">{el.item}</div>
              <div className="coldQU">
                <span className="coldQuantity">{el.quantity}</span>
                <span className="coldUnit">{el.unit}</span>
              </div>
              <div className="coldDate">{el.date}</div>
              <div className="deleteArea">
                <button
                  className="deleteButton"
                  onClick={() => {
                    handleColdDelete(el.id);
                  }}
                >
                  삭제
                </button>
              </div>
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
    grid-template-columns: 100px 100px 200px auto;
  }

  .deleteButton {
    ${({ theme }) => theme.common.defaultButton}
  }
`;

const ColdArea = styled.div`
  margin-top: 20px;
  width: 500px;
  min-height: 100px;
  height: auto;
  border: 1px solid;
  margin-bottom: 10px;

  background: white;
`;
