import styled from "styled-components";
import { Modal } from "../UI/Modal";
import { BasketItem } from "./BasketItem";
import { TotalAmount } from "./TotalAmount";

const items = [
  {
    title: "Sushi",
    amount: 1,
    price: 22.99,
    id: "meal1",
  },
  // {
  //   title: "Schnitzel",
  //   amount: 1,
  //   price: 16.0,
  //   id: "meal2",
  // },
  // {
  //   title: "Barbecue Burger",
  //   amount: 1,
  //   price: 12.99,
  //   id: "meal3",
  // },
  // {
  //   title: "Green Bowl",
  //   amount: 1,
  //   price: 19.99,
  //   id: "meal4",
  // },
];
const Basket = () => {
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
        <TotalAmount price={200.5034} onClose={() => {}} onOrder={() => {}} />
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
