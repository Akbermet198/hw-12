import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Basket from "./components/basket/Basket";
import Header from "./components/header/Header";
import Summary from "./components/summary/Summary";
import { BasketProvider } from "./store/BasketContex";

function App() {
  const [isBasketVisible, setBasketVisible] = useState(false);
  const ShowBasketHandler = () => {
    setBasketVisible((prevState) => !prevState);
  };
  return (
    <div className="App">
      <BasketProvider>
        <Header onShowBasket={ShowBasketHandler} />
        <Content>
          {isBasketVisible && <Basket onClose={ShowBasketHandler} />}
          <Summary />
        </Content>
      </BasketProvider>
    </div>
  );
}

export default App;

const Content = styled.div`
  margin-top: 101px;
`;
