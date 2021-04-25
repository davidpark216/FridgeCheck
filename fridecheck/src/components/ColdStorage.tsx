import React, { useState, useEffect } from "react";
import styled from "styled-components";

function ColdStorage() {
  return (
    <ColdStorageWrap>
      <ColdArea></ColdArea>
    </ColdStorageWrap>
  );
}

export default ColdStorage;

const ColdStorageWrap = styled.div``;

const ColdArea = styled.div`
  width: 500px;
  height: 100px;
  border: 1px solid;
  margin-bottom: 10px;
`;
