import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import AddIcon from "@mui/icons-material/Add";
import { Tooltip, IconButton } from "@mui/material";
import {
  decreaseQuantityReq,
  fetchProductsReq,
} from "../redux/actionTypes/productActionTypes";
import { Typography } from "@mui/material";
import {
  addMoreToCartReq,
  addToCartReq,
  fetchCartReq,
} from "../redux/actionTypes/cartActionTypes";

export default function ProductsComp() {
  const products = useSelector((state) => state.product.products);
  const cartItems = useSelector((state) => state.cart.cartItems);
  // console.log(products);
  // console.log(cartItems);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsReq());
    dispatch(fetchCartReq());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    var newCartItem = {};
    var updatedProduct = {};
    const itemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (product.quantity !== 0) {
      if (itemIndex === -1) {
        newCartItem = {
          ...product,
          quantity: 1,
        };
        dispatch(addToCartReq(newCartItem));
        dispatch(fetchProductsReq());
        dispatch(fetchCartReq());
      } else {
        var cartObj = cartItems.find((item) => item.id === product.id);
        newCartItem = {
          ...cartObj,
          quantity: cartObj.quantity + 1,
        };
        dispatch(addMoreToCartReq(newCartItem));
        dispatch(fetchProductsReq());
        dispatch(fetchCartReq());
      }
      updatedProduct = {
        ...product,
        quantity: product.quantity - 1,
      };
      dispatch(decreaseQuantityReq(updatedProduct));
      dispatch(fetchProductsReq());
      dispatch(fetchCartReq());
    } else {
      alert("Out of stock!");
    }
  };

  return (
    <>
      <Typography variant="h3">PRODUCTS</Typography>
      <div style={{ display: "flex" }}>
        {products !== undefined
          ? products.map((product, index) => (
              <Card
                key={index}
                sx={{
                  width: 300,
                  padding: "1rem",
                  margin: "8px",
                  marginTop: "2rem",
                  border: "0.5px solid lightgrey",
                }}
              >
                <CardHeader title={product.name} />
                <CardMedia component="img" height="194" image={product.image} />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: &#8377;{product.price}
                  </Typography>
                  <Typography>Quantity: {product.quantity}</Typography>
                  <Tooltip title="Add to cart" arrow>
                    <IconButton
                      variant="outlined"
                      sx={{
                        backgroundColor: "purple",
                        color: "white",
                        ":hover": {
                          bgcolor: "#E6E6FA",
                          color: "black",
                        },
                      }}
                      onClick={() => {
                        handleAddToCart(product);
                      }}
                    >
                      <AddIcon />
                    </IconButton>
                  </Tooltip>
                </CardContent>
              </Card>
            ))
          : []}
      </div>
    </>
  );
}
