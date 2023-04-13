import React from "react";
import { Grid, Card, CardContent, Typography, Paper } from "@mui/material";
import { services } from "../constants/ServiceConstant";

const Services = () => {

  return (
    <>
      <Grid layout="row" container marginTop='10%'>
        {services.map((service) => (
          <Grid xs={12} sm={3} padding={3}>
            <Paper>
              <Card>
                <Grid textAlign= {'center'}>
                  <img src={service.img} alt={service.img} />
                </Grid>
                <CardContent sx={{textAlign:'center'}}>
                  <Typography variant="h6" component='h2'>{service.header}</Typography>
                  <Typography variant="h6" component='p'>{service.content}</Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Services;
