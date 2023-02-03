import { useContext, useState } from "react";
import styled from "styled-components";
import { ReactComponent as PlusIcon } from "../../../assets/icoms/plus.svg";
import { BasketContext } from "../../../store/BasketContex";
import { Button } from "../../UI/Button";

export const MealItemForm = ({ id, title, price}) => {
  const [amount, setAmount] = useState(1);
  const amountChangeHandler = (event) => {
    setAmount(+event.target.value);
  };
  const {addToBasket }= useContext(BasketContext)

const submitHandler = (event)=>{
  event.preventDefault()
  const basketItem = {
    id,
    price,
    title,
    amount,
  }
  addToBasket(basketItem)
}

  return (
    <StyledForm onSubmit={submitHandler}>
      <StyledInput>
        <label htmlFor={id}>Amount</label>
        <input
          type="number"
          min={1}
          defaultValue={1}
          max={5}
          id={id}
          onChange={amountChangeHandler}
          value={amount}
        />
      </StyledInput>

      <Button>
        <StyledIcon /> Add
      </Button>
    </StyledForm>
  );
};
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  input {
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    width: 60px;
    height: 32px;
    margin-left: 20px;
    outline: none;
    padding: 4px 12px;
  }
`;
const StyledInput = styled.div`
  margin-bottom: 12px;
  label {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #222222;
  }
`;
const StyledIcon = styled(PlusIcon)`
  margin-right: 10px;
`;
