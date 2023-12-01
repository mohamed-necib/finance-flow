import React, { useMemo, useState, useContext, useEffect } from "react";
import UserContext from "./contexts/userContext";
import styled from "styled-components";
import bg from "./img/bg.png";
import { MainLayout } from "./styles/Layouts";
import MeshBall from "./Components/Mesh Animation/MeshBall";
import Navigation from "./Components/Navigation/Navigation";
import Dashboard from "./Components/Dashboard/Dashboard";
import Incomes from "./Components/Incomes/Incomes";
import Expenses from "./Components/Expenses/Expenses";
import Authenticate from "./Components/Authenticate/Authenticate";
import { useGlobalContext } from "./contexts/globalContext";

function App() {

  //Global State
  const global = useGlobalContext();
  
  console.log(global);

  //Connexion State
  const { user, setUser } = useContext(UserContext);

  const checkConnection = async () => {
    const response = await fetch(
      "http://localhost/finance-flow/backend/authentication.php?check-auth=true",
      {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    if (data.success) {
      setUser({
        id: data.user.id,
        email: data.user.email,
        isAuth: true,
      });
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);

  //Navigation State
  const [activeNav, setActiveNav] = useState(1);

  const displayData = () => {
    switch (activeNav) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Transactions />;
      case 3:
        return <Incomes />;
      case 4:
        return <Expenses />;
      default:
        <Dashboard />;
    }
  };

  const meshMemo = useMemo(() => {
    return <MeshBall />;
  }, []);

  return (
    <AppStyled bg={bg} className="App">
      {meshMemo}
      <MainLayout>
        <Navigation active={activeNav} setActive={setActiveNav} />
        <main>{displayData()}</main>
      </MainLayout>
      {!user.isAuth && <Authenticate />}
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  background-size: cover;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.415);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
