import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ColdStorage, FrozenStorage, Nav, Login } from "./components";

function App() {
  const [loginPage, setLoginPage] = useState<boolean>(false);

  const handleLoginClick = () => {
    setLoginPage(true);
  };
  return (
    <Wrap>
      <Nav handleLoginClick={handleLoginClick} />

      <div className="head">냉장고에 뭐있지?</div>
      <Login loginPage={loginPage} />
      <ColdStorage />
      <FrozenStorage />
    </Wrap>
  );
}

export default App;

const Wrap = styled.div``;
