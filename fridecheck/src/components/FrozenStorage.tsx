import React, { useState, useEffect } from "react";
import styled from "styled-components";

function FrozenStorage() {
  return (
    <FrozenStorageWrap>
      <FrozenArea></FrozenArea>
    </FrozenStorageWrap>
  );
}
export default FrozenStorage;

const FrozenStorageWrap = styled.div``;

const FrozenArea = styled.div`
  width: 500px;
  height: 100px;
  border: 1px solid;
`;
