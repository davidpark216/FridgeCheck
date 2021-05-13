import React, { useState, useEffect } from "react";
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
  const [addColdItem, setAddColdItem] = useState({
    key: "",
    item: "",
    quantity: "",
    unit: "",
    date: "",
  });

  const [addFrozenItem, setAddFrozenItem] = useState({
    key: "",
    item: "",
    quantity: "",
    unit: "",
    date: "",
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
    const today = new Date().toLocaleDateString();
    setAddColdItem({
      ...addColdItem,
      date: String(today),
      key: addColdItem.item,
    });
  };

  useEffect(() => {
    if (addColdItem.key.length !== 0) {
      setColdItems(coldItems.concat(addColdItem));
    }
  }, [addColdItem.key]);

  const handleAddFrozen = () => {
    const today = new Date().toLocaleDateString();
    setAddFrozenItem({
      ...addFrozenItem,
      date: String(today),
      key: addFrozenItem.item,
    });
  };

  useEffect(() => {
    if (addFrozenItem.key.length !== 0) {
      setFrozenItems(frozenItmes.concat(addFrozenItem));
    }
  }, [addFrozenItem.key]);

  const handleColdSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setAddColdItem({ ...addColdItem, unit: value });
  };

  const handleFrozenSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setAddFrozenItem({ ...addFrozenItem, unit: value });
  };

  return (
    <AddAreaWrap>
      {addCold ? (
        <AddAreaModal>
          <ColdInputArea>
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
            <div id="coldItemInput">
              <span className="text">물품 : </span>
              <input type="text" onChange={(e) => handleTypeCold("item", e)} />
            </div>
            <div className="coldQuantity">
              <span className="text">양 : </span>
              <input
                type="text"
                onChange={(e) => handleTypeCold("quantity", e)}
              />
              <select
                className="coldUnitSelect"
                onChange={(e) => handleColdSelect(e)}
              >
                <option value=""></option>
                <option value="g">g</option>
                <option value="개">개</option>
                <option value="마리">마리</option>
                <option value="l">l</option>
              </select>
            </div>

            <button onClick={handleAddCold}>추가</button>
          </ColdInputArea>
        </AddAreaModal>
      ) : (
        <div />
      )}
      {addFrozen ? (
        <AddAreaModal>
          <FrozenInputArea>
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
              <input
                type="text"
                onChange={(e) => handleTypeFrozen("item", e)}
              />
            </div>
            <div className="coldQuantity">
              <span className="text">양 : </span>
              <input
                type="text"
                onChange={(e) => handleTypeFrozen("quantity", e)}
              />
              <select
                className="frozenUnitSelect"
                onChange={(e) => handleFrozenSelect(e)}
              >
                <option value=""></option>
                <option value="g">g</option>
                <option value="개">개</option>
                <option value="마리">마리</option>
                <option value="l">l</option>
              </select>
            </div>
            <button onClick={handleAddFrozen}>추가</button>
          </FrozenInputArea>
        </AddAreaModal>
      ) : (
        <div />
      )}
    </AddAreaWrap>
  );
}

export default AddArea;

const AddAreaWrap = styled.div`
  .
`;

const AddAreaModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.background};
`;

const ColdInputArea = styled.div`
  positon: relative;
  margin: 40px auto;
  width: 50vw;
  height: 20vh;
  border: 1px solid;
`;

const FrozenInputArea = styled.div`
  positon: relative;
  margin: 40px auto;
  width: 50vw;
  height: 20vh;
  border: 1px solid;
`;
