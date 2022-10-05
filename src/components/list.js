import React from "react";
// import { useState, useEffect } from "react";
import { CartState } from "../context/Context";
// import Context from "../context/Context";
// import { FormControl } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import { Link } from "react-router-dom";
import Header from "./header";

const List = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const {
    state: { products },
  } = CartState();
  console.log(products);

  

  return (
    <div>
      <section id="posts">
        <div class="container m-5 p-5 ml-auto">
          <div class="row">
            <div class="col">
              <div class="card">
                <Header />

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
                    {products.map((prod) => {
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
