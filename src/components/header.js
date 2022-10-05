import React from "react";
import { FormControl } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
// import { icons } from "react-icons/lib";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
// import { cartReducer } from "../context/Reducer";
import {
  Badge,
  // Container,
  Nav,
  Button,
  // Navbar,
  // Dropdown,
} from "react-bootstrap";

// import {  useLocation } from "react-router-dom";
import { CartState } from "../context/Context";
// import "./styles.css";

const header = () => {
  const {
    state: { cart },
    dispatch,
    // productDispatch,
  } = CartState();

  return (
    <div class="card-header d-flex ">
      <DropdownButton id="dropdown-basic-button" title="Type"className="m-1">
        <Dropdown.Item href="/">Hoodie</Dropdown.Item>
        <Dropdown.Item href="/">Shirts</Dropdown.Item>
        <Dropdown.Item href="/">T-shirts</Dropdown.Item>
      </DropdownButton>

      <DropdownButton id="dropdown-basic-button" title="Size" className="m-1">
        <Dropdown.Item href="/">L</Dropdown.Item>
        <Dropdown.Item href="/">M</Dropdown.Item>
        <Dropdown.Item href="/">S</Dropdown.Item>
      </DropdownButton>

      <div class="input-group"></div>
      {/* <FormControl
        style={{ width: 200 }}
        placeholder="search"
        className="m-auto d-flex "
        alignRight
      /> */}
      {/* <div class=" bg-light">
                    
                    <a href="/checkout" type="button" class="btn btn-dark">
                      Goto Cart
                    </a>
                  </div> */}

      <FormControl
        style={{ width: 200 }}
        placeholder="search"
        className="m-auto d-flex "
        alignRight
      />
      <Nav className="m-1">
        <Dropdown alignRight>
          <Dropdown.Toggle variant="success">
            <FaShoppingCart color="white" fontSize="25px" />
            <Badge>{cart.length}</Badge>
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ minWidth: 370 }}>
            {cart.length > 0 ? (
              <>
                {cart.map((prod) => (
                  <span className="cartitem" key={prod.id}>
                    <img
                      src={prod.image}
                      className="cartItemImg"
                      alt={prod.name}
                    />
                    <div className="cartItemDetail">
                      <span>{prod.name}</span>
                      <span>₹ {prod.price.split(".")[0]}</span>
                    </div>
                    <AiFillDelete
                      fontSize="20px"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_TO_CART",
                          payload: prod,
                        })
                      }
                    />
                  </span>
                ))}

                <Link to="/checkout">
                  <Button style={{ width: "95%", margin: "0 10px" }}>
                    Go To Cart
                  </Button>
                </Link>
              </>
            ) : (
              <span style={{ padding: 10 }}>Cart is Empty!</span>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </div>
  );
};

export default header;
