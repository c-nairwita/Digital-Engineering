import React from "react";
import { products } from "../constants/ProductConstant";
import {
  Grid,
  Card,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";

const Products = () => {

  return (
    <>
      <Grid layout="row" container marginTop="10%">
        {products.map((product) => (
          <Grid xs={12} sm={3} padding={5}>
            <Card >
              <CardActionArea>
                <CardMedia
                  image={product.img}
                  alt={product.img}
                  title={product.header}
                  sx={{ width: "auto", height: 200 }}
                ></CardMedia>
              </CardActionArea>
              <CardContent sx={{textAlign:'center'}}>
                <Typography variant="h6" component="h2">
                  {product.header}
                </Typography>
                <Typography variant="h6" component="p">
                  {product.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Products;
