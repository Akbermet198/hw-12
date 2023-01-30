import styled from "styled-components";
import { BusketButton } from "./BasketButton";

const Header = () => {
  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <BusketButton></BusketButton>
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
`;
const Logo = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
  margin: 0;
`;
