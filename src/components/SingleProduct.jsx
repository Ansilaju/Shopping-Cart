import React from "react";
import { Button, Card } from "react-bootstrap";
import { cartState } from "../context/Context";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = cartState();
  return (
    <div className="products">
      <Card className="kuttan">
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <div className="price">
              <span>MRP:{prod.MRP}</span>
              <span>OfferPrice:{prod.OfferPrice}</span>
            </div>
            <span className="rating "> RATING:{prod.rating}</span>
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                });
              }}
              variant="danger"
              className="butt"
            >
              Remove From Cart
            </Button>
          ) : (
            <Button
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                });
              }}
              className="butt"
            >
              Add To Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
