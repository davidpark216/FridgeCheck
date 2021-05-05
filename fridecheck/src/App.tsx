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

  const handleLoginClick = () => {
    setLoginPage(true);
  };

  const handleCold = () => {
    setAddCold(true);
  };

  const handleFrozen = () => {
    setAddFrozen(true);
  };
  return (
    <Wrap>
      <ThemeProvider theme={theme}>
        <Nav
          handleLoginClick={handleLoginClick}
          handleCold={handleCold}
          handleFrozen={handleFrozen}
        />
        <AddArea
          addCold={addCold}
          addFrozen={addFrozen}
          setAddCold={setAddCold}
          setAddFrozen={setAddFrozen}
        />
        <div id="head">냉장고에 뭐있지?</div>
        <Fridge>
          <Login loginPage={loginPage} setLoginPage={setLoginPage} />
          <ColdStorage />
          <FrozenStorage />
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
