import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { isQuantityCheck } from "../asset/Validation";

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
    id: "",
    item: "",
    quantity: "",
    unit: "",
    date: "",
  });

  const [addFrozenItem, setAddFrozenItem] = useState({
    id: "",
    item: "",
    quantity: "",
    unit: "",
    date: "",
  });
  const [error, setError] = useState<boolean>(false);

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

  const handleAddCold = (value: string) => {
    const today = new Date().toLocaleDateString();
    if (isQuantityCheck(value)) {
      setError(false);
      setAddColdItem({
        ...addColdItem,
        date: String(today),
        id: addColdItem.item,
      });
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    if (addColdItem.id.length !== 0) {
      setColdItems(coldItems.concat(addColdItem));
    }
  }, [addColdItem.id]);

  const handleAddFrozen = (value: string) => {
    const today = new Date().toLocaleDateString();
    if (isQuantityCheck(value)) {
      setError(false);
      setAddFrozenItem({
        ...addFrozenItem,
        date: String(today),
        id: addFrozenItem.item,
      });
    } else {
      setError(false);
    }
  };

  useEffect(() => {
    if (addFrozenItem.id.length !== 0) {
      setFrozenItems(frozenItmes.concat(addFrozenItem));
    }
  }, [addFrozenItem.id]);

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
          <InputArea>
            <CloseArea>
              <Button
                className="close"
                onClick={() => {
                  setAddCold(false);
                }}
              >
                x
              </Button>
            </CloseArea>
            <AddContent>
              <AddHead>냉장칸 추가 물품</AddHead>

              <div id="coldItemInput">
                <input
                  type="text"
                  onChange={(e) => handleTypeCold("item", e)}
                  placeholder="물품"
                />
              </div>
              <div className="coldQuantity">
                <Input
                  type="text"
                  onChange={(e) => handleTypeCold("quantity", e)}
                  error={error}
                  placeholder="양"
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
              <AddButtonArea>
                <Button
                  onClick={() => {
                    handleAddCold(addColdItem.quantity);
                  }}
                >
                  추가
                </Button>
              </AddButtonArea>
            </AddContent>
          </InputArea>
        </AddAreaModal>
      ) : (
        <div />
      )}
      {addFrozen ? (
        <AddAreaModal>
          <InputArea>
            <UpperArea>
              <CloseArea>
                <Button
                  className="close"
                  onClick={() => {
                    setAddFrozen(false);
                  }}
                >
                  x
                </Button>
              </CloseArea>
            </UpperArea>
            <AddContent>
              <AddHead>냉동칸 추가 물품</AddHead>
              <div className="coldItem">
                <input
                  type="text"
                  onChange={(e) => handleTypeFrozen("item", e)}
                  placeholder="물품"
                />
              </div>
              <div className="coldQuantity">
                <Input
                  type="text"
                  onChange={(e) => handleTypeFrozen("quantity", e)}
                  placeholder="양"
                  error={error}
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
              <AddButtonArea>
                <Button
                  onClick={() => {
                    handleAddFrozen(addFrozenItem.quantity);
                  }}
                >
                  추가
                </Button>
              </AddButtonArea>
            </AddContent>
          </InputArea>
        </AddAreaModal>
      ) : (
        <div />
      )}
    </AddAreaWrap>
  );
}

export default AddArea;

const AddAreaWrap = styled.div`
  #test {
    text-align: center;
  }
`;

const AddAreaModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.background};
`;

const InputArea = styled.div`
  positon: relative;
  margin: 40px auto;
  width: 50vw;
  height: 30vh;
  @media ${({ theme }) => theme.device.mobileL} {
    width: 700px;
    height: 50vh;
  }

  border: 1px solid;
  background: white;
`;

const AddContent = styled.div`
  padding-top: 20px;
`;

const AddHead = styled.span`
  font-size: 1.5rem;
`;

const UpperArea = styled.div``;

const Input = styled.input<{ error: boolean }>`
  border: ${(props) => (props.error ? " 1px solid red" : " 1px solid black")};
  color: ${(props) => (props.error ? "red" : "black")};
`;

const CloseArea = styled.div`
  float: right;
`;

const Button = styled.button`
  ${({ theme }) => theme.common.defaultButton}
`;

const AddButtonArea = styled.div`
  margin-left: 20px;
`;
