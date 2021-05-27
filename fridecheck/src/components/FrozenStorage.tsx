import React from "react";
import styled from "styled-components";

interface props {
  frozenItems: any;
  handleFrozenDelete: (id: string) => void;
}

function FrozenStorage({ frozenItems, handleFrozenDelete }: props) {
  return (
    <FrozenStorageWrap>
      <FrozenArea>
        <div id="frozenHead">
          <div id="frozenHeadName">이름</div>
          <div id="frozenHeadQuantity">양</div>
          <div id="frozenHeadDate">날짜</div>
        </div>
        {frozenItems.map((el: any) => (
          <div key={el.id}>
            <div id="frozenItem">
              <div className="frozenName">{el.item}</div>
              <div className="frozenQU">
                <span className="frozenQuantity">{el.quantity}</span>
                <span className="frozenUnit">{el.unit}</span>
              </div>
              <div className="frozenDate">{el.date}</div>
              <div className="deleteArea">
                <button
                  className="deleteButton"
                  onClick={() => {
                    handleFrozenDelete(el.id);
                  }}
                >
                  삭제
                </button>
              </div>
            </div>
          </div>
        ))}
      </FrozenArea>
    </FrozenStorageWrap>
  );
}
export default FrozenStorage;

const FrozenStorageWrap = styled.div`
  #frozenHead {
    display: grid;
    grid-template-columns: 100px 100px 200px;
    border-bottom: 1px solid;
  }
  #frozenItem {
    margin-bottom: 10px;
    display: grid;
    grid-template-columns: 100px 100px 200px auto;
  }
  .deleteButton {
    ${({ theme }) => theme.common.defaultButton}
  }
`;

const FrozenArea = styled.div`
  margin-bottom: 20px;
  width: 500px;
  min-height: 100px;
  height: auto;
  border: 1px solid;
  overflow: scroll;
  background: white;
`;
