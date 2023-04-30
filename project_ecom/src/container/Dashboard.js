import { AppBar, Button, Toolbar } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useState } from "react";
import ProductsComp from "../components/ProductsComp";
import MyCart from "../components/MyCart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSelector } from "react-redux";
import { Badge, IconButton } from "@mui/material";

export default function Dashboard() {
  const [cartVisible, setCartVisible] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartClickHandler = () => {
    setCartVisible(true);
  };
  const productClickHandler = () => {
    setCartVisible(false);
  };
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#301934" }}>
        <Toolbar>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "purple",
              margin: "1rem",
              ":hover": {
                bgcolor: "#E6E6FA",
                color: "black",
              },
            }}
            onClick={productClickHandler}
          >
            <ArrowBackIcon />
          </Button>
          <IconButton
            variant="contained"
            sx={{
              backgroundColor: "purple",
              color: "white",
              ":hover": {
                bgcolor: "#E6E6FA",
                color: "black",
              },
            }}
            onClick={cartClickHandler}
          >
            <Badge badgeContent={cartItems.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      {cartVisible ? <MyCart /> : <ProductsComp />}
    </>
  );
}
