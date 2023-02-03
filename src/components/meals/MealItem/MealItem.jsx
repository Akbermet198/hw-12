import React, { useContext } from "react";
import styled from "styled-components";
import { MealItemForm } from "./MealItemForm";


const MealItem = ({ title, discription, price, id }) => {


  return (

    <StyledItem>
      <StyledItemInfo>
        <h4>{title}</h4>
        <p>{discription}</p>
        <span> ${price}</span>
      </StyledItemInfo>

   <MealItemForm id={id} price={price} title ={title}/>
    </StyledItem>
  );
};
export default MealItem;

const StyledItem = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d6d6d6;
  margin-bottom: 24px;
  padding:0;
  :last-child {
   border:none;
  }
  
`;

const StyledItemInfo = styled.div`
  margin-bottom: 20px;
 
  h4 {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #222222;
  
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #222222;
    margin: 4px 0;
    font-style: italic;
  }
  span {
   font-weight: 700;
font-size: 20px;
line-height: 30px;
color: #AD5502;
  }
`;
