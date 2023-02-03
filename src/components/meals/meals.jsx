import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchApi } from "../../lib/fetchApi";
import MealItem from "./MealItem/MealItem";

const Dummy_Meals = [
  {
    title: "Sushi",
    discription: "Finest fish and veggies",
    price: 22.99,
    id: "meal1",
  },
  {
    title: "Schnitzel",
    discription: "A german specialty!",
    price: 16.0,
    id: "meal2",
  },
  {
    title: "Barbecue Burger",
    discription: "American, raw, meaty",
    price: 12.99,
    id: "meal3",
  },
  {
    title: "Green Bowl",
    discription: "Healthy...and green...",
    price: 19.99,
    id: "meal4",
  },
];

const Meals = () => {
  const [meals, setMeals]=useState([])
const [error, setError]=useState("")

  const getMeals = async ()=>{
    try {
    const  data = await  fetchApi("foods")
    setMeals(data)
    console.log(data)
    }catch (error){
    setError("Failed to load meals")
    }
  }
  useEffect (()=>{
   getMeals()
  },[])


  return (
    <Card>
      {error && <p style={{color: "red"}}>{error}</p>}
      {meals.map((meal) => {
        return (
          <MealItem
            title={meal.title}
            discription={meal.discription}
            price={meal.price}
            id={meal.id}
          />
        );
      })}
    </Card>
  );
};
export default Meals;

const Card = styled.ul`
  background: #ffffff;
  border-radius: 16px;
  width: 1039px;
  height: 560px;
  margin: 40px auto;
  padding: 40px 40px 16px 40px;
  list-style: none;
`;
