import styled from "styled-components";
import { Button } from "../UI/Button";

export const TotalAmount = ({ price, onClose, onOrder }) => {
  const orderButton =
    price > 0 ? (
      <Button variant="contained" onClick={onOrder}>
        Order
      </Button>
    ) : null;


  return (
    <div style={{paddingTop: "30px"}}>
      <InfoContayner>
        <Label>Total Amount</Label>
        <Price >${price.toFixed(2)}</Price>
      </InfoContayner>

      <ActionButtonsContayner>
        <Button variant="outlined" onClick={onClose}>
          Close
        </Button>
        {orderButton}
      </ActionButtonsContayner>
    </div>
  );
};

const Label = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #222222;
`;
const Price = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  color: #8a2b06;
`;
const InfoContayner = styled.div`
  display: flex;
  justify-content: space-between;

`;
const ActionButtonsContayner = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  gap: 1rem;
`;
