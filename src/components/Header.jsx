import React from "react";
import {
  Badge,
  Container,
  Dropdown,
  FormControl,
  Navbar,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { cartState } from "../context/Context";
const Header = () => {
  const {
    state: { cart },
  } = cartState();
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <Link to="/"> Shopping Cart</Link>
          </Navbar.Brand>
          <Navbar.Text>
            <FormControl
              style={{ width: 500 }}
              placeholder="Search a product"
            />
          </Navbar.Text>
          <Dropdown>
            <Dropdown.Toggle>
              <FaShoppingCart />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <span>Cart is empty</span>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
