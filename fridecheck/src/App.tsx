import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  ColdStorage,
  FrozenStorage,
  Nav,
  Login,
  AddArea,
  Modal,
} from "./components";
import theme from "./asset";

function App() {
  const [loginPage, setLoginPage] = useState<boolean>(false);
  //냉장칸 추가 버튼 누를 시에 div 보이게끔
  const [addCold, setAddCold] = useState<boolean>(false);
  //냉장칸 추가 버튼 누를 시에 div 보이게끔
  const [addFrozen, setAddFrozen] = useState<boolean>(false);
  //냉장실 물품
  const [coldItems, setColdItems] = useState([
    {
      key: "계란",
      item: "계란",
      quantity: "30",
      unit: "개",
      date: "2021. 5. 9.",
    },
    {
      key: "시금치",
      item: "시금치",
      quantity: "1",
      unit: "단",
      date: "2021. 5. 9.",
    },
  ]);
  //냉동실 물품
  const [frozenItems, setFrozenItems] = useState([
    {
      key: "고등어",
      item: "고등어",
      quantity: "1",
      unit: "마리",
      date: "2021. 5. 9.",
    },
  ]);

  const [modalContents, setModalContents] = useState<string>("");

  const [isLogin, setIsLogin] = useState<boolean>(false);

  const [isModal, setIsModal] = useState<boolean>(true);

  const handleLoginClick = () => {
    setLoginPage(true);
  };

  const handleOpenCold = () => {
    setAddCold(true);
  };

  const handleOpenFrozen = () => {
    setAddFrozen(true);
  };
  return (
    <Wrap>
      <ThemeProvider theme={theme}>
        <div id="head">냉장고에 뭐있지?</div>
        <Nav
          handleLoginClick={handleLoginClick}
          handleOpenCold={handleOpenCold}
          handleOpenFrozen={handleOpenFrozen}
        />
        <Login loginPage={loginPage} setLoginPage={setLoginPage} />
        <AddArea
          addCold={addCold}
          addFrozen={addFrozen}
          coldItems={coldItems}
          frozenItmes={frozenItems}
          setAddCold={setAddCold}
          setAddFrozen={setAddFrozen}
          setColdItems={setColdItems}
          setFrozenItems={setFrozenItems}
        />

        <Fridge>
          <ColdStorage coldItems={coldItems} />
          <FrozenStorage frozenItems={frozenItems} />
        </Fridge>
        <Modal
          isModal={isModal}
          setIsModal={setIsModal}
          modalContents={modalContents}
          setModalContents={setModalContents}
        />
      </ThemeProvider>
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  #head {
    font-size: 50px;
    margin-left: 50px;
  }
`;

const Fridge = styled.div`
  border: 1px solid;
  background: ${({ theme }) => theme.colors.blue};
  width: 700px;
`;
