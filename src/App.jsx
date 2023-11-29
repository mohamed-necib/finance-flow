import React, { useMemo, useState } from "react";
import styled from "styled-components";
import bg from "./img/bg.png";
import { MainLayout } from "./styles/Layouts";
import MeshBall from "./Components/Mesh Animation/MeshBall";
import Navigation from "./Components/Navigation/Navigation";
import Dashboard from "./Components/Dashboard/Dashboard";
import Incomes from "./Components/Incomes/Incomes";
import Expenses from "./Components/Expenses/Expenses";

function App() {
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
        <main>
          {displayData()}
        </main>
      </MainLayout>
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
