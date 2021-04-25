import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { ColdStorage, FrozenStorage, Nav, Login } from "./components";
import theme from "./asset";

function App() {
  const [loginPage, setLoginPage] = useState<boolean>(false);

  const handleLoginClick = () => {
    setLoginPage(true);
  };
  return (
    <Wrap>
      <ThemeProvider theme={theme}>
        <Nav handleLoginClick={handleLoginClick} />
        <div className="head">냉장고에 뭐있지?</div>
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

const Wrap = styled.div``;

const Fridge = styled.div`
  border: 1px solid;
  background: ${({ theme }) => theme.colors.blue};
  width: 700px;
`;
