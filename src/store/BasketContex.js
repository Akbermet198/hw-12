import { createContext, useEffect, useState } from "react";
import { fetchApi } from "../lib/fetchApi";

export const BasketContext = createContext({
  items: [],
});
export const BasketProvider = ({ children }) => {
  const [items, setItems] = useState([]);
const getBasket = async ()=>{
try {
  const { data} = await fetchApi("basket")

  setItems(data.items)
}catch(error){
  console.log(error)
}
}

  useEffect(()=>{
getBasket()
},[])

const addToBasket = async (newItem)=>{
  console.log(newItem)
  try {
    const responce = await fetchApi (`food/${newItem.id}/addToBasket`, {
      method: "POST",
      body: {amount: newItem.amount},
    })
    setItems(responce.data.items)
  }catch(error){
    console.log(error)
  }
}
//   const addToBasket = (newItem) => {
//     setItems((prevState) => {
//       if (!prevState.length) {
//         return [newItem];
//       }
//       const doesItemExit = prevState.find(
//         (oldItem) => oldItem.id === newItem.id
//       );

//       if(!doesItemExit){
//        return [...prevState, newItem]
//       }
//       const updatedItems = prevState.map((oldItem) => {
//         if (oldItem.id === newItem.id) {
//           oldItem.amount = oldItem.amount + newItem.amount;
//         }
//         return oldItem;
//       });
//       return updatedItems;
//     });
//   };
  const state = {
    items,
    addToBasket,
  };
  return (
    <BasketContext.Provider value={state}>{children}</BasketContext.Provider>
  );
};
