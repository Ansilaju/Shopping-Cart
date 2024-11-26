import React, { createContext, useContext, useReducer } from "react";

import { cartReducer } from "./Reducer";
const Cart = createContext();

const Context = ({ children }) => {
  const products = [
    {
      id: 1,
      name: "Addidas Limited Edition Football",
      MRP: 1200,
      OfferPrice: 450,
      image: "src/assetsadidas-football-png.png",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Kookaburra Cricket Ball",
      MRP: 800,
      OfferPrice: 300,
      image: "src/assetsball.png",
      rating: 4.25,
    },
    {
      id: 3,
      name: "Baseball Bat",
      MRP: 950,
      OfferPrice: 550,
      image: "src/assetsbaseball bat.png",
      rating: 4.2,
    },
    {
      id: 4,
      name: "Gray-Nichols Cricket Bat",
      MRP: 1800,
      OfferPrice: 1050,
      image: "src/assetsbat.png",
      rating: 4.9,
    },
    {
      id: 5,
      name: "Football Boots",
      MRP: 750,
      OfferPrice: 100,
      image: "src/assetsboots.png",
      rating: 4.5,
    },
    {
      id: 6,
      name: "Golf Stick",
      MRP: 1300,
      OfferPrice: 350,
      image: "src/assetsgolf.png",
      rating: 3.9,
    },
    {
      id: 7,
      name: "Hockey Stick",
      MRP: 1200,
      OfferPrice: 299,
      image: "src/assethockeyStick.png",
      rating: 4.5,
    },
    {
      id: 8,
      name: "Cricket Kit",
      MRP: 13000,
      OfferPrice: 999,
      image: "src/assetskit.png",
      rating: 4.25,
    },
    {
      id: 9,
      name: "Tennis Racket",
      MRP: 850,
      OfferPrice: 150,
      image: "src/assetstennis.png",
      rating: 4.5,
    },
    {
      id: 10,
      name: "Volleyball",
      MRP: 200,
      OfferPrice: 50,
      image: "src/assetsvolleyball.png",
      rating: 4.5,
    },
  ];

  // console.log(products);

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const cartState = () => {
  return useContext(Cart);
};
