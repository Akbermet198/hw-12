import styled from "styled-components";
import { Button } from "../UI/Button";

export const BasketItem = ({title,price,amount}) => {
  return (
    <Contayner>
      <Title>{title}</Title>
     
      <Content>
       <PriceAndAmount>
       <Price>{price}</Price>
       <Amount>x{amount}</Amount>
        </PriceAndAmount>
        <CountContayner>
        <Button borderStyled="sqaured" variant="outlined">-</Button>
         <Button borderStyled="sqaured" variant = "outlined">+</Button>
        </CountContayner>
      </Content>
    </Contayner>
  );
};

const Contayner = styled.div`
 
 padding: 24px 0;
 width: 100%;
`
const Title = styled.p`
 font-weight: 600;
 font-size: 20px;
 line-height: 30px;
 margin: 0;
 color: #222222;


`
const Price = styled.p`
 margin: 0;
 font-weight: 600;
font-size: 18px;
line-height: 27px;
color: #AD5502;
`
const Amount = styled.span`
font-weight: 500;
font-size: 16px;
line-height: 24px;
border: 1px solid #D6D6D6;
border-radius: 6px;
display: block;
padding: 6px 14px;
color: #222222;
`
const PriceAndAmount = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 width: 153px;
`
const CountContayner = styled.div`
display: flex;
gap: 14px;
`
const Content = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
`