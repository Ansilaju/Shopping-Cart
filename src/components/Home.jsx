import React from "react";
import { cartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import Filters from "./Filters";
const Home = () => {
  const {
    state: { products },
  } = cartState();
  console.log(products);

  return (
    <div className="Home">
      <Filters />
      <div className="productContainer">
        {products.map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
