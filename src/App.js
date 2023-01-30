import styled from "styled-components";
import "./App.css";
import Basket from "./components/basket/Basket";
import Header from "./components/header/Header";
import Summary from "./components/summary/Summary";

function App() {
  return (
    <div className="App">
      <Header />
      <Content>
        <Basket />
        <Summary />
      </Content>
    </div>
  );
}

export default App;

const Content = styled.div`
  margin-top: 101px;
`;
