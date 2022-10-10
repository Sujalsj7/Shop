import React, { createContext, useReducer, useContext } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer } from "./Reducer";
import { productReducer } from "./Reducer";

// import { useState, useEffect } from "react";

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {

  

  const products = [...Array(5)].map(()=>({
      id:faker.datatype.uuid(),
      name:faker.commerce.productName(),
      price:faker.commerce.price(),
      color:faker.color.human(),
      image:faker.image.abstract(),
      instock:faker.helpers.arrayElement([0,2,5,7]),
     

  }));


  

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

//   -----------------SEARCHFILTER---------------


  const [productState, productDispatch] = useReducer(productReducer, {

    searchQuery: "",
    byColor:null,   //changecolor
  });



  return <Cart.Provider value={{ state, dispatch,productState, productDispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
