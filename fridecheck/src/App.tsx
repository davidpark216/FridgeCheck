import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  ColdStorage,
  FrozenStorage,
  Nav,
  Login,
  Signup,
  AddArea,
  Modal,
} from "./components";
import theme from "./asset";

function App() {
  const [loginPage, setLoginPage] = useState<boolean>(false);

  const [signupPage, setSignupPage] = useState<boolean>(false);
  //냉장칸 추가 버튼 누를 시에 div 보이게끔
  const [addCold, setAddCold] = useState<boolean>(false);
  //냉장칸 추가 버튼 누를 시에 div 보이게끔
  const [addFrozen, setAddFrozen] = useState<boolean>(false);
  //냉장실 물품
  const [coldItems, setColdItems] = useState([
    {
      id: "계란",
      item: "계란",
      quantity: "30",
      unit: "개",
      date: "2021. 5. 9.",
    },
    {
      id: "시금치",
      item: "시금치",
      quantity: "1",
      unit: "단",
      date: "2021. 5. 9.",
    },
  ]);
  //냉동실 물품
  const [frozenItems, setFrozenItems] = useState([
    {
      id: "고등어",
      item: "고등어",
      quantity: "1",
      unit: "마리",
      date: "2021. 5. 9.",
    },
  ]);

  const [modalContents, setModalContents] = useState<string>("");

  const [isLogin, setIsLogin] = useState<boolean>(false);

  const [isModal, setIsModal] = useState<boolean>(false);

  const handleLoginClick = () => {
    setLoginPage(true);
  };

  const handleLogin = () => {
    setIsLogin(true);
    setLoginPage(false);
  };

  const handleLogout = () => {
    setIsLogin(false);
  };

  const handleSignupClick = () => {
    setSignupPage(true);
  };

  const handleOpenCold = () => {
    setAddCold(true);
  };

  const handleOpenFrozen = () => {
    setAddFrozen(true);
  };

  const handleColdDelete = (id: string) => {
    setColdItems(coldItems.filter((el) => el.id !== id));
  };

  const handleFrozenDelete = (id: string) => {
    setFrozenItems(frozenItems.filter((el) => el.id !== id));
  };

  return (
    <Wrap>
      <ThemeProvider theme={theme}>
        <div id="head">냉장고에 뭐있지?</div>
        <Nav
          isLogin={isLogin}
          handleLogout={handleLogout}
          handleLoginClick={handleLoginClick}
          handleSignupClick={handleSignupClick}
          handleOpenCold={handleOpenCold}
          handleOpenFrozen={handleOpenFrozen}
        />
        <Login
          loginPage={loginPage}
          setLoginPage={setLoginPage}
          handleLogin={handleLogin}
        />
        <Signup signupPage={signupPage} setSignupPage={setSignupPage} />
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
          <ColdStorage
            coldItems={coldItems}
            handleColdDelete={handleColdDelete}
          />
          <FrozenStorage
            frozenItems={frozenItems}
            handleFrozenDelete={handleFrozenDelete}
          />
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
  height: auto;
  text-align: -webkit-center;
  margin-left: 20%;
`;
