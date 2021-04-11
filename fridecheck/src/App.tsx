import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ColdStorage, FrozenStorage, Nav } from "./components";

function App() {
  return (
    <Wrap>
      <Nav />
      <div>유통기한</div>
      <div className="head">냉장고 유통기한</div>
      <ColdStorage />
      <FrozenStorage />
    </Wrap>
  );
}

export default App;

const Wrap = styled.div``;
