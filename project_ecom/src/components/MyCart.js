import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCartReq,
  removeFromCartReq,
} from "../redux/actionTypes/cartActionTypes";
import { Alert, Box, AlertTitle, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import RemoveIcon from "@mui/icons-material/Remove";
import { Tooltip, IconButton } from "@mui/material";
import { deleteReq } from "../redux/actionTypes/productActionTypes";

export default function MyCart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const products = useSelector((state) => state.product.products);

  // console.log(cartItems);
  const dispatch = useDispatch();

  useState(() => {
    dispatch(fetchCartReq());
  }, [dispatch]);

  const removeFromCartHandler = (item) => {
    console.log("id", item.id);
    dispatch(removeFromCartReq(item.id));

    const itemIndex = products.findIndex((product) => product.id === item.id);

    console.log("removed quantity", item.quantity);
    console.log("remaining quantity", products[itemIndex].quantity);
    const newQuantity = products[itemIndex].quantity + item.quantity;
    console.log("total quantity", newQuantity);
    products[itemIndex].quantity = newQuantity;
    const updatedItems = {
      ...item,
      quantity: newQuantity,
    };
    dispatch(deleteReq(updatedItems));
  };

  const boxStyle = {
    margin: "auto",
    marginTop: "1rem",
    marginBottom: "1rem",
    padding: "1rem",
    border: "1px solid black",
    borderRadius: 9,
    width: "15%",
    height: "10%",
  };

  var total = 0;

  return (
    <>
      <Typography variant="h3">My Cart</Typography>
      <div style={{ display: "flex" }}>
        {cartItems.length !== 0 ? (
          cartItems.map((item, index) => (
            <Card
              key={index}
              sx={{
                maxWidth: 345,
                padding: "1rem",
                margin: "8px",
                marginTop: "2rem",
                border: "0.5px solid lightgrey",
              }}
            >
              <CardHeader title={item.name} />
              <CardMedia component="img" height="194" image={item.image} />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: &#8377;{item.price}
                </Typography>
                <div style={{ display: "none" }}>
                  Total price: {(total = total + item.price * item.quantity)}
                </div>
                <Typography>Quantity: {item.quantity}</Typography>
                <Tooltip title="Remove from cart" arrow>
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
                      removeFromCartHandler(item);
                    }}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Tooltip>
              </CardContent>
            </Card>
          ))
        ) : (
          <div style={{ margin: "auto", marginTop: "2rem" }}>
            <Alert severity="info">
              <AlertTitle>Info</AlertTitle>
              Your cart is empty — <strong>Add Items!</strong>
            </Alert>
          </div>
        )}
      </div>
      <Box sx={boxStyle}>
        <Typography variant="h5">Total Price: &#8377;{total}</Typography>
      </Box>
    </>
  );
}
