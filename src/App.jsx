import styled from "styled-components";
import bg from "./img/bg.png";
import { MainLayout } from "./styles/Layouts";
import MeshBall from "./Components/Mesh Animation/MeshBall";
import Navigation from "./Components/Navigation/Navigation";
function App() {
  return (
    <AppStyled bg={bg} className="App">
      <MeshBall />
      <MainLayout>
        <Navigation />
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  background-size: cover;
`;

export default App;
