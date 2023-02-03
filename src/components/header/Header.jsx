import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { BasketContext } from "../../store/BasketContex";
import { BusketButton } from "./BasketButton";

const Header = ({ onShowBasket }) => {
  const { items } = useContext(BasketContext);
  const [animationClass, setAnimationClass] = useState("");
  const calculateTotalAmount = () => {
    const sum = items.reduce((s, item) => {
      return s + item.amount;
    }, 0);
    return sum;
  };

  useEffect(() => {
    setAnimationClass("bump");
    const id = setTimeout(() => {
      setAnimationClass("");
    }, 300);


    return ()=>{
      clearTimeout(id)
    }
  }, [items]);
  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <BusketButton
        className={animationClass}
        onClick={onShowBasket}
        count={calculateTotalAmount()}
      ></BusketButton>
    </Container>
  );
};
export default Header;

const Container = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #8a2b06;
  height: 101px;
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  z-index: 1;

  .bump {
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;
const Logo = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
  margin: 0;
`;
