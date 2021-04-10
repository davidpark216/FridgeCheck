import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ColdStorage, FrozenStorage } from "./components";

function App() {
  return (
    <Wrap>
      <div className="head">냉장고 유통기한</div>
      <ColdStorage />
      <FrozenStorage />
    </Wrap>
  );
}

export default App;

const Wrap = styled.div``;
