import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { ColdStorage, FrozenStorage, Nav, Login, AddArea } from "./components";
import theme from "./asset";

function App() {
  const [loginPage, setLoginPage] = useState<boolean>(false);
  //냉장칸 추가 버튼 누를 시에 div 보이게끔
  const [addCold, setAddCold] = useState<boolean>(false);
  //냉장칸 추가 버튼 누를 시에 div 보이게끔
  const [addFrozen, setAddFrozen] = useState<boolean>(false);
  //냉장실 물품
  const [coldItems, setColdItems] = useState([
    { key: "계란", item: "계란", quantity: "30개", date: "2021. 05. 09" },
    { key: "시금치", item: "시금치", quantity: "1단", date: "2021. 05. 09" },
  ]);
  //냉동실 물품
  const [frozenItems, setFrozenItems] = useState([
    { key: "고등어", item: "고등어", quantity: "1마리" },
  ]);

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

        <div id="head">냉장고에 뭐있지?</div>
        <Fridge>
          <ColdStorage coldItems={coldItems} />
          <FrozenStorage frozenItems={frozenItems} />
        </Fridge>
      </ThemeProvider>
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  #head {
    font-size: 50px;
    text-align: center;
  }
`;

const Fridge = styled.div`
  border: 1px solid;
  background: ${({ theme }) => theme.colors.blue};
  width: 700px;
`;
