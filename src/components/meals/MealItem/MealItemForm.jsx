import styled from "styled-components";
import { ReactComponent as PlusIcon } from "../../../assets/icoms/plus.svg";
import { Button } from "../../UI/Button";

export const MealItemForm = ({id}) => {
  return (
    <StyledForm>
      <StyledInput>
        <label htmlFor={id}>Amount</label>
        <input type="number" min={1} defaultValue={1} max={5} id={id} />
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
