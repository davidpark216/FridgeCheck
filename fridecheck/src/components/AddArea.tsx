import React, { useState } from "react";
import styled from "styled-components";

interface items {
  item: string;
  quantity: string;
}

interface props {
  addCold: boolean;
  addFrozen: boolean;
  coldItems: items[];
  frozenItmes: items[];
  setAddCold: any;
  setAddFrozen: any;
  setColdItems: any;
  setFrozenItems: any;
}
function AddArea({
  addCold,
  addFrozen,
  coldItems,
  frozenItmes,
  setAddCold,
  setAddFrozen,
  setColdItems,
  setFrozenItems,
}: props) {
  const [addColdItem, setAddColdItem] = useState({ item: "", quantity: "" });

  const [addFrozenItem, setAddFrozenItem] = useState({
    item: "",
    quantity: "",
  });

  const handleTypeCold = (
    key: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setAddColdItem({ ...addColdItem, [key]: value });
  };

  const handleTypeFrozen = (
    key: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setAddFrozenItem({ ...addFrozenItem, [key]: value });
  };

  const handleAddCold = () => {
    setColdItems({});
  };

  return (
    <AddAreaWrap>
      {addCold ? (
        <InputArea>
          <div className="upperArea">
            <span>냉장칸 추가 물품</span>
            <button
              className="close"
              onClick={() => {
                setAddCold(false);
              }}
            >
              x
            </button>
          </div>
          <div className="coldItem">
            <span className="text">물품 : </span>
            <input type="text" onChange={(e) => handleTypeCold("item", e)} />
          </div>
          <div className="coldQuantity">
            <span className="text">양 : </span>
            <input
              type="text"
              onChange={(e) => handleTypeCold("quantity", e)}
            />
          </div>
          <button>추가</button>
        </InputArea>
      ) : (
        <div />
      )}
      {addFrozen ? (
        <InputArea>
          <div className="upperArea">
            <span>냉동칸 추가 물품</span>
            <button
              className="close"
              onClick={() => {
                setAddFrozen(false);
              }}
            >
              x
            </button>
          </div>

          <div className="coldItem">
            <span className="text">물품 : </span>
            <input type="text" onChange={(e) => handleTypeFrozen("item", e)} />
          </div>
          <div className="coldQuantity">
            <span className="text">양 : </span>
            <input type="text" onChange={(e) => handleTypeFrozen("item", e)} />
          </div>
          <button>추가</button>
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
