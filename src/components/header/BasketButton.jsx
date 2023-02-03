import styled from "styled-components";
import { ReactComponent as BasketIcon } from "../../assets/icoms/basket_icon.svg";

export const BusketButton = ({ count, ...restProps }) => {
  return (
    <BasketButton {...restProps}>
      <BasketIcon />
      <StyledTitle>Your card 7</StyledTitle>
      <StyledCounter >{count || 0}</StyledCounter>
    </BasketButton>
  );
};
const BasketButton = styled.button`
  padding: 12px 32px;
  font-weight: 600;
  border-radius: 30px;
  background-color: #5a1f08;
  color: white;
  font-size: 16px;
  line-height: 24px;
  border: none;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #2c0d00;
  }
`

const StyledTitle = styled.span`
  margin-left: 12px;
  margin-right: 24px;
`;

const StyledCounter = styled.span`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #ffffff;
  border-radius: 30px;
  padding: 4px 20px;
 background-color:#8a2b06;
`;
