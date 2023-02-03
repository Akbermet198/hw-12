import styled from "styled-components";

export const Button = ({
  children,
  variant = "contained",
  borderStyled = "rounded",
  ...restProps
}) => {
  return (
    <StyledButton variant={variant} borderStyled={borderStyled} {...restProps}>
      {children}
    </StyledButton>
  );
};

const getBachroundColor = (props) => {
  return props.variant === "contained" ? "#8a2b06" : "#FFF";
};

const getBorderColor = (props) => {
  return props.variant === "contained" ? "none" : "1px solid #8a2b06";
};
const getColor = (props) => {
  return props.variant === "contained" ? "#FFF" : "#8A2B06";
};
const getBorderRadius = (props) => {
  return props.borderStyled === "rounded" ? "20px" : "6px";
};
const StyledButton = styled.button`
  padding: 10px 32px;
  font-weight: 600;
  border-radius: ${getBorderRadius};
  background-color: ${getBachroundColor};
  color: ${getColor};
  font-size: 16px;
  line-height: 24px;
  border: ${getBorderColor};
  cursor: pointer;
  display: flex;
  align-items: center;
  :hover {
    background: #7e2a0a;
    color: white;
  }
  :active {
    background: #993108;
  }
`;
