import { useContext } from "react";
import styled from "styled-components";
import { BasketContext } from "../../store/BasketContex";
import { Modal } from "../UI/Modal";
import { BasketItem } from "./BasketItem";
import { TotalAmount } from "./TotalAmount";



const Basket = ({onClose}) => {

  const {items} =useContext(BasketContext)

  const gettotalPrice = ()=>{
    return items.reduce((sum, {price, amount})=> sum +amount * price, 0)
  }
  return (
    <Modal onClose={() => {}}>
      <Content>
        {items.length ? (
          <FixedHeightContainer>
            {items.map((item) => {
              return (
                <BasketItem
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  amount={item.amount}
                ></BasketItem>
              );
            })}
          </FixedHeightContainer>
        ) : null}
        <TotalAmount price={gettotalPrice()} onClose={onClose} onOrder={() => {}} />
      </Content>
    </Modal>
  );
};
export default Basket;
const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 1rem;
  
`;
const FixedHeightContainer = styled.div`
  overflow-y: scroll;
  max-height: 228px;
`;
