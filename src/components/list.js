import React from "react";
import { useState } from "react";
import { CartState } from "../context/Context";

import { AiOutlineShoppingCart } from "react-icons/ai";



import { FormControl } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";


import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

import {
  Badge,
  
  Nav,
  Button,
  
} from "react-bootstrap";


const List = () => {
  const {
    state: { cart },
    dispatch,
    // productDispatch
  } = CartState();

  const {
    state: { products },
    // productState:{searchQuery}
  } = CartState();
  

  
  
  

  const [filter, setFilter] = useState(products);


  // --------------------------SEARCH FUNCTION-------------------------
  
  // const transformProducts = (e)=>{
  //   let sortedProducts = products;

  //   if(searchQuery){
  //     sortedProducts = products.filter((prod)=>
  //     prod.name.toLowerCase().includes(searchQuery))

  //     setFilter(sortedProducts);
      
      
  //   }

    
  // }


  console.log(filter);

  const filterProduct = (cat) => {
    const updatedList = products.filter((x) => x.color === cat);
    setFilter(updatedList);
  };

  

  return (
    <div>
      <section id="posts">
        <div class="container m-5 p-5 ml-auto">
          <div class="row">
            <div class="col">
              <div class="card">
                {/* <Header /> */}

                <div class="card-header d-flex ">
                  

                  <Button
                    className="m-1"
                    type="submit"
                    onClick={() => filterProduct("turquoise")}
                  >
                   turquoise
                  </Button>
                  <Button
                    className="m-1"
                    type="submit"
                    onClick={() => filterProduct("orchid")}
                  >
                    orchid
                  </Button>
                  <Button
                    className="m-1"
                    type="submit"
                    onClick={() => filterProduct("blue")}
                  >
                    blue
                  </Button>

                  <Link onClick={() => setFilter(products)} className="m-3">
                    reset
                  </Link>

                  <div class="input-group"></div>

                  <FormControl
                    style={{ width: 200 }}
                    placeholder="search"
                    className="m-auto d-flex "
                    alignRight
                    // onChange={(e)=>{
                    //   productDispatch({
                    //     type:"FILTER_BY_SEARCH",
                    //     payload:e.target.value,
                    //   })
                    // }}
                    // onChange={(e)=>{
                    //   transformProducts(e)
                    // }}
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
                              <Button
                                style={{ width: "95%", margin: "0 10px" }}
                              >
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

                {/* ------------------------------------------------------------------ */}

                <table class="table table-striped">
                  <thead class="table-dark">
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Color</th>
                      <th>Stock</th>
                      <th>price</th>
                      <th>Buy</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filter.map((prod) => {
                      return (
                        <tr>
                          <td>
                            <img
                              style={{ width: 140 }}
                              alt="err"
                              src={prod.image}
                            />
                          </td>
                          <td>{prod.name}</td>
                          <td>{prod.color}</td>
                          <td>{prod.instock}</td>
                          <td>{prod.price}</td>
                          <td>
                            {cart.some((p) => p.id === prod.id) ? (
                              <button
                                onClick={() => {
                                  dispatch({
                                    type: "REMOVE_TO_CART",
                                    payload: prod,
                                  });
                                }}
                                type="button"
                                class="btn btn-danger"
                                disabled={!prod.instock}
                              >
                                Remove from Cart
                              </button>
                            ) : (
                              <button
                                onClick={() => {
                                  dispatch({
                                    type: "ADD_TO_CART",
                                    payload: prod,
                                  });
                                }}
                                type="button"
                                class="btn btn-dark"
                                disabled={!prod.instock}
                              >
                                {!prod.instock ? (
                                  "Out of stock"
                                ) : (
                                  <AiOutlineShoppingCart />
                                )}
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default List;

